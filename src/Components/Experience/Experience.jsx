import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser, updateProfile } from "../../Actions/Actions";
import { useNavigate } from "react-router-dom";

function Experience() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {user} = useSelector((st) => st.getSingle);

  useEffect(() => {
   let {id}=JSON.parse(localStorage.getItem('user'))
    dispatch(getSingleUser(id));
  }, [dispatch]);

  useEffect(() => {
    setInp(user);
  }, [user]);

  const [Inp, setInp] = useState();

  const handleChange = (e) => {
    setInp({
      ...Inp,
      experience: { ...Inp.experience, [e.target.name]: e.target.value },
    });
  };

  return (
    <>
      <div className="h-[300px] w-full py-[1px] rounded-br-[445px] rounded-tl-[445px] bg-gradient-to-b from-[#635EA3] to-[#3B3775]">
        <div className="mx-auto w-[679px] h-[141px] text-white text-center">
          <h1 className="font-extrabold text-[42px] leading-[76px] tracking-tighter pt-[48px]">
          Step 3: Experience
          </h1>
          <p className="text-[24px] leading-[2%]">
          Let’s get you noticed!Work ecperience will increase your chances of landing that next job
          </p>
        </div>
      </div>
      <div className="h-[726px]">
        <div
          style={{ boxShadow: "0px 10px 40px 0px #8552E51A" }}
          //   change this width for responsive
          className="mt-[-77px] pt-[40px] h-[721px] w-[1094px] bg-white mx-auto rounded-[10px] "
        >
          <div className="mx-auto border w-[498px] h-[74px]">Stepper</div>
          <div className="mx-[163px] mt-[65px] flex flex-wrap justify-between gap-y-[28px]">
            <div className="h-[71px] w-[323px]">
              <p className="w-[68px] text-neutral-800 text-sm  font-['Nunito Sans'] tracking-tighter">
                Job City
                <span className="text-rose-500 font-['Lato'] tracking-tighter">
                  *
                </span>
                <input
                  onChange={handleChange}
                  name="jobCity"
                  placeholder="Birmingham"
                  className="w-[323px] h-[42px] top-[27px] ps-[16px] py-[10px] mt-[7px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                ></input>
              </p>
            </div>

            <div className="h-[71px] w-[323px]">
              <p className="w-auto text-neutral-800 text-sm  font-['Nunito Sans'] tracking-tighter">
                Expected Designaition
                <input
                  onChange={handleChange}
                  name="expDesignation"
                  className="w-[323px] h-[42px] top-[27px] ps-[16px] py-[10px] mt-[7px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                ></input>
              </p>
            </div>

            <div className="h-[71px] w-[323px]">
              <p className="w-auto text-neutral-800 text-sm  font-['Nunito Sans'] tracking-tighter">
                Experience
                <input
                  name="experience"
                  onChange={handleChange}
                  placeholder="Fresh"
                  className="w-[323px] h-[42px] ps-[16px] py-[10px] mt-[7px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                ></input>
              </p>
            </div>

            <div className="w-full flex justify-between">
            <button
              onClick={() => {
                navigate("/contactinfo");
              }}
              className="w-[323px] h-[42px] block mt-[42px] font-bold bg-white border border-[#635EA3] text-[#635EA3] rounded-xl"
            >
            Previous
            </button>
            <button
              onClick={() => {
                dispatch(updateProfile(user.id, Inp));
                navigate("/review");
              }}
              className="w-[323px] h-[42px] block mt-[42px] font-bold text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl"
            >
              Next
            </button>
            </div>
          </div>

        </div>
        <div className="mt-[144px] relative w-full">
          <img
            className="absolute right-0 bottom-0 z-[-1]"
            src="../Images/Ellipse 3 (Stroke) (1).png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Experience;
