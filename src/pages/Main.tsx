import { useEffect, useState } from "react";
import searchIcon from "../assets/images/icons/search.svg";
import filterIcon from "../assets/images/icons/filter.svg";
import Search from "../comps/Search";
import type { LessonSection } from "../types";
import FilterModal from "../comps/FilterModal";
export default function Main() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  //@ts-ignore
  const [teachersList, setTeachersList] = useState([
    "Жоский Мужик Жоскович",
    "Ваще Пиздец Какойта",
    "Я Хочу Кушать",
    "Гойдаа Ааааа Ааааа",
  ]);
  //@ts-ignore
  const [lessonsList, setLessonsList] = useState([
    "Живопись",
    "Поедание личинок на скорость",
    "Психотерапия",
  ]);
  const [lessonSectionList, setLessonSectionList] = useState<LessonSection[]>(
    [],
  );

  const parseFilters = (data: {
    group: string;
    option: string | [number, number];
}[]) => {
    
  };














  useEffect(() => {
    setLessonSectionList([
      [
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
        },
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
        },
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
        },
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
        },
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
          monday: "sdfsdfsdfsd",
        },
      ],
      [
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
        },
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
        },
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
        },
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
        },
        {
          code: 32423,
          title: "Тестовый урок 1",
          teacher: "Учитель 1",
          cabinet: "314",
          age: "14-15",
          group: 1,
          monday: "sdfsdfsdfsd",
        },
      ],
    ]);
  }, []);

  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      {isFiltersOpen && (
        <FilterModal
          onSelect={(selected) =>
            console.log((selected))
          }
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
        <div className="text-left w-full h-[48px] flex gap-[32px] p-[16px] font-bold text-[#848484] text-[16px] leading-[100%]">
          <div className="w-[320px] h-[16px]">Кружок</div>
          <div className="w-[62px] h-[16px]">Возраст</div>
          <div className="w-[54px] h-[16px]">Группа</div>
          <div className="w-[104px] h-[16px]">Понедельник</div>
          <div className="w-[104px] h-[16px]">Вторник</div>
          <div className="w-[104px] h-[16px]">Среда</div>
          <div className="w-[104px] h-[16px]">Четверг</div>
          <div className="w-[104px] h-[16px]">Пятница</div>
          <div className="w-[104px] h-[16px]">Суббота</div>
          <div className="w-[104px] h-[16px]">Воскресенье</div>
        </div>
        <div className="w-[1488px] h-[872px] overflow-x-hidden overflow-y-auto rounded-[12px]">
          {lessonSectionList.map((section, index: number) => (
            <div
              key={index}
              className="w-[1468px] mb-[16px] overflow-hidden rounded-[12px]"
            >
              {section.map((lesson, lessonIndex: number) => (
                <div
                  key={lessonIndex}
                  className={`text-[16px] text-text font-normal leading-[100%] w-[1468px] h-[100px] flex gap-[32px] ${!((index + lessonIndex) % 2) ? "bg-[#FFF9F3]" : "bg-[#FFEFDF]"}`}
                >
                  <div className="w-[336px] h-[92px] pl-[16px] py-[16px]">
                    <div className="text-[#848484] text-[14px]">
                      {lesson.code}
                    </div>
                    <div className="mt-[8px]">{lesson.title}</div>
                    <div className="flex justify-between text-[14px] text-[#848484] mt-[8px]">
                      <div>{lesson.teacher}</div>
                      <div>кабинет {lesson.cabinet}</div>
                    </div>
                  </div>
                  <div className="w-[94px] mr-[-32px] h-[92px] flex items-center justify-left text-left">
                    {lesson.age}
                  </div>
                  <div className="w-[54px] h-[92px] flex items-center justify-left text-left">
                    {lesson.group}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {lesson.monday}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {lesson.tuesday}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {lesson.wednesday}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {lesson.thursday}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {lesson.friday}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {lesson.saturday}
                  </div>
                  <div className="w-[104px] h-[92px] flex items-center justify-left text-left">
                    {lesson.sunday}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
