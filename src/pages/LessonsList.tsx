import { useEffect, useState } from "react";
import filterIcon from "../assets/images/icons/filter.svg";
import searchIcon from "../assets/images/icons/search.svg";
import Search from "../comps/Search";
import filterActiveIcon from "../assets/images/icons/FilterAct.svg";
import type { Unity } from "../types";
import LessonCard from "../comps/LessonCard";
import axios from "axios";
import Loading from "../comps/Loading";
import FilterModal from "../comps/FilterModal";
import NothingFound from "../comps/NothingFound";

export default function LessonsList() {
  const [address] = useState([
    { id: 1, title: "Газопровод" },
    { id: 2, title: "Юный техник" },
    { id: 3, title: "Аннино" },
    { id: 4, title: "Щербинка" },
    { id: 5, title: "Другое" },
  ]);
  const [financeCond] = useState([
    { type: "false", title: "Бюджет", id: 1 },
    { type: "true", title: "Внебюджет", id: 2 },
  ]);
  //@ts-ignore
  const apiUrl = window.__API_CONFIG__.apiUrl;
  const [selectedFilters, setSelectedFilters] = useState<
    {
      group: string;
      option: { id: number; title: string; type?: string };
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const parseFilters = (
    data: {
      group: string;
      option: { id: number; title: string; type?: string };
    }[],
  ) => {
    const division = data
      .filter((item) => item.group === "Адрес")
      .map((item) => item.option.title);
    const finance = data
      .filter((item) => item.group === "Тип услуги")
      .map((item) => item.option.type);
    const ageBefore = data
      .filter((item) => item.group === "Возрастmin")
      .map((item) => item.option.title);
    const ageAfter = data
      .filter((item) => item.group === "Возрастmax")
      .map((item) => item.option.title);
    const filter = `?division=${division}&finance=${finance}&ageBefore=${ageBefore}&ageAfter=${ageAfter}`;
    axios
      .get(apiUrl + "api/unity" + filter)
      .then((response) => {
        setLessonClasses(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
        setLessonClasses([]);
      });
  };
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
  }, []);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [lessonsList, setLessonClasses] = useState<Unity[]>([]);
  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      {isFilterOpen && (
        <FilterModal
          selected={selectedFilters}
          filters={[
            {
              title: "Адрес",
              type: "check",
              options: address,
            },
            {
              title: "Тип услуги",
              type: "check",
              options: financeCond,
            },
            {
              title: "Возраст",
              type: "slider",
              min: 0,
              max: 18,
            },
          ]}
          onSelect={(selected) => {
            parseFilters(selected);
            setSelectedFilters(selected);
          }}
          onClose={() => setFilterOpen(false)}
        />
      )}
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "translate-y-[-100px]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Кружки
        </span>
        <div className="flex gap-[16px]">
          <button
            onClick={() => {
              setFilterOpen(true);
            }}
            className={`size-[64px] rounded-[20px] p-[20px] bg-white relative ${isFilterOpen && "z-[-1]"}`}
          >
            <img
              hidden={selectedFilters.length !== 0}
              src={filterIcon}
              alt="filter"
              className="size-[24px]"
            />
            <img
              hidden={selectedFilters.length === 0}
              src={filterActiveIcon}
              alt="filter"
              className="size-[24px]"
            />
            <div
              hidden={selectedFilters.length === 0}
              className="absolute top-[-4px] right-[-4px] size-[24px] bg-orange rounded-full flex justify-center items-center text-white text-[16px] font-bold leading-[100%]"
            >
              {selectedFilters.length}
            </div>
          </button>
          <button
            onClick={() => {
              setSearchOpen(true);
            }}
            className="size-[64px] rounded-[20px] p-[20px] bg-white"
          >
            <img src={searchIcon} alt="search" className="size-[24px]" />
          </button>
        </div>
      </div>
      <Search
        onSearch={(search) => {
          axios
            .get(apiUrl + `api/unity?title=${search}`)
            .then((response) => {
              setLessonClasses(response.data);
              setIsLoading(false);
            })
            .catch(() => {
              console.error("Ошибка получения информации");
              setLessonClasses([]);
            });
        }}
        isOpen={isSearchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <div className="w-[1520px] max-h-[944px] mt-[24px] p-[20px] bg-[#FFFFFF80] rounded-[20px]">
        <div className="w-[1480px] h-[904px] overflow-x-hidden overflow-y-auto">
          {lessonsList.length === 0 && <NothingFound />}
          <div className="w-[1460px] grid grid-cols-1 gap-[16px]">
            {lessonsList.map((lesson, index: number) => (
              <LessonCard
                hours = {lesson.hours}
                id={lesson.id}
                key={index}
                title={lesson.title}
                years={lesson.years}
                address={lesson.division}
                additional={lesson.note}
                desc={lesson.description}
                age={"от " + lesson.ageBefore + " до " + lesson.ageAfter}
                conds={lesson.finance}
                code={lesson.codEs3}
                level={lesson.level}
              />
            ))}
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="absolute top-0 left-[352px] w-[1568px] h-[1080px] bg-bg flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
