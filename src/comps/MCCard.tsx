import moment from "moment";
import photoPlaceholder from "../assets/images/master class none.png";

type Props = {
  onClick: () => void;
  photo: string;
  title: string;
  date: string;
  time: string;
  desc: string;
};

export default function MCCard({
  onClick,
  photo,
  title,
  time,
  date,
  desc,
}: Props) {
  //@ts-ignore
  const apiUrl = window.__API_CONFIG__.apiUrl;
  return (
    <div
      onClick={onClick}
      className="w-[722px] h-[252px] rounded-[20px] bg-white p-[16px] flex gap-[20px] items-start justify-left overflow-hidden"
    >
      <div className="min-w-[220px] size-[220px] overflow-hidden rounded-[12px]">
        <img
          src={!!photo ? apiUrl + photo : photoPlaceholder}
          alt="photo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[514px] h-[60px]">
        <div className="flex justify-between text-[24px] text-[#848484] font-semibold leading-[100%]">
          <div>{moment(date).format("D MMM")}</div>
          <div>{time}</div>
        </div>
        <div className="text-[32px] text-orange font-bold leading-[100%] mt-[10px]">
          {title}
        </div>
        <div className="text-[24px] text-text font-normal leading-[100%] mt-[10px]">
          {desc}
        </div>
      </div>
    </div>
  );
}
