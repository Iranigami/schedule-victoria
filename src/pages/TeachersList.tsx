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
    setTeachersList(
      [
        {
          "id": 3,
          "fullName": "Бутолин Владислав Семонович",
          "direction": [
            "literary_club"
          ],
          "image": "/teacher/frame-14-1-683da88757d0a090396568.png"
        },
        {
          "id": 4,
          "fullName": "Лермонтов Сергей Генадьевич",
          "direction": [
            "music_club"
          ],
          "image": "/teacher/logo-1-1-683da96bd3648367087687.png"
        },
        {
          "id": 5,
          "fullName": "Тронин Андрей Аркадьевич",
          "direction": [
            "sports_section"
          ],
          "image": "/teacher/image-1-683da9c6a4321956474504.png"
        }
      ]
    );
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
                photo={teacher.image}
                name={teacher.fullName!}
                lesson={teacher.direction!}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
