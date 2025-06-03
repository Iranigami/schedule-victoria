type Props = {
  onClick: () => void;
  photo: string;
  title: string;
  desc: string;
};

export default function ArticleCard({ onClick, photo, title, desc }: Props) {
  return (
    <div
      onClick={onClick}
      className="w-[722px] h-[252px] rounded-[20px] bg-white p-[16px] flex gap-[20px] items-start justify-left overflow-hidden text-ellipsis"
    >
      <div className="min-w-[220px] size-[220px] overflow-hidden rounded-[12px]">
        <img src={photo} alt="photo" className="object-cover w-full h-full" />
      </div>
      <div className="w-[514px] h-[60px]">
        <div className="text-[32px] text-orange font-bold leading-[100%] mt-[16px]">
          {title}
        </div>
        <div className="text-[24px] text-text font-normal leading-[100%] mt-[10px]">
          {desc}
        </div>
      </div>
    </div>
  );
}
