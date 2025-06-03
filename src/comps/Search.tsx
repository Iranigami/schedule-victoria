import searchIcon from "../assets/images/icons/search.svg";
import closeIcon from "../assets/images/icons/close.svg";
import Keyboard from "./Keyboard";
import { useState, type ChangeEvent } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Search({ isOpen, onClose }: Props) {
  const [text, setText] = useState("");
  const [isKeyboardOpen, setKeyboardOpen] = useState(true);
  const inputField = document.getElementById("searchInput")!;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
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
          onClick={onClose}
        />
      </div>
      <Keyboard
        opened={isKeyboardOpen && isOpen}
        enterButton={(button: string) => {
          (inputField as HTMLInputElement).value += button;
        }}
        onClose={() => setKeyboardOpen(false)}
        onBackspace={() => {
          (inputField as HTMLInputElement).value = (
            inputField as HTMLInputElement
          ).value.substring(
            0,
            (inputField as HTMLInputElement).value.length - 1,
          );
        }}
      />
    </>
  );
}
