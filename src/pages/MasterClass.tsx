import { useNavigate } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg"
import { useState } from "react";
import type { MCClass } from "../types";

export default function MasterClass() {
  const navigate = useNavigate();
  const [data, setData] = useState<MCClass>(
    {
      photo:
        "https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled",
      title: "Основы веб-разработки",
      date: "15.11.2025",
      desc: "Изучаем HTML, CSS и основы JavaScript для создания простых веб-сайтов.",
      code: "http://qrcoder.ru/code/?%F2%E5%F1%F2&4&0",
      time: "14:00–16:00",
      absDate: "26 мая с 13:00 до 16:00",
      fullDesc: "Lorem ipsum dolor sit amet consectetur. Pulvinar lacus nibh morbi nunc. Mattis viverra dictum vulputate tristique neque accumsan. Ultrices rutrum porta tempor semper sed nunc quam arcu pellentesque. Id eu non neque diam. Scelerisque id id pretium non in augue gravida. Diam sollicitudin tincidunt feugiat in dui ipsum dui donec in. Urna sapien tristique massa cursus. Sed nec quis ornare fringilla curabitur ipsum amet vitae. Malesuada senectus urna ultrices adipiscing. Dui sed id in tempor adipiscing diam nibh pretium tortor. Aliquam quis aliquet gravida non. Pharetra id ut lectus euismod maecenas mus imperdiet. Cras et rhoncus amet nibh dolor pulvinar at posuere. Tincidunt donec sollicitudin euismod volutpat sodales et pellentesque aliquet. Duis sed imperdiet in ultricies diam ac in. Purus risus tristique tempus sit. Id elit facilisi placerat facilisi. Tristique amet nam cursus integer leo in scelerisque fermentum. At ultrices bibendum dolor a sapien tellus ultricies. Eget id cras vel id nunc sit. Fames augue tempor pretium sit diam. Diam dui sit pharetra amet mollis. Mattis quisque eleifend ipsum consequat turpis ac lectus. Mattis aenean elementum urna at mi aliquam accumsan."
    }
  );
  return(
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div className="w-[1520px] h-[64px] flex gap-[16px] justify-left items-center">
        <button 
          onClick={() => navigate(-1)}
          className="size-[64px] rounded-[20px] bg-white p-[20px]">
          <img src={arrIcon} alt="back" className="size-[24px] rotate-90" />
        </button>
        <div className="text-orange text-[40px] font-bold leading-[100%]">
          {data?.title}
        </div>
      </div>
      <div className="mt-[24px] w-[1520px] h-[944px] rounded-[36px] bg-white p-[20px]">
        <div className="w-[1480px] h-[904px] flex gap-[16px]">
          <div className="w-[604px] h-[904px]">
            <div className="size-[604px] rounded-[20px] overflow-hidden">
              <img src={data.photo} alt="image" className="w-full h-full object-cover" />
            </div>
            <div className="w-[604px] h-[284px] mt-[16px] rounded-[20px] bg-[#F1852233] flex gap-[16px] items-center justify-center">
              <img src={data.code} alt="qr-code" className="rounded-[14px] bg-white size-[252px]" />
              <div className="w-[304px] h-[190px]">
                <div className="text-orange text-[46px] font-bold leading-[100%]">
                  Сканируй код
                </div>
                <div className="mt-[16px] text-text text-[32px] font-normal leading-[100%]">
                  Запишись на мастер класс и погрузись в мир творчества вместе с нами
                </div>
              </div>
            </div>
          </div>
          <div className="w-[860px] h-[904px] overflow-x-hidden overflow-y-auto">
            <div className="w-[840px]">
              <div className="text-text text-[28px] font-bold leading-[100%]">
                Дата проведения
              </div>
              <div className="mt-[8px] text-orange text-[48px] font-normal leading-[100%]">
                {data?.absDate}
              </div>
              <div className="mt-[20px] text-text text-[24px] font-normal leading-[100%]">
                {data?.desc}
              </div>
              <div className="mt-[20px] text-text text-[24px] font-normal leading-[100%]">
                {data?.fullDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
