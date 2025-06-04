import { useState } from "react";
import filterIcon from "../assets/images/icons/filter.svg";
import searchIcon from "../assets/images/icons/search.svg";
import Search from "../comps/Search";
import type { LessonClasses, Teacher } from "../types";
import LessonCard from "../comps/LessonCard";

export default function LessonsList() {
  const testTeacher: Teacher = {
    photo: "https://example.com/teacher_photo.jpg",
    name: "Игорь Сергеевич Петров",
    post: "Преподаватель информатики",
    speciality: "Информатика и информационные технологии",
    phone: "+7 (987) 654-32-10",
    email: "petrov@example.ru",
    cabinet: "Кабинет №301",
    classes: ["информатика", "математика"],
    awards: "Лучший учитель года",
  };
  const lessonClassesArray: LessonClasses[] = [
    {
      schedule: {
        code: 102,
        title: "Английский язык",
        teacher: "Анна Смирнова",
        cabinet: "К-202",
        age: "От 10 лет",
        group: 2,
        tuesday: "12:00–13:30",
        thursday: "12:00–13:30",
        saturday: "14:00–15:30",
      },
      title: "Основы программирования",
      address: "ул. Ленина, д. 10",
      age: "от 12 лет",
      learnTime: "2 часа",
      conditions: "Бесплатное обучение",
      desc: "Знакомство с основами программирования.",
      additionalInfo: "Необходим ноутбук",
      teacher: testTeacher,
      code: "INF-101",
    },
    {
      schedule: {
        code: 102,
        title: "Английский язык",
        teacher: "Анна Смирнова",
        cabinet: "К-202",
        age: "От 10 лет",
        group: 2,
        tuesday: "12:00–13:30",
        thursday: "12:00–13:30",
        saturday: "14:00–15:30",
      },
      title: "Основы программирования",
      address: "ул. Ленина, д. 10",
      age: "от 12 лет",
      learnTime: "2 часа",
      conditions: "Бесплатное обучение",
      desc: "Знакомство с основами программирования.",
      additionalInfo: "Необходим ноутбук",
      teacher: testTeacher,
      code: "INF-101",
    },
    {
      schedule: {
        code: 102,
        title: "Английский язык",
        teacher: "Анна Смирнова",
        cabinet: "К-202",
        age: "От 10 лет",
        group: 2,
        tuesday: "12:00–13:30",
        thursday: "12:00–13:30",
        saturday: "14:00–15:30",
      },
      title: "Основы программирования",
      address: "ул. Ленина, д. 10",
      age: "от 12 лет",
      learnTime: "2 часа",
      conditions: "Бесплатное обучение",
      desc: "Знакомство с основами программирования.",
      additionalInfo: "Необходим ноутбук",
      teacher: testTeacher,
      code: "INF-101",
    },
    {
      schedule: {
        code: 102,
        title: "Английский язык",
        teacher: "Анна Смирнова",
        cabinet: "К-202",
        age: "От 10 лет",
        group: 2,
        tuesday: "12:00–13:30",
        thursday: "12:00–13:30",
        saturday: "14:00–15:30",
      },
      title: "Основы программирования",
      address: "ул. Ленина, д. 10",
      age: "от 12 лет",
      learnTime: "2 часа",
      conditions: "Бесплатное обучение",
      desc: "Знакомство с основами программирования.",
      additionalInfo: "Необходим ноутбук",
      teacher: testTeacher,
      code: "INF-101",
    },
    {
      schedule: {
        code: 102,
        title: "Английский язык",
        teacher: "Анна Смирнова",
        cabinet: "К-202",
        age: "От 10 лет",
        group: 2,
        tuesday: "12:00–13:30",
        thursday: "12:00–13:30",
        saturday: "14:00–15:30",
      },
      title: "Основы программирования",
      address: "ул. Ленина, д. 10",
      age: "от 12 лет",
      learnTime: "2 часа",
      conditions: "Бесплатное обучение",
      desc: "Знакомство с основами программирования.",
      additionalInfo: "Необходим ноутбук",
      teacher: testTeacher,
      code: "INF-101",
    },
  ];
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<string | undefined>(
    undefined,
  );
  const [lessonsList, setLessonList] = useState(lessonClassesArray);
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
      <Search isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
      <div className="w-[1520px] max-h-[944px] mt-[24px] p-[20px] bg-[#FFFFFF80] rounded-[20px]">
        <div className="w-[1480px] h-[904px] overflow-x-hidden overflow-y-auto">
          <div className="w-[1460px] grid grid-cols-1 gap-[16px]">
            {lessonsList.map((lesson, index: number) => (
              <LessonCard
                key={index}
                teacher={lesson.teacher.name}
                title={lesson.title}
                time={lesson.learnTime}
                address={lesson.address}
                additional={lesson.additionalInfo}
                desc={lesson.desc}
                age={lesson.age}
                conds={lesson.conditions}
                code={lesson.code}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
