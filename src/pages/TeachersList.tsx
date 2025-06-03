import { useEffect, useState } from "react";
import searchIcon from "../assets/images/icons/search.svg";
import Search from "../comps/Search";
import FilterList from "../comps/FilterList";
import type { Teacher } from "../types";
import TeacherCard from "../comps/TeacherCard";
import { useNavigate } from "react-router-dom";

export default function TeachersList() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<string | undefined>(
    undefined,
  );
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTeachersList([
      {
        photo: "/img/teachers/photo1.jpg",
        name: "Игорь Сергеевич Петров",
        post: "Учитель математики",
        speciality: "Математика",
        phone: "+7 (987) 654-32-10",
        email: "petrov@school.ru",
        cabinet: "Кабинет №101",
        classes: ["9А класс", "10Б класс"],
        awards: "Победитель конкурса 'Лучший учитель математики' региона",
      },
      {
        photo: "/img/teachers/photo2.jpg",
        name: "Анна Владимировна Смирнова",
        post: "Учитель русского языка и литературы",
        speciality: "Русский язык и литература",
        phone: "+7 (987) 654-32-11",
        email: "smirnova@school.ru",
        cabinet: "Кабинет №102",
        classes: ["8В класс", "11Г класс"],
        awards: "Участник всероссийского семинара учителей русской словесности",
      },
      {
        photo: "/img/teachers/photo3.jpg",
        name: "Дмитрий Андреевич Иванов",
        post: "Учитель физики",
        speciality: "Физика",
        phone: "+7 (987) 654-32-12",
        email: "ivanov@school.ru",
        cabinet: "Кабинет №103",
        classes: ["7Д класс", "10Е класс"],
        awards: "",
      },
      {
        photo: "/img/teachers/photo4.jpg",
        name: "Ольга Сергеевна Кузнецова",
        post: "Учитель химии",
        speciality: "Химия",
        phone: "+7 (987) 654-32-13",
        email: "kuznetsova@school.ru",
        cabinet: "Кабинет №104",
        classes: ["8Ж класс", "11З класс"],
        awards: "Обладатель премии школы за лучший урок химии",
      },
      {
        photo: "/img/teachers/photo1.jpg",
        name: "Игорь Сергеевич Петров",
        post: "Учитель математики",
        speciality: "Математика",
        phone: "+7 (987) 654-32-10",
        email: "petrov@school.ru",
        cabinet: "Кабинет №101",
        classes: ["9А класс", "10Б класс"],
        awards: "Победитель конкурса 'Лучший учитель математики' региона",
      },
      {
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Sxi8I2_lLSrV7ZAI3cjtItYBkVslh14urg&s",
        name: "Анна Владимировна Смирнова",
        post: "Учитель русского языка и литературы",
        speciality: "Русский язык и литература",
        phone: "+7 (987) 654-32-11",
        email: "smirnova@school.ru",
        cabinet: "Кабинет №102",
        classes: ["8В класс", "11Г класс"],
        awards: "Участник всероссийского семинара учителей русской словесности",
      },
      {
        photo:
          "https://i.ytimg.com/vi/RL11Cf73QVY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzLyw4peKKK5WhfRcXDuA1COeVHQ",
        name: "Дмитрий Андреевич Иванов",
        post: "Учитель физики",
        speciality: "Физика",
        phone: "+7 (987) 654-32-12",
        email: "ivanov@school.ru",
        cabinet: "Кабинет №103",
        classes: ["7Д класс", "10Е класс"],
        awards: "",
      },
      {
        photo:
          "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg",
        name: "Ольга Сергеевна Кузнецова",
        post: "Учитель химии",
        speciality: "Химия",
        phone: "+7 (987) 654-32-13",
        email: "kuznetsova@school.ru",
        cabinet: "Кабинет №104",
        classes: ["8Ж класс", "11З класс"],
        awards: "Обладатель премии школы за лучший урок химии",
      },
      {
        photo: "/img/teachers/photo1.jpg",
        name: "Игорь Сергеевич Петров",
        post: "Учитель математики",
        speciality: "Математика",
        phone: "+7 (987) 654-32-10",
        email: "petrov@school.ru",
        cabinet: "Кабинет №101",
        classes: ["9А класс", "10Б класс"],
        awards: "Победитель конкурса 'Лучший учитель математики' региона",
      },
      {
        photo: "/img/teachers/photo2.jpg",
        name: "Анна Владимировна Смирнова",
        post: "Учитель русского языка и литературы",
        speciality: "Русский язык и литература",
        phone: "+7 (987) 654-32-11",
        email: "smirnova@school.ru",
        cabinet: "Кабинет №102",
        classes: ["8В класс", "11Г класс"],
        awards: "Участник всероссийского семинара учителей русской словесности",
      },
      {
        photo: "/img/teachers/photo3.jpg",
        name: "Дмитрий Андреевич Иванов",
        post: "Учитель физики",
        speciality: "Физика",
        phone: "+7 (987) 654-32-12",
        email: "ivanov@school.ru",
        cabinet: "Кабинет №103",
        classes: ["7Д класс", "10Е класс"],
        awards: "",
      },
      {
        photo: "/img/teachers/photo4.jpg",
        name: "Ольга Сергеевна Кузнецова",
        post: "Учитель химии",
        speciality: "Химия",
        phone: "+7 (987) 654-32-13",
        email: "kuznetsova@school.ru",
        cabinet: "Кабинет №104",
        classes: ["8Ж класс", "11З класс"],
        awards: "Обладатель премии школы за лучший урок химии",
      },
    ]);
  }, []);
  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "translate-y-[-100px]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Педагоги
        </span>
        <div className="flex gap-[16px]">
          <FilterList
            isOpen={isFilterOpen}
            optionsList={["test1", "test2", "test3"]}
            selectedOption={selectedTeacher}
            optionPlaceholder="Все педагоги"
            onButtonClick={() => {
              setFilterOpen((prev) => !prev);
            }}
            onSelectOption={(option) => {
              setSelectedTeacher(option);
              setFilterOpen(false);
            }}
          />
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
          <div className="w-[1460px] grid grid-cols-2 gap-[16px]">
            {teachersList.map((teacher, index: number) => (
              <TeacherCard
                key={index}
                onClick={() => navigate(`/teacher?id=${index}`)}
                photo={teacher.photo}
                name={teacher.name}
                lesson={teacher.speciality}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
