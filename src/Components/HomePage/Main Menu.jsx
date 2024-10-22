import React from "react";
import { useNavigate } from "react-router-dom";

function MainMenu() {
  const navigate = useNavigate();
  return (
    <div className="px-[34.5px] pt-[23px] pb-[20px]">
      <nav className="h-[100px] flex justify-between items-center pt-2 ps-[25px] w-full">
        <img className="w-16 h-[73px]" src="../Images/image 1.png" alt="Logo" />
        <ul className="flex flex-col h-screen w-[calc(100vw-100px)] md:h-auto space-y-2 py-8 bg-slate-200 md:bg-transparent sm:flex-row space-x-2 fixed z-10 top-0 left-0 md:static">
          <li>
            <button
              onClick={() => navigate("/basicinfo")}
              className="font-bold text-[#635EA3] text-[0.9em] rounded-[10px] border border-[#635EA3] py-4 px-7"
            >
              Create Profile
            </button>
          </li>
          <li>
            <button className="font-bold bg-[#635EA3] text-[14px] text-white rounded-[10px] border-2 border-[#635EA3] py-4 px-7">
              Employer
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;
