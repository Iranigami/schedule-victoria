import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { useEffect, useRef, useState } from "react";

type Props = {
  onChange: (min: number, max: number) => void;
  min: number;
  max: number;
  started?: number;
  ended?: number;
};

export default function Slider({ min, max, started, ended, onChange }: Props) {
  const [isMin, setIsMin] = useState(false);
  isMin;
  var slider = document.getElementById("slider");
  const start = useRef(started || min);
  const end = useRef(ended || max);
  const formatForSlider = {
    from: function (formattedValue: number) {
      return Number(formattedValue);
    },
    to: function (numericValue: number) {
      return Math.round(numericValue);
    },
  };
  //@ts-ignore
  if (slider && slider.noUiSlider) {
    //@ts-ignore
    slider.noUiSlider.destroy();
  }
  if (slider !== null) {
    noUiSlider.create(slider, {
      start: [start.current, end.current],
      padding: 0,
      connect: true,
      range: {
        min: Number(min),
        max: Number(max),
      },
      //@ts-ignore
      format: formatForSlider,
    });
  }

  const formatValues = [
    document.getElementById("min_num"),
    document.getElementById("max_num"),
  ];

  if (slider != null && formatValues != null) {
    //@ts-ignore
    slider.noUiSlider.on("update", function (values: string[], handle: number) {
      (formatValues[handle] as HTMLInputElement).value = values[handle];
      start.current = Number(values[0]);
      end.current = Number(values[1]);
      if (start.current === min)
        (formatValues[0] as HTMLInputElement).className = "text-[#848484]";
      else (formatValues[0] as HTMLInputElement).className = "text-orange";

      if (end.current === max) {
        (formatValues[1] as HTMLInputElement).className = "text-[#848484]";
        (formatValues[1] as HTMLInputElement).value = `${max}+`;
      } else (formatValues[1] as HTMLInputElement).className = "text-orange";
    });
    //@ts-ignore
    slider.noUiSlider.on("change", function () {
      onChange(start.current, end.current);
    });
  }
  useEffect(() => {
    setIsMin(true);
  }, []);
  return (
    <>
      <div
        className="slider w-[672px] max-h-[12px] mt-[32px] outline-none"
        id="slider"
      ></div>
      <div className="mt-[32px] flex w-full justify-between">
        <div className="w-[216px] h-[52px] rounded-[20px] flex justify-left items-center p-[16px] gap-[8px] bg-white ml-[-16px] text-[20px] leading-[100%] font-semibold">
          <span className="text-text">От</span>
          <input disabled={true} id="min_num" />
        </div>
        <div className="w-[216px] h-[52px] rounded-[20px] flex justify-left items-center p-[16px] gap-[8px] bg-white ml-[-16px] text-[20px] leading-[100%] font-semibold">
          <span className="text-text">До</span>
          <input disabled={true} id="max_num" />
        </div>
      </div>
    </>
  );
}
