import closeIcon from "../assets/images/icons/bigclose.svg"
import { useState } from "react";

type Props = {
    onClose: () => void;
    title: string;
    selected: string;
    onClear: () => void;
    onSelect: (date: string) => void;
}

export default function CalendarInput({onClose, title, selected, onClear, onSelect}: Props){
    
    const [selectedMonth, setSelectedMonth] = useState("февраль");
    const createArray = (length: number, add = 0): number[] =>
        Array.from({ length }, (_, i) => {
          const value = i + add;
          return (
            value
          );
        });
    const days = createArray(31, 1);
    const shortDays = createArray(30, 1);
    const febDays = createArray(28, 1);
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    const shortMonth = ["апрель", "июнь", "сентябрь", "ноябрь"];
    const years = createArray(2000, 1);
    const [currDays, setCurrDays] = useState(days);
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
                <div className="mt-[28px] w-[316px] h-[200px] bg-black relative mx-auto ">
                    <div className="decorative absolute top-[-3px] w-full h-[64px] z-10 bg-linear-to-b from-[#FAFAFA] to-[#FAFAFA00]"/>
                    <div className="decorative absolute bottom-[-3px] w-full h-[64px] z-10 bg-linear-to-t from-[#FAFAFA] to-[#FAFAFA00]"/>
                    <div className="w-full h-full flex justify-center pr-[32px]">                   
                        <div id='day' 
                            onScrollEnd={(e)=>{
                                const temp = document.getElementById("day");
                                if(temp!.scrollTop === temp!.scrollHeight - 200 )
                                {
                                    temp!.scrollTo(0, 90);
                                }
                            }}
                            className={`w-[94px] h-full bg-green-300 overflow-y-scroll overflow-x-hidden text-black hide-scroll text-center`}>
                                <div hidden={shortMonth.includes(selectedMonth) || selectedMonth==="февраль"}>
                                {[25, 26, 27, 28, 29, 30, 31].map((day, index: number)=>(
                                <div key={index} hidden={false} className="w-full h-[24px] text-[20px] leading-[100%] font-medium mt-[16px]">
                                    {day}
                                </div>
                            ))}
                                {days.map((day, index: number)=>(
                                    <div key={index} hidden={false} className="w-full h-[24px] text-[20px] leading-[100%] font-medium mt-[16px]">
                                        {day}
                                    </div>
                                ))}
                                    </div>
                        </div>
                        <div id='month' className="w-[98px] mr-[32px] h-full bg-green-100 overflow-y-scroll overflow-x-hidden text-black hide-scroll text-center"
                            onScrollEnd={()=>{
                                const temp = document.getElementById("month");
                                let currCenter = Number(((temp!.scrollTop)/40).toFixed(0))+2;
                                temp!.scrollTo(0, (currCenter-2)*40)
                                if (currCenter>=12) currCenter -= 12;
                                
                                console.log(months[currCenter]);
                                setSelectedMonth(months[currCenter]);
                                 if(temp!.scrollTop === temp!.scrollHeight - 200 )
                                {
                                    
                                    temp!.scrollTo(0, 290);
                                }
                                if(temp!.scrollTop === 0 )
                                    {
                                    
                                        temp!.scrollTo(0, 483);
                                    } 
                            }}> 
                            {months.map((month, index: number)=>(
                                <div key={index} hidden={false} className="w-full h-[24px] text-[20px] leading-[100%] font-medium mt-[16px]">
                                    {month}
                                </div>
                            ))}
                            {months.map((month, index: number)=>(
                                <div key={index} hidden={false} className="w-full h-[24px] text-[20px] leading-[100%] font-medium mt-[16px]">
                                    {month}
                                </div>
                            ))}
                                    
                        </div>
                        <div id='year' className="w-[60px] h-full bg-green-100">

                        </div>
                     
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