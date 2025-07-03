import closeIcon from "../assets/images/icons/closeSign.svg";
import circleClose from "../assets/images/icons/close.svg";
import { useState } from "react";
import CalendarInput from "./CalendarInput";
import moment from "moment";

type Props = {
  selected?: {
    after?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | undefined;
    before?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | undefined;
  };
  onSelect: (selected: {
    after?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | undefined;
    before?:
      | {
          day: number;
          month: number;
          year: number;
        }
      | undefined;
  }) => void;
  onClose: () => void;
};

export default function CalendarSearchModal({
  selected,
  onSelect,
  onClose,
}: Props) {
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [beforeDate, setBeforeDate] = useState<
    | {
        day: number;
        month: number;
        year: number;
      }
    | undefined
  >(selected?.before);
  const [afterDate, setAfterDate] = useState<
    | {
        day: number;
        month: number;
        year: number;
      }
    | undefined
  >(selected?.after);
  const [isPreClosed, setPreClosed] = useState(false);
  return (
    <div className="w-[1568px] h-[1080px] fixed top-0 left-[352px] flex justify-center items-center">
      <div className="w-full h-full bg-black opacity-40 absolute z-0" />
      <div
        className={`animate-appear ${isPreClosed && "translate-y-[1000px]"} duration-300 w-[752px] rounded-[36px] bg-[#EDEDED] z-10 p-[24px] transition`}
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
        <div className="mt-[24px] w-full h-[64px] flex justify-between items-center">
          <div
            onClick={() => {
              setSelectedField("before");
            }}
            className={`font-normal text-[20px] text-text leading-[100%]  gap-[8px] w-[216px] h-[64px] p-[16px] flex items-center justify-left rounded-[20px] bg-white ${selectedField === "before" && "border-[2px] border-orange"}`}
          >
            <div>C</div>
            <input
              id="before"
              className="decorative"
              value={`${beforeDate ? `${beforeDate?.day.toString().padStart(2, "0")}.${beforeDate?.month.toString().padStart(2, "0")}.${beforeDate?.year}` : ""}`}
              disabled={true}
              placeholder="дд.мм.гггг"
            />
          </div>
          <img
            onClick={() => {
              setBeforeDate(undefined);
              setSelectedField(null);
            }}
            hidden={selectedField !== "before"}
            src={circleClose}
            alt="clear"
            className="size-[24px] fixed ml-[176px]"
          />
          <div
            onClick={() => {
              setSelectedField("after");
            }}
            className={`font-normal text-[20px] text-text leading-[100%]  gap-[8px] w-[216px] h-[64px] p-[16px] flex items-center justify-left rounded-[20px] bg-white ${selectedField === "after" && "border-[2px] border-orange"}`}
          >
            <div>До</div>
            <input
              id="after"
              className="decorative"
              value={`${afterDate ? `${afterDate?.day.toString().padStart(2, "0")}.${afterDate?.month.toString().padStart(2, "0")}.${afterDate?.year}` : ""}`}
              disabled={true}
              placeholder="дд.мм.гггг"
            />
          </div>
          <img
            onClick={() => {
              setAfterDate(undefined);
              setSelectedField(null);
            }}
            hidden={selectedField !== "after"}
            src={circleClose}
            alt="clear"
            className="size-[24px] fixed ml-[664px]"
          />
        </div>
        <div
          className={`absolute bottom-[-476px] opacity-0 z-100 ml-[-24px] duration-300 transition ${selectedField && "translate-y-[-500px] opacity-[100%]"}`}
        >
          <CalendarInput
            onClose={() => {
              setSelectedField(null);
            }}
            title="test"
            onClear={() => {
              if (selectedField === "after") setAfterDate(undefined);
              if (selectedField === "before") setBeforeDate(undefined);
            }}
            selected={{
              day: Number(moment().format("DD")),
              month: Number(moment().format("MM")),
              year: Number(moment().format("YYYY")),
            }}
            onSelect={(date) => {
              if (selectedField === "after") setAfterDate(date);
              if (selectedField === "before") setBeforeDate(date);
            }}
          />
        </div>
        <div className="mt-[24px] flex gap-[8px]">
          <button
            onClick={() => {
              setAfterDate(undefined);
              setBeforeDate(undefined);
              onSelect({});
              setPreClosed(true);
              setTimeout(onClose, 200);
            }}
            disabled={!afterDate && !beforeDate}
            className="disabled:opacity-[20%] w-[348px] h-[52px] rounded-[16px] border-[2px] border-orange text-orange text-[20px] font-semibold leading-[100%] flex items-center justify-center"
          >
            Очистить фильтры
          </button>
          <button
            onClick={() => {
              onSelect({ after: afterDate, before: beforeDate });
              setPreClosed(true);
              setTimeout(onClose, 200);
            }}
            disabled={!afterDate && !beforeDate}
            className="disabled:opacity-[20%] w-[348px] h-[52px] rounded-[16px] bg-orange text-white text-[20px] font-semibold leading-[100%] flex items-center justify-center"
          >
            Показать
          </button>
        </div>
      </div>
    </div>
  );
}
