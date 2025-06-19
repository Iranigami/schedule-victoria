import { useNavigate, useSearchParams } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import type { News } from "../types";
import Loading from "../comps/Loading";
import photoPlaceholder from "../assets/images/news none.png";

export default function Article() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<News>();
  const [params] = useSearchParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(apiUrl + `api/news/${params.get("id")}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  }, []);

  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div className="w-[1520px] h-[64px] flex gap-[16px] justify-left items-center">
        <button
          onClick={() => navigate(-1)}
          className="size-[64px] rounded-[20px] bg-white p-[20px]"
        >
          <img src={arrIcon} alt="back" className="size-[24px] rotate-90" />
        </button>
        <div className="text-orange text-[40px] w-[920px] font-bold leading-[100%]">
          {data?.title}
        </div>
      </div>
      <div className="mt-[24px] w-[1520px] h-[944px] rounded-[36px] bg-white p-[20px]">
        <div className="w-[1480px] h-[904px] flex gap-[16px]">
          <div className="w-[678px] h-[904px] rounded-[20px] overflow-hidden">
            <img
              src={!!data?.image ? apiUrl + data?.image : photoPlaceholder}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[786px] h-[904px] overflow-x-hidden overflow-y-auto">
            <div id="textField" className="w-[766px] text-text text-[24px]">
              {data?.newsParagraphs?.map((paragraph, index: number) => (
                <div key={index} className="mb-[20px]">
                  <div className="font-bold text-[28px] leading-[100%]">
                    {paragraph.title}
                  </div>
                  <div className="mt-[8px] leading-[100%]">
                    {paragraph.text}
                  </div>
                </div>
              ))}
            </div>
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
