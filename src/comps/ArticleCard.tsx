import { useEffect } from "react";
import photoPlaceholder from "../assets/images/news none.png";

type Props = {
  id: number;
  onClick: () => void;
  photo: string;
  title: string;
  desc: string;
};

export default function ArticleCard({
  id,
  onClick,
  photo,
  title,
  desc,
}: Props) {
  const swiftInsert = (original: string, index: number, insert: string) => original.substring(0, index) + insert + original.substring(index);
  //@ts-ignore
  const apiUrl = window.__API_CONFIG__.apiUrl;
  useEffect(() => {
    const temp = swiftInsert(desc, 4, " className='multiline-ellipsis'");
    document.getElementById(`desc${id}`)!.innerHTML = temp;
  }, []);
  return (
    <div
      onClick={onClick}
      className="w-[722px] h-[252px] rounded-[20px] bg-white p-[16px] flex gap-[20px] items-start justify-left overflow-hidden text-ellipsis"
    >
      <div className="min-w-[220px] size-[220px] overflow-hidden rounded-[12px]">
        <img
          src={!!photo ? apiUrl + photo : photoPlaceholder}
          alt="photo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[514px] h-[220px] overflow-hidden">
        <div className="whitespace-nowrap w-[450px] h-[32px] hide-text-overflow text-[32px] text-orange font-bold leading-[100%]">
          {title}
        </div>
        <div
          id={`desc${id}`}
          className=" multiline-ellipsis text-[24px] text-text font-normal leading-[100%] mt-[10px]"
        ></div>
      </div>
    </div>
  );
}
