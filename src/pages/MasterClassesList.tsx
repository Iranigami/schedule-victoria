import { useEffect, useState } from "react";
import filterIcon from "../assets/images/icons/Calendar Search.svg";
import searchIcon from "../assets/images/icons/search.svg";
import Search from "../comps/Search";
import MCCard from "../comps/MCCard";
import { useNavigate } from "react-router-dom";
import type { MCClass } from "../types";
import axios from "axios";
import Loading from "../comps/Loading";
import CalendarSearchModal from "../comps/CalendarSearchModal";

export default function MasterClassesList() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<
  {
    after?: {
      day: number,
      month: number,
      year: number,
    } | undefined,
    before?: {
      day: number,
      month: number,
      year: number,
    } | undefined,
  }
  >();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [MCList, setMCList] = useState<MCClass[]>([]);
  useEffect(() => {
    axios
      .get(apiUrl + "api/master-class")
      .then((response) => {
        setMCList(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      {isFilterOpen && (
        <CalendarSearchModal
          selected={selectedFilters}
          onSelect={(selected) => {
            setSelectedFilters(selected);
            setFilterOpen(false);
            const startDate = `${selected.before ? `${selected.before.year}-${selected.before.month}-${selected.before.day}` : ""}`;
            const endDate = `${selected.after ? `${selected.after.year}-${selected.after.month}-${selected.after.day}` : ""}`;
            axios
              .get(apiUrl + `api/master-class?startDate=${startDate}&endDate=${endDate}`)
              .then((response) => {
                setMCList(response.data);
                setLoading(false);
                console.log("filtered")
              })
              .catch(() => {
                console.error("Ошибка получения информации");
              });
          }}
          onClose={() => setFilterOpen(false)}
        />
      )}
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "translate-y-[-100px]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Мастер-классы
        </span>
        <div className="flex gap-[16px]">
          <button
            onClick={() => setFilterOpen(true)}
            className={`size-[64px] rounded-[20px] p-[20px] bg-white relative ${isFilterOpen && "z-[-1]"}`}
          >
            <img
              src={filterIcon}
              alt="filter"
              className="size-[24px]"
            />
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
      <Search
        onSearch={(search) => {
          axios
            .get(apiUrl + `api/master-class?title=${search}`)
            .then((response) => {
              setMCList(response.data);
              setLoading(false);
            })
            .catch(() => {
              console.error("Ошибка получения информации");
            });
        }}
        isOpen={isSearchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <div className="w-[1520px] max-h-[944px] mt-[24px] p-[20px] bg-[#FFFFFF80] rounded-[20px]">
        <div className="w-[1480px] h-[904px] overflow-x-hidden overflow-y-auto">
          <div className="w-[1460px] grid grid-cols-2 gap-[16px]">
            {MCList.map((mClass, index: number) => (
              <MCCard
                key={index}
                onClick={() => navigate(`/masterclass?id=${mClass.id}`)}
                photo={mClass.image}
                title={mClass.title}
                desc={mClass.smallDescription}
                date={mClass.date}
                time={mClass.endAt + " - " + mClass.startAt}
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
