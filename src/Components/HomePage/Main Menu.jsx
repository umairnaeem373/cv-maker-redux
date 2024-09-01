import React from "react";
import { useNavigate } from "react-router-dom";

function MainMenu() {
  const navigate = useNavigate();
  return (
    <div className="px-[34.5px] pt-[23px] pb-[20px]">
      <nav className="h-[100px] flex justify-between items-center pt-2 ps-[25px] w-full">
        <img className="w-16 h-[73px]" src="../Images/image 1.png" alt="Logo" />
        <div className="flex gap-[30px]">
          <button
            onClick={() => navigate("/basicinfo")}
            className="font-bold text-[#635EA3] text-[0.9em] rounded-[10px] border border-[#635EA3] py-4 ps-8 pe-6"
          >
            Create Profile
          </button>
          <button className="font-bold bg-[#635EA3] text-[14px] text-white rounded-[10px] border-2 border-[#635EA3] py-[15px] ps-[30px] pe-[25px]">
            Employer
          </button>
        </div>
      </nav>
    </div>
  );
}

export default MainMenu;
