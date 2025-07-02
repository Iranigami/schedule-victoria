import moment from "moment";
import closeIcon from "../assets/images/icons/bigclose.svg"
import { useEffect, useState } from "react";

type Props = {
    onClose: () => void;
    title: string;
    selected: {
        day: number,
        month: number,
        year: number
    };
    onClear: () => void;
    onSelect: (date: {
        day: number,
        month: number,
        year: number
    }) => void;
}

export default function CalendarInput({onClose, title, selected, onClear, onSelect}: Props){
    useEffect(()=>{
        document.getElementById("day")!.scrollTo(0, (Number(selected.day)+4)*40);
        document.getElementById("month")!.scrollTo(0, (Number(selected.month)-3)*40);
        document.getElementById("year")!.scrollTo(0, (Number(selected.year)-2000)*40)
    },[])
    const [selectedMonth, setSelectedMonth] = useState(selected.month);
    const [selectedDay, setSelectedDay] = useState(selected.day);
    const [selectedYear, setSelectedYear] = useState(selected.year);
    const createArray = (length: number, add = 0): number[] =>
        Array.from({ length }, (_, i) => {
          const value = i + add;
          return (
            value
          );
        });
    const days = createArray(31, 1);
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    const years = createArray(405, 1998);
    return(
        <div className="w-[752px] h-[458px] ">
            <div className="w-[752px] h-[382px] rounded-[24px] bg-[#FAFAFA] mx-auto p-[24px]">
                <div className="flex justify-between items-start w-[704px] h-[40px] mx-auto border-b-[2px] border-[#F0F0F0]">
                    <div className="font-bold text-[20px] text-[#1d1d1b] leading-[100%]">
                        {title}
                    </div>
                    <div className="font-medium text-[18px] text-orange leading-[100%]">
                        {moment(`${selectedMonth}.${selectedDay}.${selectedYear}`).format('DD MMMM YYYY')}
                    </div>
                </div>
                <div className="mt-[28px] w-[316px] h-[200px] relative mx-auto ">
                    <div className="decorative absolute my-auto top-0 translate-y-[5px] bottom-0 z-0 w-[316px] h-[40px] bg-white rounded-[8px]"/>
                    <div className="decorative absolute top-[-3px] w-full h-[64px] z-10 bg-linear-to-b from-[#FAFAFA] to-[#FAFAFA00]"/>
                    <div className="decorative absolute bottom-[-3px] w-full h-[64px] z-10 bg-linear-to-t from-[#FAFAFA] to-[#FAFAFA00]"/>
                    <div className="w-full h-full flex justify-center pr-[32px] absolute">
                        <div id='day'
                            onScrollEnd={()=>{
                                const temp = document.getElementById("day");
                                let currCenter = Number(((temp!.scrollTop)/40).toFixed(0))-5;
                                temp!.scrollTo(0, (currCenter+5)*40)
                                if (currCenter<0) currCenter += 31;
                                setSelectedDay(currCenter+1);
                                onSelect({
                                    day: currCenter+1,
                                    month: selectedMonth,
                                    year: selectedYear,
                                })
                                if(temp!.scrollTop === temp!.scrollHeight - 200 )
                                {
                                    temp!.scrollTo(0, 90);
                                }
                            }}
                            className={`w-[94px] h-full overflow-y-scroll overflow-x-hidden text-black hide-scroll text-center`}>
                                <div hidden={false}>
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
                        <div id='month' className="w-[98px] mr-[32px] h-full overflow-y-scroll overflow-x-hidden text-black hide-scroll text-center"
                            onScrollEnd={()=>{
                                const temp = document.getElementById("month");
                                let currCenter = Number(((temp!.scrollTop)/40).toFixed(0))+2;
                                temp!.scrollTo(0, (currCenter-2)*40)
                                if (currCenter>=12) currCenter -= 12;
                                setSelectedMonth(currCenter+1);
                                onSelect({
                                    day: selectedDay,
                                    month: currCenter+1,
                                    year: selectedYear,
                                })
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
                        <div id='year' 
                        onScrollEnd={()=>{
                            const temp = document.getElementById("year");
                            let currCenter = Number(((temp!.scrollTop)/40).toFixed(0))+2;
                            temp!.scrollTo(0, (currCenter-2)*40)
                            setSelectedYear(years[currCenter]);
                            onSelect({
                                day: selectedDay,
                                month: selectedMonth,
                                year: years[currCenter],
                            })
                        }}
                        className="w-[60px] h-full overflow-y-scroll overflow-x-hidden text-black hide-scroll text-center">
                            {years.map((year, index: number)=>(
                                <div key={index} hidden={false} className="w-full h-[24px] text-[20px] leading-[100%] font-medium mt-[16px]">
                                    {year}
                                </div>
                            ))}
                        </div>
                     
                    </div>
                </div>
                <div className="w-[704px] h-[38px] mt-[28px] flex justify-left items-end border-t-[2px] border-[#F0F0F0]">
                    <button 
                        onClick={onClear}
                        className="w-[143px] h-[22px] text-orange text-[18px] leading-[100%] font-bold">
                        Очистить дату
                    </button>
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