type Props = {
    teacher: string,
    startTime: string,
    endTime: string,
    cab: string,
}


export default function SchedulePart({teacher, startTime, endTime, cab}: Props){
    return(
        <div className="w-[120px] h-[96px] py-[16px]">
            <div className="text-[#848484] text-[14px] font-normal font-nova leading-[100%]">
                {teacher}
            </div>
            <div className="text-text text-[16px] mt-[10px] leading-[100%]">
                {startTime}-{endTime}
            </div>
            <div className="text-[#848484] text-[14px] font-normal font-nova leading-[100%] mt-[10px]">
                кабинет {cab}
            </div>
        </div>
    )
}