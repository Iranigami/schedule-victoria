import { useNavigate } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg"
import { useEffect } from "react";


export default function Article() {
  const navigate=useNavigate()
  const data = {
    title: "Офигеть кот с вином",
    photo: "https://dasart.ru/preview/image?type=kartiny&image_id=170821",
    text: "<strong>Жирный текст:</strong> Это простой абзац с <em>акцентированным текстом</em>"
  }
  useEffect(()=>{
      document.getElementById("textField")!.innerHTML = data.text;
  }, [])
  return(
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div className="w-[1520px] h-[64px] flex gap-[16px] justify-left items-center">
        <button 
          onClick={() => navigate(-1)}
          className="size-[64px] rounded-[20px] bg-white p-[20px]">
          <img src={arrIcon} alt="back" className="size-[24px] rotate-90" />
        </button>
        <div className="text-orange text-[40px] w-[920px] font-bold leading-[100%]">
          {data.title}
        </div>
      </div>
              <div className="mt-[24px] w-[1520px] h-[944px] rounded-[36px] bg-white p-[20px]">
              <div className="w-[1480px] h-[904px] flex gap-[16px]">
                  <div className="w-[678px] h-[904px] rounded-[20px] overflow-hidden">
                    <img src={data.photo} alt="image" className="w-full h-full object-cover" />
                  </div>
                <div className="w-[786px] h-[904px] overflow-x-hidden overflow-y-auto">
                  <div id="textField" className="w-[766px] text-text text-[24px]">
                    
                    </div>
                </div>
              </div>
            </div>
    </div>
  );

}
