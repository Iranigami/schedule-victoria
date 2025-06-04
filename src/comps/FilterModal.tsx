import closeIcon from "../assets/images/icons/closeSign.svg"

type Props = {
    onClose: () => void,
}

export default function FilterModal({onClose}: Props) {
    
    return(
        <div className="w-[1568px] h-[1080px] fixed top-0 right-0 flex justify-center items-center">
            <div className="w-full h-full bg-black opacity-40 absolute z-0"/>
            
            
            <div className="min-w-[752px] rounded-[36px] bg-[#EDEDED] z-10 p-[24px]">
                <div className="w-full justify-between flex">
                    <div className="text-orange text-[48px] font-bold leading-[100%]">
                        Фильтры
                    </div>
                    <button 
                        onClick={onClose}
                        className="size-[56px] rounded-[20px] bg-white p-[16px]">
                        <img src={closeIcon} alt="close" className="size-[24px]" />
                    </button>
                </div>
                <div className="mt-[24px] w-full">
                    <div className="text-text text-[28px] leading-[100%] font-bold">
                        Адрес
                    </div>

                </div>
            </div>


        </div>
    )
}