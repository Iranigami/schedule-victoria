import searchIcon from "../assets/images/icons/search.svg";
import closeIcon from "../assets/images/icons/close.svg";
import Keyboard from "./Keyboard";
import { useEffect, useRef, useState, type ChangeEvent } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (search: string) => void;
};

export default function Search({ onSearch, isOpen, onClose }: Props) {
  const queryTimeout = useRef<any>(null);
  const searchQuery = useRef("");
  useEffect(()=>{
    setKeyboardOpen(true);
  }, [isOpen])
  const getSearchResults = () => {
    clearTimeout(queryTimeout.current);
    queryTimeout.current = setTimeout(async () => {
      onSearch(searchQuery.current);
    }, 500);
  };
  const [text, setText] = useState("");
  const [isKeyboardOpen, setKeyboardOpen] = useState(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    searchQuery.current = event.target.value;
  };
  return (
    <>
      <div
        className={`z-0 fixed w-[1568px] h-[412px] bg-linear-to-b from-transparent to-black opacity-50 bottom-[-412px] ${isOpen && isKeyboardOpen ? "translate-y-[-412px] duration-200" : "duration-1300"} left-[352px]`}
      />
      <div
        className={`z-100 justify-center items-center flex gap-[8px] w-[1520px] h-[64px] mt-[-64px] duration-150 bg-white border-[2px] border-orange rounded-[20px] origin-right ${!isOpen && "scale-x-0"}`}
      >
        <img src={searchIcon} alt="search" className="size-[24px]" />
        <input
          onChange={handleChange}
          value={text}
          autoComplete="off"
          onFocus={() => setKeyboardOpen(true)}
          id="searchInput"
          className="w-[1424px] h-[20px] text-text text-[20px] font-normal leading-[100%] focus:outline-none"
        />
        <img
          src={closeIcon}
          alt="close"
          className="size-[24px]"
          onClick={() => {
            if (text !== "") {
              setText("");
              searchQuery.current = "";
              onSearch("");
            }
            onClose();
          }}
        />
      </div>
      <Keyboard
        opened={isKeyboardOpen && isOpen}
        enterButton={(button: string) => {
          setText((prev) => prev + button);
          searchQuery.current = searchQuery.current + button;
          getSearchResults();
        }}
        onClose={() => setKeyboardOpen(false)}
        onBackspace={() => {
          setText((prev) => prev.slice(0, -1));
          searchQuery.current = searchQuery.current.slice(0, -1);
          getSearchResults();
        }}
      />
    </>
  );
}
