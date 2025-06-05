import closeIcon from "../assets/images/icons/closeSign.svg";
import checkIcon from "../assets/images/icons/checked.svg";
import arrIcon from "../assets/images/icons/arrow.svg";
import { useState } from "react";
import Slider from "./Slider";

type Props = {
  onSelect: (selected: { group: string; option: string }[]) => void;
  onClose: () => void;
  filters: {
    title: string;
    type: string; //типы: slider - слайдер выбора чисел, check - выбирать прямо в меню, list - выбирать в отдельном списке
    options: string[]; //для slider - первый элемент - минимальное число, второй - максимальное
  }[];
};

export default function FilterModal({ onSelect, onClose, filters }: Props) {
  const [currFilters, setCurrFilters] = useState<
    { group: string; option: string }[]
  >([]);
  const [indexOfOpenedList, setIndexOfOpenedList] = useState(-1);
  return (
    <div className="w-[1568px] h-[1080px] fixed top-0 left-[352px] flex justify-center items-center">
      <div className="w-full h-full bg-black opacity-40 absolute z-0" />

      <div className="w-[752px] rounded-[36px] bg-[#EDEDED] z-10 p-[24px]">
        <div className="w-full justify-between flex">
          <div className="text-orange text-[48px] font-bold leading-[100%] flex items-center justify-left gap-[16px]">
            <button
              hidden={indexOfOpenedList == -1}
              onClick={() => setIndexOfOpenedList(-1)}
              className="size-[56px] rounded-[20px] bg-white p-[16px]"
            >
              <img src={arrIcon} alt="back" className="size-[24px] rotate-90" />
            </button>
            {indexOfOpenedList != -1
              ? filters[indexOfOpenedList].title
              : "Фильтры"}
          </div>
          <button
            onClick={onClose}
            className="size-[56px] rounded-[20px] bg-white p-[16px]"
          >
            <img src={closeIcon} alt="close" className="size-[24px]" />
          </button>
        </div>
        <div hidden={indexOfOpenedList != -1} className="mt-[4px] w-full">
          {filters.map((filter, index: number) => (
            <div key={index}>
              {filter.type === "check" && (
                <div className="mt-[20px] text-text text-[28px] font-bold leading-[100%]">
                  {filter.title}
                  <div className="flex w-[704px] gap-[8px] flex-wrap mt-[8px]">
                    {filter.options.map((option, optIndex: number) => (
                      <div
                        onClick={() => {
                          if (
                            !currFilters.some(
                              (item) =>
                                item.group === filter.title &&
                                item.option === option,
                            )
                          ) {
                            setCurrFilters([
                              ...currFilters,
                              { group: filter.title, option: option },
                            ]);
                          } else {
                            const updatedFilters = currFilters.filter(
                              (item) =>
                                !(
                                  item.group === filter.title &&
                                  item.option === option
                                ),
                            );
                            setCurrFilters(updatedFilters);
                          }
                        }}
                        key={optIndex}
                        className="h-[56px] p-[16px] bg-white rounded-[20px] flex gap-[8px]"
                      >
                        <div className="size-[24px] flex justify-center items-center bg-white">
                          <div
                            hidden={currFilters.some(
                              (item) =>
                                item.group === filter.title &&
                                item.option === option,
                            )}
                            className="size-[21.5px] border-[1.5px] border-orange rounded-[7.25px]"
                          />
                          <img
                            hidden={
                              !currFilters.some(
                                (item) =>
                                  item.group === filter.title &&
                                  item.option === option,
                              )
                            }
                            src={checkIcon}
                            alt="img"
                            className=""
                          />
                        </div>
                        <span className="text-[20px] font-normal">
                          {option}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filter.type === "list" && (
                <div
                  onClick={() => setIndexOfOpenedList(index)}
                  className={`mt-[20px] w-[704px] h-[60px] rounded-[20px] bg-white text-text text-[28px] leading-[100%] font-bold flex justify-between p-[16px] items-center`}
                >
                  {filter.title}
                  <div className="flex gap-[8px] justify-right items-center">
                    <span className="text-orange">
                      {!!currFilters.filter(
                        (filt) => filt.group === filter.title,
                      ).length &&
                        currFilters.filter(
                          (filt) => filt.group === filter.title,
                        ).length}
                    </span>
                    <img
                      src={arrIcon}
                      alt="next"
                      className="size-[24px] rotate-270"
                    />
                  </div>
                </div>
              )}
              {filter.type === "slider" && (
                <div className="w-[678px] ml-[16px]">
                  <Slider
                    onChange={(min, max) => {
                      if (min === 1 && max === 18) {
                        console.log("none");
                      } else {
                        console.log("filtered");
                      }
                    }}
                    min={1}
                    max={18}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {indexOfOpenedList !== -1 && (
          <div className="p-[16px] w-[704x] h-[728px] mt-[24px] overflow-y-auto overflow-x-hidden rounded-[20px] bg-white">
            <div className="w-[648px] h-[696px]">
              {filters[indexOfOpenedList].options.map(
                (option, optIndex: number) => (
                  <div
                    onClick={() => {
                      if (
                        !currFilters.some(
                          (item) =>
                            item.group === filters[indexOfOpenedList].title &&
                            item.option === option,
                        )
                      ) {
                        setCurrFilters([
                          ...currFilters,
                          {
                            group: filters[indexOfOpenedList].title,
                            option: option,
                          },
                        ]);
                      } else {
                        const updatedFilters = currFilters.filter(
                          (item) =>
                            !(
                              item.group === filters[indexOfOpenedList].title &&
                              item.option === option
                            ),
                        );
                        setCurrFilters(updatedFilters);
                      }
                    }}
                    key={optIndex}
                    className="h-[56px] p-[16px] justify-left items-center flex gap-[8px] leading-[100%]"
                  >
                    <div className="size-[24px] flex justify-center items-center bg-white">
                      <div
                        hidden={currFilters.some(
                          (item) =>
                            item.group === filters[indexOfOpenedList].title &&
                            item.option === option,
                        )}
                        className="size-[21.5px] border-[1.5px] border-orange rounded-[7.25px]"
                      />
                      <img
                        hidden={
                          !currFilters.some(
                            (item) =>
                              item.group === filters[indexOfOpenedList].title &&
                              item.option === option,
                          )
                        }
                        src={checkIcon}
                        alt="img"
                        className=""
                      />
                    </div>
                    <span className="text-[20px] font-normal text-text leading-[100%]">
                      {option}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        )}
        <div className="mt-[24px] flex gap-[8px]">
          <button
            onClick={() => setCurrFilters([])}
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
