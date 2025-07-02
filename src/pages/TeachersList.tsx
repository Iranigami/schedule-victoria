import { useEffect, useState } from "react";
import searchIcon from "../assets/images/icons/search.svg";
import Search from "../comps/Search";
import FilterList from "../comps/FilterList";
import type { Teacher, Unity } from "../types";
import TeacherCard from "../comps/TeacherCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../comps/Loading";

export default function TeachersList() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [filterList, setFilterList] = useState<Unity[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<Unity | undefined>(
    undefined,
  );
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  const getTeachers = (filterId?: number) => {
    const url = apiUrl + `api/teacher?${!!filterId ? `unity=${filterId}` : ""}`;
    axios
      .get(url)
      .then((response) => {
        setTeachersList(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  };
  useEffect(() => {
    axios
      .get(apiUrl + "api/unity")
      .then((response) => {
        setFilterList(response.data);
      })
      .catch(() => {
        console.error("Ошибка получения фильтров");
      });
    getTeachers();
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
            optionsList={filterList}
            selectedOption={selectedFilter}
            optionPlaceholder="Все кружки"
            onButtonClick={() => {
              setFilterOpen((prev) => !prev);
            }}
            onSelectOption={(option) => {
              setSelectedFilter(option);
              getTeachers(option.id);
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
      <Search onSearch={() => {}} isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
      <div className="w-[1520px] max-h-[944px] mt-[24px] p-[20px] bg-[#FFFFFF80] rounded-[20px]">
        <div className="w-[1480px] h-[904px] overflow-x-hidden overflow-y-auto">
          <div className="w-[1460px] grid grid-cols-2 gap-[16px]">
            {teachersList.map((teacher, index: number) => (
              <TeacherCard
                key={index}
                onClick={() => navigate(`/teacher?id=${teacher.id}`)}
                photo={teacher.image!}
                name={teacher.fullName!}
                lesson={teacher.direction!}
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
