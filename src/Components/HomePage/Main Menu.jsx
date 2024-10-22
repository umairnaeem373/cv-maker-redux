import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function MainMenu() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(0);

  return (
    <div className="px-[34.5px] pt-[23px] pb-[20px]">
      <nav className="h-[100px] flex justify-between items-center pt-2 ps-[25px] w-full">
        <img className="w-16 h-[73px]" src="../Images/image 1.png" alt="Logo" />
        <button
          onClick={() => setMenu(!menu)}
          className="absolute text-xl md:hidden focus:border border-slate-400 rounded z-20 p-2 top-8 right-8"
        >
          {menu ? <IoCloseOutline /> : <CiMenuBurger/>}
        </button>
        <ul
          className={`flex gap-2 flex-col h-screen divide-y-2 divide-slate-50 md:divide-y-0 p-8 w-[calc(100vw-100px)] md:w-auto md:h-auto bg-slate-200 md:bg-transparent md:flex-row space-x-2 fixed z-10 top-0 duration-700 ${
            menu ? "left-0" : "-left-[100vw]"
          } md:static`}
        >
          <li>
            <button
              onClick={() => navigate("/basicinfo")}
              className="font-bold text-[#635EA3] whitespace-nowrap text-[0.9em] rounded-[10px] md:border md:border-[#635EA3] py-4 px-7"
            >
              Create Profile
            </button>
          </li>
          <li>
            <button className="font-bold md:bg-[#635EA3] text-[0.9em] text-[#635EA3]  md:text-white rounded-[10px] md:border-2 md:border-[#635EA3] py-4 px-7">
              Employer
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;
