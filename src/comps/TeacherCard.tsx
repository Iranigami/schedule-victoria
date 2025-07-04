import photoPlaceholder from "../assets/images/user none.png";

type Props = {
  onClick: () => void;
  photo: string;
  lesson: string[];
  name: string;
};

export default function TeacherCard({ onClick, photo, lesson, name }: Props) {
  //@ts-ignore
  const apiUrl = window.__API_CONFIG__.apiUrl;

  return (
    <div
      onClick={onClick}
      className="w-[722px] h-[192px] rounded-[20px] bg-white p-[16px] flex gap-[16px] items-center justify-left overflow-hidden"
    >
      <div className="min-w-[160px] size-[160px] overflow-hidden rounded-[12px]">
        <img
          src={!!photo ? apiUrl + photo : photoPlaceholder}
          alt="photo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[514px] h-[60px]">
        <div className="text-[20px] text-[#BFBFBF] font-semibold leading-[100%]">
          {lesson}
        </div>
        <div className="text-[32px] text-[#848484] font-semibold leading-[100%] mt-[8px]">
          {name}
        </div>
      </div>
    </div>
  );
}
