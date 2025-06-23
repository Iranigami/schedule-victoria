import { useEffect, useState } from "react";
import ArticleCard from "../comps/ArticleCard";
import type { News } from "../types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../comps/Loading";

export default function News() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(apiUrl + "api/news")
      .then((response) => {
        setNewsList(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  }, []);
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
                onClick={() => navigate(`/article?id=${article.id}`)}
                photo={article.image}
                title={article.title}
                desc={article.description}
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
