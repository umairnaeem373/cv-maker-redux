import React from "react";

function Employers() {
  return (
    <div className="mt-[117px] border border-green-500 w-full h-[556px]">
      <div className="relative">
        <img className="absolute" src="../Images/Group 237845.png" alt="" />
        <img
          className="absolute right-[53px]"
          src="../Images/Frame1.png"
          alt=""
        />
      </div>

      <div className="w-[417px] h-[326px] ms-[293px]">
        
          <div className=" mt-[104px] w-[220px]">
            <h1 className=" text-neutral-700 text-4xl font-bold font-['Nunito Sans'] leading-normal">
              Employers
            </h1>
            <div className="pt-[85px]">
              <div className="w-[38px] h-[3px] bg-[#635EA3]" />
              <p className="w-[220px] pt-[6px] text-neutral-700 text-base font-normal font-['Nunito Sans'] leading-normal">
                Free job posting
              </p>
            </div>
          </div>

          <div className=" mt-[59px] w-[220px] h-[57px]">
            <div className="w-[38px] h-[3px] bg-[#635EA3]"></div>
            <p className="w-[220px] pt-[6px] text-neutral-700 text-base font-normal font-['Nunito Sans'] tracking-tighter leading-normal">
              View candidates before deciding which are good fit
            </p>
          </div>

          <div className=" mt-[35px] w-[417px] h-[57px]">
            <div className="w-[38px] h-[3px] bg-[#635EA3]" />
            <p className="w-[417px] text-neutral-700 text-base font-normal font-['Nunito Sans'] tracking-tighter leading-normal">
              One format for profile / resume makes it easier to see all the key
              points for evaluating a candidate within seconds
            </p>
          </div>

      </div>
    </div>
  );
}

export default Employers;
