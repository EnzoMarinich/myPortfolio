import React, { useContext, useEffect } from "react";
import style from "./darkMode.module.css"
import { themeDarkContext } from "@/app/useContext/theme";
import {MdOutlineDarkMode} from "react-icons/md"

export const DarkMode = () => {

    // const {themeDark, handleTheme} = useThemeDarkContext()
    const {themeDark, handleTheme} = useContext(themeDarkContext)
    
  return (
    <div className={style.darkMode} style={themeDark? {color: "white"} : {color: "black"}}>
        <MdOutlineDarkMode/>
        <div >
            <label className="relative inline-flex cursor-pointer items-center">
            <input id="switch-2" type="checkbox" className="peer sr-only" onClick={handleTheme} checked={themeDark}/>
            <label for="switch-2" className="hidden"></label>
            <div  className="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border  after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
            </label>
        </div>
    </div>
  );
};

export default DarkMode;
