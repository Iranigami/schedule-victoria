import { useNavigate, useSearchParams } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg";
import { useEffect, useState } from "react";
import linkIcon from "../assets/images/icons/link.svg";
import Loading from "../comps/Loading";
import type { Unity } from "../types";
import photoPlaceholder from "../assets/images/user none.png";
import axios from "axios";

export default function Lesson() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Unity>();
  const [params] = useSearchParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(apiUrl + `api/unity/${params.get("id")}`)
      .then((response) => {
        setData(response.data);
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
        <div className="text-orange text-[40px] w-[920px] font-bold leading-[100%]">
          {data?.title}
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
      {page === 1 && <div
        className="mt-[24px] w-[1520px] max-h-[944px] rounded-[36px] bg-white p-[20px]"
      >
        <div className="w-[1480px] flex gap-[16px]">
          <div className="w-[358px] h-[104px] rounded-[20px] bg-[#F1852233] p-[24px]">
            <div className="text-text text-[20px] font-normal leading-[100%] text-center">
              Адрес
            </div>
            <div className="text-text text-[28px] font-semibold leading-[100%] text-center mt-[8px]">
              {data?.title}
            </div>
          </div>
          <div className="w-[358px] h-[104px] rounded-[20px] bg-[#F1852233] p-[24px]">
            <div className="text-text text-[20px] font-normal leading-[100%] text-center">
              Возраст
            </div>
            <div className="text-text text-[28px] font-semibold leading-[100%] text-center mt-[8px]">
              {data?.ageBefore + " - " + data?.ageAfter + " лет"}
            </div>
          </div>
          <div className="w-[358px] h-[104px] rounded-[20px] bg-[#F1852233] p-[24px]">
            <div className="text-text text-[20px] font-normal leading-[100%] text-center">
              Длительность обучения
            </div>
            <div className="text-text text-[28px] font-semibold leading-[100%] text-center mt-[8px]">
              {data?.years}
            </div>
          </div>
          <div className="w-[358px] h-[104px] rounded-[20px] bg-[#F1852233] p-[24px]">
            <div className="text-text text-[20px] font-normal leading-[100%] text-center">
              Условия
            </div>
            <div className="text-text text-[28px] font-semibold leading-[100%] text-center mt-[8px]">
              {data?.finance ? "Внебюджет" : "Бюджет"}
            </div>
          </div>
        </div>
        <div
          id="desc"
          className="mt-[20px] text-[24px] text-text font-normal leading-[100%]"
        ></div>
        <div className="mt-[20px] text-[28px] text-[#BFBFBF] font-bold leading-[100%]">
          {data?.note}
        </div>
        <div className="w-full grid grid-cols-2 gap-[16px] mt-[20px]">
          {data?.teachers.map((teacher, index: number) => (
            <div
              key={index}
              className="w-[730px] h-[120px] flex justify-left gap-[16px] items-center"
            >
              <div className="bg-[#ededed] size-[120px] rounded-full overflow-hidden">
                <img
                  src={!!teacher.photo ? teacher.photo : photoPlaceholder}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[#848484] text-[20px] font-bold leading-[100%] text-left">
                Педагог
                <div className="mt-[8px] text-orange text-[32px] font-semibold leading-[100%] flex gap-[16px] items-center">
                  {teacher.surname +
                    " " +
                    teacher.name +
                    " " +
                    teacher.patronymic}
                  <img
                    onClick={() => navigate(`/teacher?id=${teacher.id}`)}
                    src={linkIcon}
                    alt="img"
                    className="size-[24px]"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="w-[730px] h-[120px] rounded-[20px] bg-[#F1852233] p-[8px] gap-[16px] flex items-center">
            <div className="size-[104px] rounded-[14px] bg-white flex justify-center items-center">
              <img
                src={apiUrl + data?.qr}
                alt="qr-code"
                className="size-[98px]"
              />
            </div>
            <div className="text-orange text-[32px] font-bold leading-[100%]">
              Сканируй код
              <div className="mt-[8px] text-text font-normal leading-[100%]">
                Для записи на кружок
              </div>
            </div>
          </div>
        </div>
      </div>
      }
      {page === 0 && 
        <div className="w-[1520px] max-h-[944px] bg-white rounded-[20px] mt-[24px] p-[16px]">
              <div className="flex text-left w-full gap-[32px] px-[16px] text-[#848484] text-[16px] font-bold">
                <div className="leading-[100%] w-[68px] h-[16px]">
                  Кабинет
                </div>
                <div className="leading-[100%] w-[54px] h-[16px]">
                  Группа
                </div>
                <div className="leading-[100%] w-[154px] h-[16px]">
                  Понедельник
                </div>
                <div className="leading-[100%] w-[154px] h-[16px]">
                  Вторник
                </div>
                <div className="leading-[100%] w-[154px] h-[16px]">
                  Среда
                </div>
                <div className="leading-[100%] w-[154px] h-[16px]">
                  Четверг
                </div>
                <div className="leading-[100%] w-[154px] h-[16px]">
                  Пятница
                </div>
                <div className="leading-[100%] w-[154px] h-[16px]">
                  Суббота
                </div>
                <div className="leading-[100%] w-[154px] h-[16px]">
                  Воскресенье
                </div>
              </div>
          <div className="rounded-[12px] w-[1488px] max-h-[912px] overflow-hidden">
            <div className="w-full">

            </div>
          </div>
        </div>
      }
      {isLoading && (
        <div className="absolute top-0 left-[352px] w-[1568px] h-[1080px] bg-bg flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
