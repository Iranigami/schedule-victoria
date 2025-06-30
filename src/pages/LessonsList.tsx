import { useEffect, useState } from "react";
import filterIcon from "../assets/images/icons/filter.svg";
import searchIcon from "../assets/images/icons/search.svg";
import Search from "../comps/Search";
import type { Unity } from "../types";
import LessonCard from "../comps/LessonCard";
import axios from "axios";
import Loading from "../comps/Loading";
import FilterModal from "../comps/FilterModal";

export default function LessonsList() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [teachersList, setTeachersList] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(apiUrl + "api/unity")
      .then((response) => {
        setLessonClasses(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
    axios
      .get(apiUrl + "api/teacher")
      .then((response) => {
        const r = response.data;
        setTeachersList(r.map((item:any) => item.fullName));
        setIsLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  }, []);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  //const [selectedLesson, setSelectedLesson] = useState<string | undefined>(
  //  undefined,
  //);
  const [lessonsList, setLessonClasses] = useState<Unity[]>([]);
  isFilterOpen; //lmao
  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "translate-y-[-100px]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Кружки
        </span>
        <div className="flex gap-[16px]">
          <button
            onClick={() => setFilterOpen(true)}
            className="size-[64px] rounded-[20px] p-[20px] bg-white"
          >
            <img src={filterIcon} alt="filter" className="size-[24px]" />
          </button>
          <button
            onClick={() => {
              setFilterOpen(false);
              setSearchOpen(true);
            }}
            className="size-[64px] rounded-[20px] p-[20px] bg-white"
          >
            <img src={searchIcon} alt="search" className="size-[24px]" />
          </button>
        </div>
      </div>
      <Search onSearch={()=>{}} isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
      <div className="w-[1520px] max-h-[944px] mt-[24px] p-[20px] bg-[#FFFFFF80] rounded-[20px]">
        <div className="w-[1480px] h-[904px] overflow-x-hidden overflow-y-auto">
          <div className="w-[1460px] grid grid-cols-1 gap-[16px]">
            {lessonsList.map((lesson, index: number) => (
              <LessonCard
                id={lesson.id}
                key={index}
                title={lesson.title}
                time={lesson.years}
                address={lesson.division}
                additional={lesson.note}
                desc={lesson.description}
                age={"от " + lesson.ageBefore + " до " + lesson.ageAfter}
                conds={lesson.finance}
                code={lesson.codEs3}
              />
            ))}
          </div>
        </div>
      </div>
      {isFilterOpen && (
        <FilterModal
          selected={[]}
          filters={[
            {
              title: "Группа",
              type: "check",
              options: [""],
            },
            {
              title: "Кружок",
              type: "list",
              options: lessonsList.map((item:any) => item.title),
            },
            {
              title: "Направление",
              type: "list",
              options: teachersList,
            },
          ]}
          onSelect={() => setFilterOpen(false)}
          onClose={() => setFilterOpen(false)}
        />
      )}
      {isLoading && (
        <div className="absolute top-0 left-[352px] w-[1568px] h-[1080px] bg-bg flex items-center justify-center">
          <Loading />
        </div>
      )}

    </div>
  );
}
