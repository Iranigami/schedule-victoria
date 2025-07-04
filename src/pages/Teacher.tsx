import { useNavigate, useSearchParams } from "react-router-dom";
import arrIcon from "../assets/images/icons/arrow.svg";
import photoPlaceholder from "../assets/images/user none 4_3.png";
import { useEffect, useState } from "react";
import type { LessonSection, Teacher } from "../types";
import axios from "axios";
import Loading from "../comps/Loading";
import NothingFound from "../comps/NothingFound";

export default function Teacher() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Teacher>();
  //@ts-ignore
  const apiUrl = window.__API_CONFIG__.apiUrl;
  const [isLoading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState<LessonSection>();
  const [params] = useSearchParams();
  useEffect(() => {
    axios
      .get(apiUrl + `api/teacher/${params.get("id")}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
    axios
      .get(apiUrl + `api/lessons?teacher=${params.get("id")}`)
      .then((response) => {
        setSchedule(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  }, []);
  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      <div className="w-[1520px] h-[64px] flex gap-[16px] justify-left items-center">
        <button
          onClick={() => navigate(-1)}
          className="size-[64px] rounded-[20px] bg-white p-[20px]"
        >
          <img src={arrIcon} alt="back" className="size-[24px] rotate-90" />
        </button>
        <div className="text-orange text-[40px] w-[920px] font-bold leading-[100%]">
          {data?.surname + " " + data?.name + " " + data?.patronymic}
        </div>
        <div className="w-[504px] h-[64px] rounded-[20px] bg-white gap-[8px] flex p-[8px]">
          <div
            className={`w-[240px] h-[48px] z-0 absolute bg-orange rounded-[12px] duration-150 transition ${page && "translate-x-[248px]"}`}
          />
          <button
            onClick={() => setPage(0)}
            className={`z-100 w-[240px] h-[48px] flex justify-center items-center text-[20px] font-semibold leading-[100%] ${page ? "text-[#848484]" : "text-white"}`}
          >
            Расписание
          </button>
          <button
            onClick={() => setPage(1)}
            className={`z-100 w-[240px] h-[48px] flex justify-center items-center text-[20px] font-semibold leading-[100%] ${!page ? "text-[#848484]" : "text-white"}`}
          >
            Информация
          </button>
        </div>
      </div>
      {page === 1 && (
        <div className="mt-[24px] w-[1520px] h-[944px] rounded-[36px] bg-white p-[20px]">
          <div className="w-[1480px] h-[904px] flex gap-[16px]">
            <div className="w-[678px] h-[904px] rounded-[20px] overflow-hidden">
              <img
                src={!!data?.image ? apiUrl + data?.image : photoPlaceholder}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[786px] h-[904px] overflow-x-hidden overflow-y-auto">
              <div className="w-[766px]">
                <div className="w-[766px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                  <div className="text-[24px] font-normal leading-[100%]">
                    Должность
                  </div>
                  <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                    {data?.position}
                  </div>
                </div>
                <div className="flex gap-[8px] mt-[16px]">
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Специальность
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data?.direction}
                    </div>
                  </div>
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Телефон
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data?.phone}
                    </div>
                  </div>
                </div>
                <div className="flex gap-[8px] mt-[16px]">
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Email
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data?.email}
                    </div>
                  </div>
                  <div className="w-[379px] rounded-[20px] bg-[#F1852233] p-[24px] text-text">
                    <div className="text-[24px] font-normal leading-[100%]">
                      Кабинет
                    </div>
                    <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                      {data?.cabinet!.map((cab, index: number) => (
                        <span key={index}>
                          {cab.number}
                          {index + 1 !== data.cabinet!.length && ", "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-[766px] rounded-[20px] bg-[#F1852233] p-[24px] text-text mt-[16px]">
                  <div className="text-[24px] font-normal leading-[100%]">
                    Кружки
                  </div>
                  <div className="text-[32px] font-semibold mt-[8px] leading-[100%]">
                    {data?.unities!.map((unity, index: number) => (
                      <span key={index}>
                        {unity.title}
                        {index + 1 !== data.unities!.length && ", "}
                      </span>
                    ))}
                  </div>
                </div>
                {data?.teacherInfos!.map((info, index: number) => (
                  <div
                    key={index}
                    className="w-[766px] rounded-[20px] bg-[#F1852233] p-[24px] text-text mt-[16px]"
                  >
                    <div className="text-[32px] font-semibold leading-[100%]">
                      {info.title}
                    </div>
                    <div className="text-[24px] font-normal mt-[8px] leading-[100%]">
                      {info.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {page === 0 && (
        <div className="w-[1520px] max-h-[944px] bg-white rounded-[20px] mt-[24px] p-[16px]">
          <div className="flex text-left w-full gap-[32px] px-[16px] text-[#848484] text-[16px] font-bold mb-[16px]">
            <div className="leading-[100%] w-[320px] h-[16px]">Кружок</div>
            <div className="leading-[100%] w-[62px] h-[16px] ">Возраст</div>
            <div className="leading-[100%] w-[54px] h-[16px]">Группа</div>
            <div className="leading-[100%] w-[104px] h-[16px]">Понедельник</div>
            <div className="leading-[100%] w-[104px] h-[16px]">Вторник</div>
            <div className="leading-[100%] w-[104px] h-[16px]">Среда</div>
            <div className="leading-[100%] w-[104px] h-[16px]">Четверг</div>
            <div className="leading-[100%] w-[104px] h-[16px]">Пятница</div>
            <div className="leading-[100%] w-[104px] h-[16px]">Суббота</div>
            <div className="leading-[100%] w-[104px] h-[16px]">Воскресенье</div>
          </div>
          <div className="rounded-[12px] w-[1488px] max-h-[912px] overflow-hidden">
            <div className="w-full">
              <div className="w-[1488px] h-[872px] overflow-x-hidden overflow-y-auto rounded-[12px]">
                {schedule!.length === 0 && <NothingFound />}
                {schedule!.map((lesson, index: number) => (
                  <div
                    key={index}
                    className="w-[1468px] mb-[16px] overflow-hidden rounded-[12px]"
                  >
                    {lesson.groups.map((group, lessonIndex: number) => (
                      <div
                        key={lessonIndex}
                        className={`text-[16px] text-text font-normal leading-[100%] w-[1468px] h-[70px] flex gap-[32px] ${!((index + lessonIndex) % 2) ? "bg-[#FFF9F3]" : "bg-[#FFEFDF]"}`}
                      >
                        <div className=" w-[336px] h-[70px] pl-[16px] py-[16px]">
                          <div className="h-[14px] text-[#848484] text-[14px] leading-[100%] font-normal text-left">
                            {lesson.unity.code}
                          </div>
                          <div className="flex h-[16px] items-center justify-left text-left mt-[8px]">
                            {lesson.unity.name} {group.group_name}
                          </div>
                        </div>
                        <div className="w-[62px] h-[70px] flex items-center justify-left text-left">
                          {lesson.unity.age_before} - {lesson.unity.age_after}{" "}
                          лет
                        </div>
                        <div className="w-[54px] h-[70px] flex items-center justify-left text-left">
                          {group.group_name}
                        </div>
                        <div className="w-[104px] h-[70px] flex items-center justify-left text-left">
                          {group.schedule.monday && (
                            <div className="">
                              {group.schedule.monday![0].start_time} -{" "}
                              {group.schedule.monday![0].end_time}
                            </div>
                          )}
                        </div>
                        <div className="w-[104px] h-[70px] flex items-center justify-left text-left">
                          {group.schedule.tuesday && (
                            <div className="">
                              {group.schedule.tuesday![0].start_time} -{" "}
                              {group.schedule.tuesday![0].end_time}
                            </div>
                          )}
                        </div>
                        <div className="w-[104px] h-[70px] flex items-center justify-left text-left">
                          {group.schedule.wednesday && (
                            <div className="">
                              {group.schedule.wednesday![0].start_time} -{" "}
                              {group.schedule.wednesday![0].end_time}
                            </div>
                          )}
                        </div>
                        <div className="w-[104px] h-[70px] flex items-center justify-left text-left">
                          {group.schedule.thursday && (
                            <div className="">
                              {group.schedule.thursday![0].start_time} -{" "}
                              {group.schedule.thursday![0].end_time}
                            </div>
                          )}
                        </div>
                        <div className="w-[104px] h-[70px] flex items-center justify-left text-left">
                          {group.schedule.friday && (
                            <div className="">
                              {group.schedule.friday![0].start_time} -{" "}
                              {group.schedule.friday![0].end_time}
                            </div>
                          )}
                        </div>
                        <div className="w-[104px] h-[70px] flex items-center justify-left text-left">
                          {group.schedule.saturday && (
                            <div className="">
                              {group.schedule.saturday![0].start_time} -{" "}
                              {group.schedule.saturday![0].end_time}
                            </div>
                          )}
                        </div>
                        <div className="w-[104px] h-[70px] flex items-center justify-left text-left">
                          {group.schedule.sunday && (
                            <div className="">
                              {group.schedule.sunday![0].start_time} -{" "}
                              {group.schedule.sunday![0].end_time}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="absolute top-0 left-[352px] w-[1568px] h-[1080px] bg-bg flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
