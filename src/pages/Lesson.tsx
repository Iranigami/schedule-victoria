import { useNavigate } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg";
import { useState } from "react";
import linkIcon from "../assets/images/icons/link.svg";

export default function Lesson() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data] = useState({
    title: "Я хочу спать",
    teacherId: "0",
    photo:
      "https://cs10.pikabu.ru/post_img/big/2019/06/25/8/15614688111117407.jpg",
    teacher: "Игорь Сергеевич Петров",
    address: "Где-то там",
    age: "от 8 до 12",
    time: "много лет",
    conds: "Бюджет",
    qr: "",
    additional: "le zhopa",
    desc: "Lorem ipsum dolor sit amet consectetur. Nullam euismod turpis placerat a. Sociis nisl mi rhoncus fringilla diam congue morbi. Arcu laoreet natoque justo non erat. A purus felis commodo lacinia lorem. Ac volutpat posuere aenean in. Malesuada risus blandit urna non molestie pellentesque fringilla amet mollis. Egestas a morbi venenatis volutpat. Nec et a eget sit erat fringilla eget pharetra. Risus sed curabitur purus eu pharetra id. Tempor dis nunc ridiculus leo pellentesque. Quam leo risus donec orci curabitur a. Nunc gravida gravida dictum neque donec. Orci sed amet interdum sit senectus. Convallis facilisis malesuada odio nunc at. Quisque netus a varius dictum augue. Dignissim ut nibh sapien justo eu nisl tempus lorem. Eleifend praesent quis justo nibh elementum erat posuere congue viverra. Metus massa et condimentum purus. Penatibus volutpat accumsan erat dolor sit lectus consectetur sodales. Aenean odio congue in mollis. Elit eu turpis morbi egestas tincidunt. Malesuada cras quis ornare interdum porttitor scelerisque consequat. Orci scelerisque adipiscing lorem nisi proin eget elementum mauris. Mollis cursus sollicitudin aenean tempor molestie mauris. Orci scelerisque adipiscing lorem nisi proin eget elementum mauris. Mollis cursus sollicitudin aenean tempor molestie mauris.",
  });
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
      {page && (
        <div className="mt-[24px] w-[1520px] max-h-[944px] rounded-[36px] bg-white p-[20px]">
          <div className="w-[1480px] flex gap-[16px]">
            <div className="w-[358px] h-[104px] rounded-[20px] bg-[#F1852233] p-[24px]">
              <div className="text-text text-[20px] font-normal leading-[100%] text-center">
                Адрес
              </div>
              <div className="text-text text-[28px] font-semibold leading-[100%] text-center mt-[8px]">
                {data.title}
              </div>
            </div>
            <div className="w-[358px] h-[104px] rounded-[20px] bg-[#F1852233] p-[24px]">
              <div className="text-text text-[20px] font-normal leading-[100%] text-center">
                Возраст
              </div>
              <div className="text-text text-[28px] font-semibold leading-[100%] text-center mt-[8px]">
                {data.age}
              </div>
            </div>
            <div className="w-[358px] h-[104px] rounded-[20px] bg-[#F1852233] p-[24px]">
              <div className="text-text text-[20px] font-normal leading-[100%] text-center">
                Длительность обучения
              </div>
              <div className="text-text text-[28px] font-semibold leading-[100%] text-center mt-[8px]">
                {data.time}
              </div>
            </div>
            <div className="w-[358px] h-[104px] rounded-[20px] bg-[#F1852233] p-[24px]">
              <div className="text-text text-[20px] font-normal leading-[100%] text-center">
                Условия
              </div>
              <div className="text-text text-[28px] font-semibold leading-[100%] text-center mt-[8px]">
                {data.conds}
              </div>
            </div>
          </div>
          <div className="mt-[20px] text-[24px] text-text font-normal leading-[100%]">
            {data.desc}
          </div>
          <div className="mt-[20px] text-[28px] text-[#BFBFBF] font-bold leading-[100%]">
            {data.additional}
          </div>
          <div className="w-full h-[120px] flex justify-between mt-[20px]">
            <div className="w-[730px] h-[120px] flex justify-left gap-[16px] items-center">
              <div className="size-[120px] rounded-full overflow-hidden">
                <img
                  src={data.photo}
                  alt="photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[#848484] text-[20px] font-bold leading-[100%] text-left">
                Педагог
                <div className="mt-[8px] text-orange text-[32px] font-semibold leading-[100%] flex gap-[16px] items-center">
                  {data.teacher}
                  <img
                    onClick={() => navigate(`/teacher?id=${data.teacherId}`)}
                    src={linkIcon}
                    alt="img"
                    className="size-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-[730px] h-[120px] rounded-[20px] bg-[#F1852233] p-[8px] gap-[16px] flex items-center">
              <img
                src={data.qr}
                alt="qr-code"
                className="size-[104px] rounded-[14px] bg-white"
              />
              <div className="text-orange text-[32px] font-bold leading-[100%]">
                Сканируй код
                <div className="mt-[8px] text-text font-normal leading-[100%]">
                  Для записи на кружок
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
