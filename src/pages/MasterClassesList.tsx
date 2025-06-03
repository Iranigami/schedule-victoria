import { useState } from "react";
import filterIcon from "../assets/images/icons/filter.svg";
import searchIcon from "../assets/images/icons/search.svg";
import Search from "../comps/Search";
import MCCard from "../comps/MCCard";
import { useNavigate } from "react-router-dom";
import type { MCClass } from "../types";

export default function MasterClassesList() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | undefined>(
    undefined,
  );
  const [MCList, setMCList] = useState<MCClass[]>([
    {
      photo: "/img/class1.jpg",
      title: "Урок программирования на Python",
      date: "10.10.2025",
      desc: "Изучение основ синтаксиса и создание первой программы на Python.",
      code: "PYTHON_101",
      time: "16:00–18:00",
      absDate: "26 мая с 13:00 до 16:00",
    },
    {
      photo:
        "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
      title: "Основы веб-разработки",
      date: "15.11.2025",
      desc: "Изучаем HTML, CSS и основы JavaScript для создания простых веб-сайтов.",
      code: "WEBDEV_101",
      time: "14:00–16:00",
      absDate: "26 мая с 13:00 до 16:00",
    },
    {
      photo:
        "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
      title: "Мастер-класс по рисованию акварелью",
      date: "02.12.2025",
      desc: "Научитесь рисовать пейзажи акварельными красками и освоите основные техники живописи.",
      code: "ART_AQ_101",
      time: "10:00–12:00",
      absDate: "26 мая с 13:00 до 16:00",
    },
    {
      photo:
        "https://static.rozetked.me/imager/main/images/uploads/dwoilp3BVjlE.webp",
      title: "Кулинарный мастер-класс по выпечке хлеба",
      date: "10.01.2026",
      desc: "Узнайте секреты идеальной домашней выпечки и испечете ароматный хлеб сами!",
      code: "BAKING_BREAD_101",
      time: "18:00–20:00",
      absDate: "26 мая с 13:00 до 16:00",
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "translate-y-[-100px]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Мастер классы
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
          <div className="w-[1460px] grid grid-cols-2 gap-[16px]">
            {MCList.map((mClass, index: number) => (
              <MCCard
                key={index}
                onClick={() => navigate(`/masterclass?id=${index}`)}
                photo={mClass.photo}
                title={mClass.title}
                desc={mClass.desc}
                date={mClass.date}
                time={mClass.time}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
