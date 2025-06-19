import { useEffect, useState } from "react";
import searchIcon from "../assets/images/icons/search.svg";
import filterIcon from "../assets/images/icons/filter.svg";
import Search from "../comps/Search";
import type { LessonSection } from "../types";
import FilterModal from "../comps/FilterModal";
import axios from "axios";
import Loading from "../comps/Loading";
export default function Main() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  //const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const [teachersList] = useState<string[]>([]);
  const [lessonsList] = useState<string[]>([]);
  //const [groups, setGroups] = useState<string[]>([]);
  const [lessonSectionList, setLessonSectionList] = useState<LessonSection>([]);
  const [isLoading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;
/*   const parseFilters = (
    data: {
      group: string;
      option: string | [number, number];
    }[],
  ) => {}; */

  useEffect(() => {
    axios
      .get(apiUrl + "api/lessons")
      .then((response) => {
        setLessonSectionList(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  }, []);

  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      {isFiltersOpen && (
        <FilterModal
          onSelect={(selected) => console.log(selected)}
          onClose={() => setFiltersOpen(false)}
          filters={[
            {
              title: "Группа",
              type: "check",
              options: ["1", "2", "3"],
            },
            {
              title: "Кружок",
              type: "list",
              options: lessonsList,
            },
            {
              title: "Педагог",
              type: "list",
              options: teachersList,
            },
            {
              title: "Test",
              type: "slider",
              options: ["20", "32"],
            },
          ]}
        />
      )}
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "translate-y-[-100px]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Расписание
        </span>
        <div className="flex gap-[16px]">
          <button
            onClick={() => {
              setFiltersOpen(true);
            }}
            className="size-[64px] rounded-[20px] p-[20px] bg-white"
          >
            <img src={filterIcon} alt="filter" className="size-[24px]" />
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
      <Search isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
      <div className="w-[1520px] h-[944px] mt-[24px] px-[16px] pb-[16px] bg-white rounded-[20px]">
        <div className="w-[1488px] text-left w-full h-[48px] flex gap-[32px] p-[16px] font-bold text-[#848484] text-[16px] leading-[100%]">
          <div className="w-[208px] h-[16px]">Кружок</div>
          <div className="w-[62px] h-[16px]">Возраст</div>
          <div className="w-[54px] h-[16px]">Группа</div>
          <div className="w-[120px] h-[16px]">Понедельник</div>
          <div className="w-[120px] h-[16px]">Вторник</div>
          <div className="w-[120px] h-[16px]">Среда</div>
          <div className="w-[120px] h-[16px]">Четверг</div>
          <div className="w-[120px] h-[16px]">Пятница</div>
          <div className="w-[120px] h-[16px]">Суббота</div>
          <div className="w-[120px] h-[16px]">Воскресенье</div>
        </div>
        <div className="w-[1488px] h-[872px] overflow-x-hidden overflow-y-auto rounded-[12px]">
          {lessonSectionList.map((lesson, index: number) => (
            <div
              key={index}
              className="w-[1468px] mb-[16px] overflow-hidden rounded-[12px]"
            >
              {lesson.groups.map((group, lessonIndex: number) => (
                <div
                  key={lessonIndex}
                  className={`text-[16px] text-text font-normal leading-[100%] w-[1468px] h-[100px] flex gap-[32px] ${!((index + lessonIndex) % 2) ? "bg-[#FFF9F3]" : "bg-[#FFEFDF]"}`}
                >
                  <div className="w-[224px] h-[92px] pl-[16px] py-[16px]">
                    <div className="text-[#848484] text-[14px]">
                      {lesson.unity.code}
                    </div>
                    <div className="mt-[8px]">{lesson.unity.name}</div>
                  </div>
                  <div className="w-[94px] mr-[-32px] h-[92px] flex items-center justify-left text-left">
                    {lesson.unity.age_before} - {lesson.unity.age_after} лет
                  </div>
                  <div className="w-[54px] h-[92px] flex items-center justify-left text-left">
                    {group.group_name}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {group.schedule.monday && <div></div>}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {group.schedule.tuesday?.date}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {group.schedule.wednesday?.date}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {group.schedule.thursday?.date}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {group.schedule.friday?.date}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {group.schedule.saturday?.date}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {group.schedule.sunday?.date}
                  </div>
                </div>
              ))}
            </div>
          ))}
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
