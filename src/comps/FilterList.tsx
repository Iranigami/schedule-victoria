import arrIcon from "../assets/images/icons/arrow.svg";
import type { Unity } from "../types";

type Props = {
  optionsList: Unity[];
  selectedOption?: Unity;
  isOpen: boolean;
  optionPlaceholder: string;
  onButtonClick: () => void;
  onSelectOption: (option: Unity) => void;
};

export default function FilterList({
  optionsList,
  selectedOption,
  isOpen,
  optionPlaceholder,
  onButtonClick,
  onSelectOption,
}: Props) {
  return (
    <div>
      <button
        onClick={onButtonClick}
        className={`${isOpen && "shadow-[0_2px_12px_0_#00000026]"} w-[368px] min-h-[64px] text-left bg-white rounded-[20px] flex justify-between items-center px-[26px] text-[20px] text-[#848484] leading-[100%] font-bold`}
      >
        <span hidden={!!selectedOption}>{optionPlaceholder}</span>
        {!!selectedOption && selectedOption.title}
        <img
          src={arrIcon}
          alt="img"
          className={`duration-150 size-[24px] ${isOpen && "rotate-180"}`}
        />
      </button>
      <div
        className={`mt-[8px] w-[368px] max-h-[540px] rounded-[20px] p-[16px] shadow-[0_2px_12px_0_#00000026] bg-white overflow-y-auto overflow-x-hidden absolute duration-150 origin-top ${isOpen ? "" : "scale-y-0"}`}
      >
        {optionsList.map((option, index: number) => (
          <div
            key={index}
            onClick={() => onSelectOption(option)}
            className={`${selectedOption === option ? "bg-orange text-white" : "bg-white text-[#848484]"} w-[336px] min-h-[52px] rounded-[12px] p-[16px] text-[20px] font-semibold leading-[100%]`}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
}
