import { useNavigate, useSearchParams } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg";
import { useEffect, useState } from "react";
import type { Teacher } from "../types";
import axios from "axios";
import Loading from "../comps/Loading";

export default function Teacher() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Teacher>();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isLoading, setLoading] = useState(true);

  const [params] = useSearchParams();
  useEffect(() => {
    axios
      .get(apiUrl + `api/teacher/${params.get("id")}`)
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
          {data?.surname + " " + data?.name + " " + data?.patronymic}
        </div>
        <div className="w-[504px] h-[64px] rounded-[20px] bg-white gap-[8px] flex p-[8px]">
          <div
            className={`w-[240px] h-[48px] z-0 absolute bg-orange rounded-[12px] duration-150 transition ${page && "translate-x-[248px]"}`}
          />
          <button
            onClick={() => setPage(0)}
            className={`z-100 w-[240px] h-[48px] flex justify-center items-center text-[20px] font-semibold leading-[100%] ${page ? "text-[#848484]" : "text-white"}`}
          >
            Расписание
          </button>
          <button
            onClick={() => setPage(1)}
            className={`z-100 w-[240px] h-[48px] flex justify-center items-center text-[20px] font-semibold leading-[100%] ${!page ? "text-[#848484]" : "text-white"}`}
          >
            Информация
          </button>
        </div>
      </div>
      {page === 1 && (
        <div className="mt-[24px] w-[1520px] h-[944px] rounded-[36px] bg-white p-[20px]">
          <div className="w-[1480px] h-[904px] flex gap-[16px]">
            <div className="w-[678px] h-[904px] rounded-[20px] overflow-hidden">
              <img
                src={apiUrl + data?.image}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[786px] h-[904px] overflow-x-hidden overflow-y-auto">
              <div className="w-[766px]">
                <div className="w-[766px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                  <div className="text-[24px] font-normal leading-[100%]">
                    Должность
                  </div>
                  <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                    {data?.position}
                  </div>
                </div>
                <div className="flex gap-[8px] mt-[16px]">
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Специальность
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data?.direction}
                    </div>
                  </div>
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Телефон
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data?.phone}
                    </div>
                  </div>
                </div>
                <div className="flex gap-[8px] mt-[16px]">
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Email
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data?.email}
                    </div>
                  </div>
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Кабинет
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data?.cabinet!.map((cab, index: number) => (
                        <span key={index}>
                          {cab.number}
                          {index + 1 !== data.cabinet!.length && ", "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-[766px] rounded-[20px] bg-[#F1852233] p-[24px] text-text mt-[16px]">
                  <div className="text-[24px] font-normal leading-[100%]">
                    Кружки
                  </div>
                  <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                    {data?.unities!.map((unity, index: number) => (
                      <span key={index}>
                        {unity.title}
                        {index + 1 !== data.unities!.length && ", "}
                      </span>
                    ))}
                  </div>
                </div>
                {data?.teacherInfos!.map((info, index: number) => (
                  <div
                    key={index}
                    className="w-[766px] rounded-[20px] bg-[#F1852233] p-[24px] text-text mt-[16px]"
                  >
                    <div className="text-[32px] font-semibold leading-[100%]">
                      {info.title}
                    </div>
                    <div className="text-[24px] font-normal mt-[8px] leading-[100%]">
                      {info.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="absolute top-0 left-[352px] w-[1568px] h-[1080px] bg-bg flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
