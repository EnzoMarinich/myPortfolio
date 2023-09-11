import { themeDarkContext } from "@/app/useContext/theme";
import { useContext } from "react";

const WorkItem = ({ title, year, duration, details }) => {

  const {themeDark} = useContext(themeDarkContext)


  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className={`absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 ${themeDark? `bg-stone-200 border-white` : `border-black bg-black`} `}/>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-xs">
          <span className={`inline-block px-2 py-1 font-semibold text-black rounded-md ${themeDark? `bg-white` : `bg-violet-600 text-white` }`}>
            {year}
          </span>
          <span className={`text-lg font-semibold ${themeDark? `text-white` : `text-black`}`}>{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal" style={{color: "rgb(87, 85, 85)"}}>{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
