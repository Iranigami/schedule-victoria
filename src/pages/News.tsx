import { useState } from "react";
import ArticleCard from "../comps/ArticleCard";
import type { Article } from "../types";
import { useNavigate } from "react-router-dom";

export default function News() {
  const [newsList] = useState<Article[]>([
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWiH3hZCawR24AVEfU9Z2NrfGXUAKNVDtiw&s",
      title: "SDFTGSDFGDFGSD",
      desc: "DFGADSF:GHLDEFH:ALDEKFGHA:LDSKRG:ALSKFG:ADLFKGS:DLKFGSD:LFKGHS:DLFKVBS:DLKBGS:DLFKGHSD:LFKGS:DLFKG",
    },
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWiH3hZCawR24AVEfU9Z2NrfGXUAKNVDtiw&s",
      title: "SDFTGSDFGDFGSD",
      desc: "DFGADSF:GHLDEFH:ALDEKFGHA:LDSKRG:ALSKFG:ADLFKGS:DLKFGSD:LFKGHS:DLFKVBS:DLKBGS:DLFKGHSD:LFKGS:DLFKG",
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div className={`flex justify-between w-[1520px] h-[64px] duration-150`}>
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Новости
        </span>
      </div>
      <div className="w-[1520px] max-h-[944px] mt-[24px] p-[20px] bg-[#FFFFFF80] rounded-[20px]">
        <div className="w-[1480px] h-[904px] overflow-x-hidden overflow-y-auto">
          <div className="w-[1460px] grid grid-cols-2 gap-[16px]">
            {newsList.map((article, index: number) => (
              <ArticleCard
                key={index}
                onClick={() => navigate(`/article?id=${index}`)}
                photo={article.photo}
                title={article.title}
                desc={article.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
