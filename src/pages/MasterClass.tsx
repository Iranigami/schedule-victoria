import { useNavigate, useSearchParams } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg";
import { useEffect, useState } from "react";
import type { MCClass } from "../types";
import axios from "axios";
import moment from "moment";
import Loading from "../comps/Loading";

export default function MasterClass() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<MCClass>();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [params] = useSearchParams();
  useEffect(() => {
    axios
      .get(apiUrl + `api/master-class/${params.get("id")}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        document.getElementById("desc")!.innerHTML = response.data.description;
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
        <div className="text-orange text-[40px] font-bold leading-[100%]">
          {data?.title}
        </div>
      </div>
      <div className="mt-[24px] w-[1520px] h-[944px] rounded-[36px] bg-white p-[20px]">
        <div className="w-[1480px] h-[904px] flex gap-[16px]">
          <div className="w-[604px] h-[904px]">
            <div className="size-[604px] rounded-[20px] overflow-hidden">
              <img
                src={apiUrl + data?.image}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[604px] h-[284px] mt-[16px] rounded-[20px] bg-[#F1852233] flex gap-[16px] items-center justify-center">
              <img
                src={apiUrl + data?.qr}
                alt="qr-code"
                className="rounded-[14px] bg-white size-[252px]"
              />
              <div className="w-[304px] h-[190px]">
                <div className="text-orange text-[46px] font-bold leading-[100%]">
                  Сканируй код
                </div>
                <div className="mt-[16px] text-text text-[32px] font-normal leading-[100%]">
                  Запишись на мастер класс и погрузись в мир творчества вместе с
                  нами
                </div>
              </div>
            </div>
          </div>
          <div className="w-[860px] h-[904px] overflow-x-hidden overflow-y-auto">
            <div className="w-[840px]">
              <div className="text-text text-[28px] font-bold leading-[100%]">
                Дата проведения
              </div>
              <div className="mt-[8px] text-orange text-[48px] font-normal leading-[100%]">
                {moment(data?.date).format("D MMM")} с{" "}
                {moment(data?.endAt).add(20, "hours").format("HH:mm")} до{" "}
                {moment(data?.startAt).add(20, "hours").format("HH:mm")}
              </div>
              <div className="mt-[20px] text-text text-[24px] font-normal leading-[100%]">
                {data?.smallDescription}
              </div>
              <div
                id="desc"
                className="mt-[20px] text-text text-[24px] font-normal leading-[100%]"
              ></div>
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
