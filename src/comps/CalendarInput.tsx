import { WheelPicker, WheelPickerWrapper, type WheelPickerOption } from "@ncdai/react-wheel-picker";
import closeIcon from "../assets/images/icons/bigclose.svg"

type Props = {
    onClose: () => void;
    title: string;
    selected: string;
    onClear: () => void;
    onSelect: (date: string) => void;
}

export default function CalendarInput({onClose, title, selected, onClear, onSelect}: Props){
    const createArray = (length: number, add = 0): WheelPickerOption[] =>
        Array.from({ length }, (_, i) => {
          const value = i + add;
          return {
            label: value.toString().padStart(2, "0"),
            value: value.toString(),
          };
        });
    const days = createArray(31, 1);
      const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    const years = [];
    return(
        <div className="w-[752px] h-[458px] ">
            <div className="w-[752px] h-[382px] rounded-[24px] bg-[#FAFAFA] mx-auto p-[24px]">
                <div className="flex justify-between items-start w-[704px] h-[40px] mx-auto">
                    <div className="font-bold text-[20px] text-[#1d1d1b] leading-[100%]">
                        {title}
                    </div>
                    <div className="font-medium text-[18px] text-orange leading-[100%]">
                        {selected}
                    </div>
                </div>
                <div className="mt-[28px] w-[316px] h-[200px] bg-black relative mx-auto">
                    <div className="absolute top-0 w-full h-[64px] z-10 bg-linear-to-b from-[#FAFAFA] to-[#FAFAFA00]"/>
                    <div className="absolute bottom-0 w-full h-[64px] z-10 bg-linear-to-t from-[#FAFAFA] to-[#FAFAFA00]"/>
                    <div className="w-full h-full flex justify-center gap-[32px] px-[32px]">

{/*                     
                        <div id='day' 
                            onScroll={()=>console.log(document.getElementById("day")?.scroll)}
                            className={`w-[30px] snap-y h-full bg-green-100 overflow-y-scroll text-black hide-scroll text-center`}>
                            {days.map((day, index: number)=>(
                                <div key={index} className="w-full h-[24px] snap-center text-[20px] leading-[100%] font-medium">
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div id='month' className="w-[98px] h-full bg-green-100">

                        </div>
                        <div id='year' className="w-[60px] h-full bg-green-100">

                        </div>
                     */}
                    <WheelPickerWrapper>
                        <WheelPicker options={days} infinite/>
                        
                    </WheelPickerWrapper>
                    </div>
                </div>
            </div>
            <button 
                onClick={onClose}
                className="w-[88px] h-[56px] rounded-[24px] bg-[#FAFAFA] mt-[20px] mx-auto flex justify-center items-center">
                <img src={closeIcon} alt="close" className="size-[24px]" />
            </button>
        </div>
    )
}