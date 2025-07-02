import closeIcon from "../assets/images/icons/closeSign.svg";
import { useState } from "react";
import CalendarInput from "./CalendarInput";
import moment from "moment";

type Props = {
  selected: { group: string; option: { id: number; title: string } }[];
  onSelect: (
    selected: { group: string; option: { id: number; title: string } }[],
  ) => void;
  onClose: () => void;
};

export default function CalendarSearchModal({
  selected,
  onSelect,
  onClose,
}: Props) {
  const [currDate, setCurrDate] = useState<{
    day: number,
    month: number,
    year: number,
  } | undefined>(undefined);
  const [currFilters, setCurrFilters] =
    useState<{ group: string; option: { id: number; title: string } }[]>(
      selected,
    );
  const [isPreClosed, setPreClosed] = useState(false);
  return (
    <div className="w-[1568px] h-[1080px] fixed top-0 left-[352px] flex justify-center items-center">
      <div className="w-full h-full bg-black opacity-40 absolute z-0" />
      <div
        className={`animate-appear ${isPreClosed && "translate-y-[1000px]"} duration-300 min-w-[752px] rounded-[36px] bg-[#EDEDED] z-10 p-[24px] transition`}
      >
        <div className="w-full justify-between flex">
          <div className="text-orange text-[48px] font-bold leading-[100%] flex items-center justify-left gap-[16px]">
            Выбор даты
          </div>
          <button
            onClick={() => {
              setPreClosed(true);
              setTimeout(onClose, 200);
            }}
            className="size-[56px] rounded-[20px] bg-white p-[16px]"
          >
            <img src={closeIcon} alt="close" className="size-[24px]" />
          </button>
        </div>
        <div className="mt-[24px] w-[704px] h-[64px] flex justify-between items-center">
            <div 
                id="before"
                className="font-normal text-[20px] text-text leading-[100%]  gap-[8px] w-[216px] h-[64px] p-[16px] flex items-center justify-left rounded-[20px] bg-white">
                <div>
                    C
                </div>
                <input disabled={true} placeholder="дд.мм.гггг"/>
            </div>
        </div>
          {/* <CalendarInput
            onClose={() => console.log("closed")}
            title="test"
            onClear={() => console.log("cleared")}
            selected={{
    day: Number(moment().format("DD")),
    month: Number(moment().format("MM")),
    year: Number(moment().format("YYYY")),
  }}
            onSelect={(text) => console.log(text)}
          /> */}

        <div className="mt-[24px] flex gap-[8px]">
          <button
            onClick={() => {
              setCurrFilters([]);
              onSelect([]);
              onClose();
            }}
            disabled={!currFilters[0]}
            className="disabled:opacity-[20%] w-[348px] h-[52px] rounded-[16px] border-[2px] border-orange text-orange text-[20px] font-semibold leading-[100%] flex items-center justify-center"
          >
            Очистить фильтры
          </button>
          <button
            onClick={() => {
              onSelect(currFilters);
              onClose();
            }}
            disabled={!currFilters[0]}
            className="disabled:opacity-[20%] w-[348px] h-[52px] rounded-[16px] bg-orange text-white text-[20px] font-semibold leading-[100%] flex items-center justify-center"
          >
            Показать
          </button>
        </div>
      </div>
    </div>
  );
}
