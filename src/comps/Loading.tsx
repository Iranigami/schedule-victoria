import icon from "../assets/images/icons/loading.svg";

export default function Loading() {
  return (
    <div className={`size-[50px] fixed`}>
      <img src={icon} alt="" className="absolute animate-spin size-[50px]" />
      <img
        src={icon}
        alt=""
        className="scale-x-[-1] left-0 right-0 top-0 bottom-0 m-auto absolute animate-spin size-[25px]"
      />
    </div>
  );
}
