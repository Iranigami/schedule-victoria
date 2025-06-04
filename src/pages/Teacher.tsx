import { useNavigate } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg";
import { useState } from "react";
import type { Teacher } from "../types";

export default function Teacher() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Teacher>({
    photo:
      "https://cs10.pikabu.ru/post_img/big/2019/06/25/8/15614688111117407.jpg",
    name: "Игорь Сергеевич Петров",
    post: "Учитель математики",
    speciality: "Математика",
    phone: "+7 (987) 654-32-10",
    email: "petrov@school.ru",
    cabinet: "Кабинет №101",
    classes: ["9А класс", "10Б класс"],
    awards:
      "Lorem ipsum dolor sit amet consectetur. Nullam euismod turpis placerat a. Sociis nisl mi rhoncus fringilla diam congue morbi. Arcu laoreet natoque justo non erat. A purus felis commodo lacinia lorem. Ac volutpat posuere aenean in. Malesuada risus blandit urna non molestie pellentesque fringilla amet mollis. Egestas a morbi venenatis volutpat. Nec et a eget sit erat fringilla eget pharetra. Risus sed curabitur purus eu pharetra id. Tempor dis nunc ridiculus leo pellentesque. Quam leo risus donec orci curabitur a. Nunc gravida gravida dictum neque donec. Orci sed amet interdum sit senectus. Convallis facilisis malesuada odio nunc at. Quisque netus a varius dictum augue. Dignissim ut nibh sapien justo eu nisl tempus lorem. Eleifend praesent quis justo nibh elementum erat posuere congue viverra. Metus massa et condimentum purus. Penatibus volutpat accumsan erat dolor sit lectus consectetur sodales. Aenean odio congue in mollis. Elit eu turpis morbi egestas tincidunt. Malesuada cras quis ornare interdum porttitor scelerisque consequat. Orci scelerisque adipiscing lorem nisi proin eget elementum mauris. Mollis cursus sollicitudin aenean tempor molestie mauris. Orci scelerisque adipiscing lorem nisi proin eget elementum mauris. Mollis cursus sollicitudin aenean tempor molestie mauris.",
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
          {data?.name}
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
        <div className="mt-[24px] w-[1520px] h-[944px] rounded-[36px] bg-white p-[20px]">
          <div className="w-[1480px] h-[904px] flex gap-[16px]">
            <div className="w-[678px] h-[904px] rounded-[20px] overflow-hidden">
              <img
                src={data.photo}
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
                    {data.post}
                  </div>
                </div>
                <div className="flex gap-[8px] mt-[16px]">
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Специальность
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data.speciality}
                    </div>
                  </div>
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Телефон
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data.phone}
                    </div>
                  </div>
                </div>
                <div className="flex gap-[8px] mt-[16px]">
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Email
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data.email}
                    </div>
                  </div>
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Кабинет
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data.cabinet}
                    </div>
                  </div>
                </div>
                <div className="w-[766px] rounded-[20px] bg-[#F1852233] p-[24px] text-text mt-[16px]">
                  <div className="text-[24px] font-normal leading-[100%]">
                    Кружки
                  </div>
                  <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                    {data.classes.map((lesson, index: number) => (
                      <span key={index}>
                        {lesson}
                        {index + 1 !== data.classes.length && ", "}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  hidden={!data.awards}
                  className="w-[766px] rounded-[20px] bg-[#F1852233] p-[24px] text-text mt-[16px]"
                >
                  <div className="text-[32px] font-semibold leading-[100%]">
                    Заслуги
                  </div>
                  <div className="text-[24px] font-normal mt-[8px] leading-[100%]">
                    {data?.awards}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
