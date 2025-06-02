import { useState } from "react";
import arrIcon from "../assets/images/icons/arrow.svg";
import searchIcon from "../assets/images/icons/search.svg";
export default function Main() {
  const [isAllTeachersFilterOpen, setAllTeachersFilterOpen] = useState(false);
  const [isAllLessonsFilterOpen, setAllLessonsFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "scale-x-0 ml-[-50%]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Расписание
        </span>
        <div className="flex gap-[16px]">
          <button
            onClick={() => {
              setAllTeachersFilterOpen((prev) => !prev);
              setAllLessonsFilterOpen(false);
            }}
            className="w-[368px] h-[64px] bg-white rounded-[20px] flex justify-between items-center px-[26px] text-[20px] text-[#848484] leading-[100%] font-bold"
          >
            Все педагоги
            <img
              src={arrIcon}
              alt="img"
              className={`duration-150 size-[24px] ${isAllTeachersFilterOpen && "rotate-180"}`}
            />
          </button>
          <button
            onClick={() => {
              setAllLessonsFilterOpen((prev) => !prev);
              setAllTeachersFilterOpen(false);
            }}
            className="w-[368px] h-[64px] bg-white rounded-[20px] flex justify-between items-center px-[26px] text-[20px] text-[#848484] leading-[100%] font-bold"
          >
            ИЗО, ДПИ, Керамика
            <img
              src={arrIcon}
              alt="img"
              className={`duration-150 size-[24px] ${isAllLessonsFilterOpen && "rotate-180"}`}
            />
          </button>
          <button
            onClick={() => {
              setAllLessonsFilterOpen(false);
              setAllTeachersFilterOpen(false);
              setSearchOpen(true);
            }}
            className="size-[64px] rounded-[20px] p-[20px] bg-white"
          >
            <img src={searchIcon} alt="search" className="size-[24px]" />
          </button>
        </div>
      </div>
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 bg-white border-[2px] border-orange rounded-[20px] ${!isSearchOpen && "scale-x-0 ml-[50%]"}`}
      >
        
      </div>
    </div>
  );
}
