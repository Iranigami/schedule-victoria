import { useEffect, useState } from "react";
import searchIcon from "../assets/images/icons/search.svg";
import FilterList from "../comps/FilterList";
import Search from "../comps/Search";
import type { LessonSection } from "../types";
export default function Main() {
  const [isAllTeachersFilterOpen, setAllTeachersFilterOpen] = useState(false);
  const [isAllLessonsFilterOpen, setAllLessonsFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<string | undefined>(
    undefined,
  );
  const [selectedLesson, setSelectedLesson] = useState<string | undefined>(
    undefined,
  );
  const [lessonSectionList, setLessonSectionList] = useState<LessonSection[]>(
    [],
  );

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
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "translate-y-[-100px]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Расписание
        </span>
        <div className="flex gap-[16px]">
          <FilterList
            isOpen={isAllTeachersFilterOpen}
            optionsList={["test1", "test2", "test3"]}
            selectedOption={selectedTeacher}
            optionPlaceholder="Все педагоги"
            onButtonClick={() => {
              setAllTeachersFilterOpen((prev) => !prev);
              setAllLessonsFilterOpen(false);
            }}
            onSelectOption={(option) => {
              setSelectedTeacher(option);
              setAllTeachersFilterOpen(false);
            }}
          />
          <FilterList
            isOpen={isAllLessonsFilterOpen}
            optionsList={[]}
            selectedOption={selectedLesson}
            optionPlaceholder="ИЗО, ДПИ, Керамика"
            onButtonClick={() => {
              setAllLessonsFilterOpen((prev) => !prev);
              setAllTeachersFilterOpen(false);
            }}
            onSelectOption={(option) => {
              setSelectedLesson(option);
              setAllLessonsFilterOpen(false);
            }}
          />
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
