import { useEffect, useState } from "react";
import searchIcon from "../assets/images/icons/search.svg";
import filterIcon from "../assets/images/icons/filter.svg";
import filterActiveIcon from "../assets/images/icons/FilterAct.svg";
import Search from "../comps/Search";
import type { LessonSection } from "../types";
import FilterModal from "../comps/FilterModal";
import axios from "axios";
import Loading from "../comps/Loading";
import SchedulePart from "../comps/SchedulePart";
import NothingFound from "../comps/NothingFound";
export default function Main() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    group: string;
    option: {id: number, title: string};
  }[]>([]);
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const [teachersList, setTeachersList] = useState<{id: number, title: string}[]>([]);
  const [lessonsList, setLessonsList] = useState<{id: number, title: string}[]>([]);
  const [groups, setGroups] = useState<{id: number, title: string}[]>([]);
  const [lessonSectionList, setLessonSectionList] = useState<LessonSection>([]);
  const [isLoading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;
  const parseFilters = (
    data: {
      group: string;
      option: {id: number, title: string};
    }[],
  ) => {
    const group = data.filter(item => item.group === 'Группа').map(item => item.option.id);
    const unity = data.filter(item => item.group === 'Кружок').map(item => item.option.id);
    const teacher = data.filter(item => item.group === 'Педагог').map(item => item.option.id);
    const filter = `?group=${group}&unity=${unity}&teacher=${teacher}`;
    axios
      .get(apiUrl + "api/lessons" + filter)
      .then((response) => {
        setLessonSectionList(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  }; 
  useEffect(() => {
    axios
      .get(apiUrl + "api/lessons")
      .then((response) => {
        setLessonSectionList(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
    axios
      .get(apiUrl + "api/group")
      .then((response) => {
        setGroups(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
    axios
      .get(apiUrl + "api/unity")
      .then((response) => {
        setLessonsList(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
    axios
      .get(apiUrl + "api/teacher")
      .then((response) => {
        setTeachersList(response.data.map((item:any) => ({id: item.id, title: item.fullName})));
        setLoading(false);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
      });
  }, []);

  return (
    <div className="w-[1568px] h-[1080px] p-[24px]">
      {isFiltersOpen && (
        <FilterModal
          selected = {selectedFilters}
          onSelect={(selected) => {
            setSelectedFilters(selected);
            parseFilters(selected);}}
          onClose={() => setFiltersOpen(false)}
          filters={[
            {
              title: "Группа",
              type: "list",
              options: groups,
            },
            {
              title: "Кружок",
              type: "list",
              options: lessonsList,
            },
            {
              title: "Педагог",
              type: "list",
              options: teachersList,
            },
          ]}
        />
      )}
      <div
        className={`flex justify-between w-[1520px] h-[64px] duration-150 ${isSearchOpen && "translate-y-[-100px]"}`}
      >
        <span className="text-orange text-[48px] font-bold leading-[100%]">
          Расписание
        </span>
        <div className="flex gap-[16px]">
          <button
            onClick={() => {
              setFiltersOpen(true);
            }}
            className={`size-[64px] rounded-[20px] p-[20px] bg-white relative ${isFiltersOpen && "z-[-1]"}`}
          >
            <img hidden={selectedFilters.length!==0} src={filterIcon} alt="filter" className="size-[24px]" />
            <img hidden={selectedFilters.length===0} src={filterActiveIcon} alt="filter" className="size-[24px]" />
            <div hidden={selectedFilters.length===0} className="absolute top-[-4px] right-[-4px] size-[24px] bg-orange rounded-full flex justify-center items-center text-white text-[16px] font-bold leading-[100%]">
              {selectedFilters.length}
            </div>
          </button>
          <button
            onClick={() => {
              setSearchOpen(true);
            }}
            className="size-[64px] rounded-[20px] p-[20px] bg-white"
          >
            <img src={searchIcon} alt="search" className="size-[24px]" />
          </button>
        </div>
      </div>
      <Search onSearch={(search)=>{
            axios
            .get(apiUrl + `api/lessons?search=${search}`)
            .then((response) => {
              setLessonSectionList(response.data);
              setLoading(false);
            })
            .catch(() => {
              console.error("Ошибка получения информации");
            });
      
      }} isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
      <div className="w-[1520px] h-[944px] mt-[24px] px-[16px] pb-[16px] bg-white rounded-[20px]">
        <div className="w-[1488px] text-left w-full h-[48px] flex gap-[32px] p-[16px] font-bold text-[#848484] text-[16px] leading-[100%]">
          <div className="w-[208px] h-[16px]">Кружок</div>
          <div className="w-[62px] h-[16px]">Возраст</div>
          <div className="w-[54px] h-[16px]">Группа</div>
          <div className="w-[120px] h-[16px]">Понедельник</div>
          <div className="w-[120px] h-[16px]">Вторник</div>
          <div className="w-[120px] h-[16px]">Среда</div>
          <div className="w-[120px] h-[16px]">Четверг</div>
          <div className="w-[120px] h-[16px]">Пятница</div>
          <div className="w-[120px] h-[16px]">Суббота</div>
          <div className="w-[120px] h-[16px]">Воскресенье</div>
        </div>
        <div className="w-[1488px] h-[872px] overflow-x-hidden overflow-y-auto rounded-[12px]">
          {lessonSectionList.length === 0 && <NothingFound/>}
          {lessonSectionList.map((lesson, index: number) => (
            <div
              key={index}
              className="w-[1468px] mb-[16px] overflow-hidden rounded-[12px]"
            >
              {lesson.groups.map((group, lessonIndex: number) => (
                <div
                  key={lessonIndex}
                  className={`text-[16px] text-text font-normal leading-[100%] w-[1468px] h-[96px] flex gap-[32px] ${!((index + lessonIndex) % 2) ? "bg-[#FFF9F3]" : "bg-[#FFEFDF]"}`}
                >
                  <div className="w-[224px] h-[96px] pl-[16px] py-[16px]">
                    <div className="text-[#848484] text-[14px]">
                      {lesson.unity.code}
                    </div>
                    <div className="mt-[8px]">{lesson.unity.name}</div>
                  </div>
                  <div className="w-[94px] mr-[-32px] h-[96px] flex items-center justify-left text-left">
                    {lesson.unity.age_before} - {lesson.unity.age_after} лет
                  </div>
                  <div className="w-[54px] h-[96px] flex items-center justify-left text-left">
                    {group.group_name}
                  </div>
                  <div className="w-[120px] h-[96px] flex items-center justify-left text-left">
                  {group.schedule.monday && <SchedulePart startTime={group.schedule.monday![0].start_time} endTime={group.schedule.monday![0].end_time} teacher={group.schedule.monday![0].teacher} cab={group.schedule.monday![0].cabinet}/>}
                  </div>
                  <div className="w-[120px] h-[96px] flex items-center justify-left text-left">
                  {group.schedule.tuesday && <SchedulePart startTime={group.schedule.tuesday![0].start_time} endTime={group.schedule.tuesday![0].end_time} teacher={group.schedule.tuesday![0].teacher} cab={group.schedule.tuesday![0].cabinet}/>}
                  </div>
                  <div className="w-[120px] h-[96px] flex items-center justify-left text-left">
                  {group.schedule.wednesday && <SchedulePart startTime={group.schedule.wednesday![0].start_time} endTime={group.schedule.wednesday![0].end_time} teacher={group.schedule.wednesday![0].teacher} cab={group.schedule.wednesday![0].cabinet}/>}
                  </div>
                  <div className="w-[120px] h-[96px] flex items-center justify-left text-left">
                  {group.schedule.thursday && <SchedulePart startTime={group.schedule.thursday![0].start_time} endTime={group.schedule.thursday![0].end_time} teacher={group.schedule.thursday![0].teacher} cab={group.schedule.thursday![0].cabinet}/>}

                  </div>
                  <div className="w-[120px] h-[96px] flex items-center justify-left text-left">
                  {group.schedule.friday && <SchedulePart startTime={group.schedule.friday![0].start_time} endTime={group.schedule.friday![0].end_time} teacher={group.schedule.friday![0].teacher} cab={group.schedule.friday![0].cabinet}/>}
                  </div>
                  <div className="w-[120px] h-[96px] flex items-center justify-left text-left">
                  {group.schedule.saturday && <SchedulePart startTime={group.schedule.saturday![0].start_time} endTime={group.schedule.saturday![0].end_time} teacher={group.schedule.saturday![0].teacher} cab={group.schedule.saturday![0].cabinet}/>}
                  </div>
                  <div className="w-[120px] h-[96px] flex items-center justify-left text-left">
                    {group.schedule.sunday && <SchedulePart startTime={group.schedule.sunday![0].start_time} endTime={group.schedule.sunday![0].end_time} teacher={group.schedule.sunday![0].teacher} cab={group.schedule.sunday![0].cabinet}/>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {isLoading && (
        <div className="absolute top-0 left-[352px] w-[1568px] h-[1080px] bg-bg flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
