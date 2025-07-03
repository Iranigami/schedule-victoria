import mapIcon from "../assets/images/icons/map.svg";
import userIcon from "../assets/images/icons/user.svg";
import timeIcon from "../assets/images/icons/time.svg";
import walletIcon from "../assets/images/icons/wallet.svg";
import levelIcon from "../assets/images/icons/level.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {
  id: number;
  title: string;
  code: number;
  desc: string;
  additional?: string;
  address: string;
  age: string;
  time: number;
  conds: boolean;
  level: string;
};

export default function LessonCard({
  id,
  time,
  title,
  code,
  desc,
  address,
  additional,
  age,
  conds,
  level,
}: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById(`desc${id}`)!.innerHTML = desc;
  }, [title]);
  const plural = (number: number, titles = ["год", "года", "лет"]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };
  return (
    <div className="w-[1469px] rounded-[20px] bg-white p-[16px]">
      <div className="flex justify-between w-full text-[20px] text-[#848484] font-bold leading-[100%]">
        <div className="text-orange text-[32px] font-bold leading-[100%]">
          {title}
        </div>
        <div>Код для записи на mos.ru {code}</div>
      </div>
      <div
        id={`desc${id}`}
        className="mt-[20px] text-text text-[24px] font-normal leading-[100%]"
      ></div>
      {additional && (
        <div className="mt-[8px] text-[#BFBFBF] text-[20px] font-bold">
          {additional}
        </div>
      )}
      <div className="w-full flex justify-between mt-[20px] items-center">
        <div className="flex justify-left items-center gap-[8px]">
          <div className="flex justify-center items-center h-[44px] px-[16px] gap-[8px]  bg-[#F1852233] rounded-[22px]">
            <img src={mapIcon} alt="map point" className="size-[24px]" />
            <div className="text-text text-[20px] font-normal leading-[100%]">
              {address}
            </div>
          </div>
          <div className="flex justify-center items-center h-[44px] px-[16px] gap-[8px]  bg-[#F1852233] rounded-[22px]">
            <img src={userIcon} alt="user" className="size-[24px]" />
            <div className="text-text text-[20px] font-normal leading-[100%]">
              {age}
            </div>
          </div>
          <div className="flex justify-center items-center h-[44px] px-[16px] gap-[8px]  bg-[#F1852233] rounded-[22px]">
            <img src={timeIcon} alt="time" className="size-[24px]" />
            <div className="text-text text-[20px] font-normal leading-[100%]">
              {time + " " + plural(time)}
            </div>
          </div>
          <div className="flex justify-center items-center h-[44px] px-[16px] gap-[8px]  bg-[#F1852233] rounded-[22px]">
            <img src={walletIcon} alt="wallet" className="size-[24px]" />
            <div className="text-text text-[20px] font-normal leading-[100%]">
              {conds ? "Внебюджет" : "Бюджет"}
            </div>
          </div>
          <div className="flex justify-center items-center h-[44px] px-[16px] gap-[8px]  bg-[#F1852233] rounded-[22px]">
            <img src={levelIcon} alt="level" className="size-[24px]" />
            <div className="text-text text-[20px] font-normal leading-[100%]">
              {level}
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate(`/lesson?id=${id}`)}
          className="w-[138px] h-[52px] bg-orange rounded-[16px] p-[16px] flex justify-center items-center text-white text-[20px] font-semibold leading-[100%]"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
}
