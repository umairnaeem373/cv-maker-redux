import React, { useState } from "react";
import { newUser } from "../../Actions/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MaskGroup() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Inp, setInp] = useState();

  const handleChange = (e) => {
    setInp({ ...Inp, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 mx-auto">
        <h1 className="font-extrabold text-6xl text-[rgb(34,34,34)] leading-[76px] tracking-[-1px] max-w-[613px] h-auto mt-[103px]">
            Find Your <span className="text-[#635EA3]">Blockchain Dev</span> Job
            Today
          </h1>
          <p className="max-w-[519px] text-[22px] leading-[30.01px] tracking-[2%] h-fit mt-[27px]">
            Discover the leading companies in the blockchain industry and find
            job opportunities.
          </p>
          <button
          onClick={()=>navigate('/login')}
           className="max-w-[360px] whitespace-nowrap mt-8 h-[54px] px-[95px] py-[15px] text-white font-bold rounded-[10px] bg-gradient-to-r from-[#49478C] to-[#9756FF]">
            Login Now
          </button>
        </div>

        <div className="mx-auto justify-self-center md:justify-self-stretch md:mx-8 shadow-lg bg-white min-w-[325px] max-w-[432px] h-[598px] my-[28px] rounded-[10px]">
          <div className="bg-white">
            <div className="mx-[55px] flex gap-4 items-center justify-between">
              <h1 className="mt-[39px] text-center whitespace-nowrap text-neutral-700 text-2xl font-extrabold font-['Nunito Sans'] uppercase leading-none tracking-[3px]">
                sign up
              </h1>
              {/* <div className="whitespace-nowrap mt-[32px]">
                <button className="h-[30px] rounded-tl-[5.05px] py-[5px] px-[10px] rounded-bl-[5.05px] font-bold text-[14px] text-white bg-[#635EA3] w-[91px] leading-[19.1px] tracking-tighter">
                  Job Seeker
                </button>
                <button className="border h-[30px] text-[#979696] rounded-br-[5.05px] py-[5px] px-[10px] rounded-tr-[5.05px] leading-[19.1px] tracking-tighter">
                  Employer
                </button>
              </div> */}
            </div>

            <div className="h-[69px] ms-[55px] mt-[17px]">
              <p className="w-[68px] text-neutral-800 text-sm  font-['Nunito Sans'] tracking-tighter">
                Name
                <span className="text-rose-500 font-['Lato'] tracking-tighter">
                  *
                </span>
              </p>
              <input
                name="Name"
                onChange={handleChange}
                placeholder="Enter Name"
                className="mt-[8px] min-w-[80%] max-w-[323px] h-[42px] top-[27px] px-[16px]  rounded-lg border border-zinc-400 text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
              ></input>
            </div>

            <div className="h-[69px] ms-[55px] mt-[20px] ">
              <p className="w-[68px] text-neutral-800 text-sm  font-['Nunito Sans'] tracking-tighter">
                Email
                <span className="text-rose-500 font-['Lato'] tracking-tighter">
                  *
                </span>
              </p>
              <input
                name="Email"
                onChange={handleChange}
                placeholder="Enter Email"
                className="mt-[8px] min-w-[80%] max-w-[323px] h-[42px] top-[27px] ps-[16px]  rounded-lg border border-zinc-400 text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
              ></input>
            </div>

            <div className="h-[69px] ms-[55px] mt-[20px] ">
              <p className="w-[68px] text-neutral-800 text-sm  font-['Nunito Sans'] tracking-tighter">
                Phone no
                <span className="text-rose-500 font-['Lato'] tracking-tighter">
                  *
                </span>
              </p>
              <input
                name="Phone"
                onChange={handleChange}
                type="number"
                placeholder="Enter phone no"
                className="mt-[8px] min-w-[80%] max-w-[323px] h-[42px] top-[27px] ps-[16px]  rounded-lg border border-zinc-400 text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
              ></input>
            </div>

            <div className="h-[69px] ms-[55px] mt-[20px] ">
              <p className="w-[68px] text-neutral-800 text-sm  font-['Nunito Sans'] tracking-tighter">
                Password
                <span className="text-rose-500 font-['Lato'] tracking-tighter">
                  *
                </span>
              </p>
              <input
                name="Password"
                onChange={handleChange}
                type="password"
                placeholder="Enter Password"
                className="mt-[8px] min-w-[80%] max-w-[323px] h-[42px] top-[27px] ps-[16px]  rounded-lg border border-zinc-400 text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
              ></input>
            </div>

            <button
              onClick={() => dispatch(newUser(Inp))}
              className="block mx-auto mt-[32px] text-white text-sm font-bold font-['Nunito Sans'] leading-normal min-w-[80%] max-w-[323px] h-[42px] bg-gradient-to-r from-indigo-900 to-violet-500 rounded-[10px]"
            >
              Register Now
            </button>

            <div className="mt-4 mx-auto flex justify-center items-center h-4">
              <div className="w-[107px] h-[0px] left-[271px] top-[513px]  border border-b-neutral-400"></div>
              <button className="mx-[14px] text-neutral-400 text-xs font-normal font-['Nunito Sans']">
                or sign up with
              </button>
              <div className="w-[107px] h-[0px] border border-t-neutral-400"></div>
            </div>

            <div className="w-[133.10px] h-[30.31px] mx-auto mt-[16px] flex justify-between">

                <div className="w-[59.10px] h-[30.31px] rounded-[5.05px] border border-neutral-400 flex justify-center items-center">
                <img
                  className="w-3 h-3 left-[24px] top-[9px] "
                  src="../Images/search 1.png"
                  alt="Google"
                />
                </div>
                <div className="w-[59.10px] h-[30.31px] rounded-[5.05px] border border-neutral-400 flex justify-center items-center">
                <img
                  className="w-3 h-3 left-[24px] top-[9px] "
                  src="../Images/facebook 3.png"
                  alt="Facebook"
                />
                </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute z-[-1] bottom-0 right-0"
        src="../Images/Group 6294.png"
        alt="Purple Section"
      />
    </div>
  );
}

export default MaskGroup;
