import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from "../Actions/Actions";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBasketballBall,
} from "react-icons/fa";
import { AiFillInstagram, AiOutlineFolder } from "react-icons/ai";
import { BsPerson, BsTrophy } from "react-icons/bs";
import { GoHistory, GoMail } from "react-icons/go";
import { PiLinkSimple, PiGlobeHemisphereEast } from "react-icons/pi";
import { SlGraduation } from "react-icons/sl";
import { LiaIndustrySolid } from "react-icons/lia";
import { IoDocumentTextOutline, IoLocationOutline } from "react-icons/io5";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BiBarChart } from "react-icons/bi";
import { FaRegLifeRing } from "react-icons/fa6";
import { MdOutlineHub } from "react-icons/md";
import PopUp from "./PopUp";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

function Review() {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const { user } = useSelector((st) => st.getSingle);
  console.log(user);

  useEffect(() => {
    let { id } = JSON.parse(localStorage.getItem("user"));
    dispatch(getSingleUser(id));
  }, [dispatch]);

  const [type, setType] = useState(false);

  const Percentage = user && Object.keys(user).length * 5;

  const handleClick = (value) => {
    console.log(value);
    setType(value);
  };

  const handlePopUp = () => {
    return <PopUp type={type} setType={setType} />;
  };

  return (
    <>
      <div className="w-full pt-[48px] pb-[110px] rounded-br-[445px] rounded-tl-[445px] bg-gradient-to-b from-[#635EA3] to-[#3B3775]">
        <div className="mx-auto w-[679px] text-white text-center">
          <h1 className="font-extrabold text-[42px] leading-[76px] tracking-tighter">
            Review: Complete your Profile
          </h1>
          <p className="text-[24px] leading-[32.74px]">
            You are just few steps away from you professional CV. Complete your
            profile
          </p>
        </div>
      </div>
      <div>
        <div
          style={{ boxShadow: "0px 10px 40px 0px #8552E51A" }}
          //   change this width for responsive
          className="mt-[-77px] pt-[43px] w-4/5 bg-white mx-auto px-[54px] rounded-[10px] "
        >
          <div className="w-auto rounded-[15px] flex flex-wrap items-start justify-between">
            <div className="w-[305px] rounded-[15px]  addShadow">
              <img
                className="mt-[50px] ms-[74px] h-[150px] w-[150px] rounded-[50%]"
                src="../Images/Frame1.png"
                alt=""
              />
              <h1 className="h-[22px] text-center mx-auto mt-[31px] font-[600]">
                {user?.basic.firstName}
              </h1>
              <p className="text-[#767676] text-center h-6 w-[146px] mx-auto mt-[15px]">
                {user?.experience?.expDesignation}
              </p>
              <div className="mt-[15px] h-6 w-[219px] mx-auto flex justify-between">
                <FaFacebook className="h-6 w-6 text-[#635EA3]" />
                <AiFillInstagram className="h-6 w-6 text-[white] p-1 bg-[#635EA3] rounded-[50%]" />
                <FaTwitter className="h-6 w-6 text-[white] p-1 bg-[#635EA3] rounded-[50%]" />
                <FaLinkedinIn className="h-6 w-6 text-[white] p-1 bg-[#635EA3] rounded-[50%]" />
                <FaYoutube className="h-6 w-6 text-[white] p-1 bg-[#635EA3] rounded-[50%]" />
                <FaBasketballBall className="h-6 w-6 text-[white] p-1 bg-[#635EA3] rounded-[50%]" />
              </div>
              <div className="mx-auto mt-[25px] w-[220px] h-0 border border-t-[1px]"></div>
              <div className="flex ms-[26px] mt-[25px]">
                <BsPerson className="h-[21px] w-[21px]" />
                <div className="flex w-[227px] ms-[10px] justify-between items-center">
                  <p className="w-[110px] h-7 text-[14px]">Basic Information</p>
                  <button
                    onClick={() => handleClick("basic")}
                    className="text-[#2961CD] w-[56px] h-[27px]"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <div className="flex ms-[26px] mt-[16px]">
                <GoMail className="h-[21px] w-[21px]" />
                <div className="flex w-[227px] ms-[10px] justify-between items-center">
                  <p className="w-[110px] h-7 text-[14px]">Credentials</p>
                  <button
                    onClick={() => handleClick("Credentials")}
                    className="text-[#2961CD] w-[56px] h-[27px]"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap ms-[26px] mt-[16px]">
                <PiLinkSimple className="h-[21px] w-[21px]" />
                <div className="flex w-[227px] ms-[10px] justify-between items-center">
                  <p className="w-[110px] h-7 text-[14px]">Public Link</p>
                  <button
                    onClick={() => handleClick("public-links")}
                    className="text-[#2961CD] w-[56px] h-[27px]"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <p className="w-[165px] h-6 text-[14px] text-[#676767] mt-[3px] mb-[5px] ms-[31px]">
                    http://website.com/profile/
                  </p>
                  <div className="flex items-center ms-[29px]">
                    <FaFacebook className="h-6 w-6 text-[#635EA3]" />
                    <p className="h-6 w-30 text-[14px] ms-[11px]">
                      Share on Facebook
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex ms-[26px] mt-[18px]">
                <SlGraduation className="h-[21px] font-light w-[21px]" />
                <div className="flex w-[227px] ms-[10px] justify-between items-center">
                  <p className="w-[110px] h-7 text-[14px]">Education</p>
                  <button
                    onClick={() => handleClick("education")}
                    className="text-[#2961CD] w-[56px] h-[27px]"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap ms-[26px] mt-[18px]">
                <LiaIndustrySolid className="h-[21px] font-light w-[21px]" />
                <div className="flex w-[227px] ms-[10px] justify-between items-center">
                  <p className="w-[110px] h-7 text-[14px]">Industry</p>
                  <button
                    onClick={() => handleClick("Industry-Experience")}
                    className="text-[#2961CD] w-[56px] h-[27px]"
                  >
                    Add
                  </button>
                </div>
                <p className="w-[130px] h-6 text-[14px] text-[#676767] ms-[31px] mt-[2px]">
                  Accounting/Taxation
                </p>
              </div>

              <div className="flex pb-[20px] ms-[26px] mt-[18px]">
                <BsTrophy className="h-[21px] font-light w-[21px]" />
                <div className="flex w-[227px] ms-[10px] justify-between items-center">
                  <p className="w-[110px] h-7 text-[14px]">Awards</p>
                  <button
                    onClick={() => handleClick("Awards")}
                    className="text-[#2961CD] w-[56px] h-[27px]"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[332px] pb-[10px]">
              <div className="w-full h-[99px] mt-[20px]">
                <h1 className="mx-auto w-[278px] h-[30px] text-[24px] font-[600]">
                  Already Have a Resume?
                </h1>
                <button className="block mx-auto mt-[27px] text-white text-sm font-bold font-['Nunito Sans'] leading-normal w-[323px] h-[42px] bg-gradient-to-r from-indigo-900 to-violet-500 rounded-[10px]">
                  Upload File
                </button>
              </div>

              <div className="mt-[51px]">
                <div className="flex flex-col pb-3 mx-[26px] border-b">
                  <div className="flex ">
                    <IoDocumentTextOutline className="h-[21px] font-light w-[21px]" />
                    <div className="flex w-[227px] ms-[10px] justify-between items-center">
                      <p className="w-[110px] h-7 text-[14px]">Summary</p>
                      <button
                        onClick={() => handleClick("Summary")}
                        className="text-[#2961CD] w-[56px] h-[27px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <p className="text-center text-[#767676]">
                    {user?.summary}
                  </p>
                </div>

                <div className="flex flex-col border-b pb-3 mx-[26px]">
                  <div className="flex mt-[25px]">
                    <GoHistory className="h-[21px] font-light w-[21px]" />
                    <div className="flex w-[227px] ms-[10px] justify-between items-center">
                      <p className="w-[110px] h-7 text-[14px]">Work History</p>
                      <button
                        onClick={() => handleClick("WorkHistory")}
                        className="text-[#2961CD] w-[56px] h-[27px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  {user?.WorkHistory?.map((ele, index) => {
                    return (
                      <div key={index}>
                        {ele.JobTitle && (
                          <p>
                            Job Title:{" "}
                            <span className="text-[#767676]">
                              {ele.JobTitle}
                            </span>
                          </p>
                        )}
                        {ele.Company && (
                          <p>
                            Company:{" "}
                            <span className="text-[#767676]">
                              {ele.Company}
                            </span>
                          </p>
                        )}
                        {ele.startDate && (
                          <p>
                            Duration:{" "}
                            <span className="text-[#767676]">
                              {ele.startDate} to{" "}
                              {ele.endDate ? ele.endDate : "Now"}
                            </span>
                          </p>
                        )}
                        {ele.City && (
                          <p>
                            City:{" "}
                            <span className="text-[#767676]">{ele.City}</span>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col border-b pb-3 mx-[26px] ">
                  <div className="flex mt-[25px] ">
                    <AiOutlineFolder className="h-[21px] font-light w-[21px]" />
                    <div className="flex w-[227px] ms-[10px] justify-between items-center">
                      <p className="w-[110px] h-7 text-[14px]">Project</p>
                      <button
                        onClick={() => handleClick("Projects")}
                        className="text-[#2961CD] w-[56px] h-[27px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  {user?.Projects?.map((ele, index) => {
                    return (
                      <div key={index}>
                        {ele.ProjectTitle && (
                          <p>
                            Project Title:{" "}
                            <span className="text-[#767676]">
                              {ele.ProjectTitle}
                            </span>
                          </p>
                        )}
                        {ele.Company && (
                          <p>
                            Company:{" "}
                            <span className="text-[#767676]">
                              {ele.Company}
                            </span>
                          </p>
                        )}
                        {ele.startDate && (
                          <p>
                            Duration:{" "}
                            <span className="text-[#767676]">
                              {ele.startDate} to{" "}
                              {ele.endDate ? ele.endDate : "Now"}
                            </span>
                          </p>
                        )}
                        {ele.City && (
                          <p>
                            City:{" "}
                            <span className="text-[#767676]">{ele.City}</span>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex pb-3 mt-[25px] mx-[26px] border-b">
                  <HiOutlineCheckBadge className="h-[21px] font-light w-[21px]" />
                  <div className="flex w-[227px] ms-[10px] justify-between items-center">
                    <p className="w-[110px] h-7 text-[14px]">Certifications</p>
                    <button
                      onClick={() => handleClick("Certificates")}
                      className="text-[#2961CD] w-[56px] h-[27px]"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="mx-[26px] flex flex-col border-b pb-3">
                  <div className="flex items-center mt-[25px]">
                    <BiBarChart className="h-[21px] font-light w-[21px]" />
                    <div className="flex w-[227px] ms-[10px] justify-between items-center">
                      <p className="w-[110px] text-[14px]">Skills</p>
                      <button
                        onClick={() => handleClick("Skills")}
                        className="text-[#2961CD] w-[56px] h-[27px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                 <div className="flex flex-wrap gap-2">
                 {user?.Skills?.map((ele, i) => (
                <div key={i} className="flex flex-col gap-y-[10px] w-[120px]">
                  <div className="flex justify-between">
                    <h2>{ele.name}</h2>
                    <h2>{ele.percentage}%</h2>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded-md overflow-hidden">
                    <div
                      className="h-full bg-purple-700"
                      style={{ width: `${ele.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}

                 </div>

                </div>

                <div className="mx-[26px] flex flex-col border-b pb-3">
                  <div className="flex mt-[25px] ">
                    <IoLocationOutline className="h-[21px] font-light w-[21px]" />
                    <div className="flex w-[227px] ms-[10px] justify-between items-center">
                      <p className="w-[110px] h-7 text-[14px]">
                        Preferrd Job City
                      </p>
                      <button
                        onClick={() => handleClick("PreferredJobCity")}
                        className="text-[#2961CD] w-[56px] h-[27px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <p>
                    City:{" "}
                    <span className="text-[#767676]">
                      {user?.PreferredJobCity}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col border-b pb-3 mx-[26px]">
                  <div className="flex mt-[25px] ">
                    <FaRegLifeRing className="h-[21px] font-light w-[21px]" />
                    <div className="flex w-[227px] ms-[10px] justify-between items-center">
                      <p className="w-[110px] h-7 text-[14px]">
                        Hobbies/Activites
                      </p>
                      <button
                        onClick={() => handleClick("Hobbies")}
                        className="text-[#2961CD] w-[56px] h-[27px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <p>
                    Hobbies:
                    {user?.Hobbies?.map((ele, i, Hobbies) => (
                      <span className="px-1 text-[#767676]" key={i}>
                        {ele} {i < Hobbies.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="flex flex-col border-b pb-3 mx-[26px]">
                  <div className="flex mt-[25px]">
                    <PiGlobeHemisphereEast className="h-[21px] font-light w-[21px]" />
                    <div className="flex w-[227px] ms-[10px] justify-between items-center">
                      <p className="w-[110px] h-7 text-[14px]">Languages</p>
                      <button
                        onClick={() => handleClick("Language")}
                        className="text-[#2961CD] w-[56px] h-[27px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <p>
                    Languages:
                    {user?.Language?.map((ele, i, Language) => (
                      <span className="px-1 text-[#767676]" key={i}>
                        {ele} {i < Language.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="flex flex-col border-b pb-3 mx-[26px]">
                  <div className="flex mt-[25px]">
                    <MdOutlineHub className="h-[21px] font-light w-[21px]" />
                    <div className="flex w-[227px] ms-[10px] justify-between items-center">
                      <p className="w-[110px] h-7 text-[14px]">Refrences</p>
                      <button
                        onClick={() => handleClick("Refrences")}
                        className="text-[#2961CD] w-[56px] h-[27px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  <div>
                    {user?.Refrences?.refName && (
                      <p>
                        Name:{" "}
                        <span className="text-[#767676]">
                          {user.Refrences.refName}
                        </span>
                      </p>
                    )}
                    {user?.Refrences?.refCompany && (
                      <p>
                        Company:{" "}
                        <span className="text-[#767676]">
                          {user.Refrences.refCompany}
                        </span>
                      </p>
                    )}
                    {user?.Refrences?.refCompany && (
                      <p>
                        Contact:{" "}
                        <span className="text-[#767676]">
                          {user.Refrences["contactNo."]}
                        </span>
                      </p>
                    )}
                    {user?.Refrences?.refEmail && (
                      <p>
                        Email:{" "}
                        <span className="text-[#767676]">
                          {user.Refrences.refEmail}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[305px] h-[366px] flex flex-col items-center justify-around rounded-[15px] addShadow">
              <div className="pt-7 mx-auto w-[163px] font-bold flex  items-center justify-between">
                <BsPerson />
                <p>Profile Strength</p>
              </div>
              <div>
                <ProgressBar value={Percentage} />
              </div>
              <button 
              onClick={()=>navigate('/download')}
              className="w-[275px] h-[42px] block text-[#635EA3] mx-auto font-bold rounded-[15px] border border-[#635EA3]">
                Download CV
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

        <div>{handlePopUp()}</div>
      </div>
    </>
  );
}

export default Review;
