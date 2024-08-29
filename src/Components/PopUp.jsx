import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile, getSingleUser } from "../Actions/Actions";
import { AiOutlineFolder } from "react-icons/ai";
import { BsPerson, BsTrophy } from "react-icons/bs";
import { GoHistory, GoMail } from "react-icons/go";
import { PiGlobeHemisphereEast} from "react-icons/pi";
import { SlGraduation } from "react-icons/sl";
import { LiaIndustrySolid } from "react-icons/lia";
import {
  IoDocumentTextOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BiBarChart } from "react-icons/bi";
import { FaRegLifeRing } from "react-icons/fa6";
import { MdOutlineHub } from "react-icons/md";

function PopUp({ type, setType }) {
  const { user } = useSelector((st) => st.getSingle);

  const dispatch = useDispatch();
  const [currentInput, setCurrent] = useState({});

  console.log(currentInput)

  useEffect(() => {
    let { id } = JSON.parse(localStorage.getItem("user"));
    dispatch(getSingleUser(id));
  }, [dispatch]);

  useEffect(() => {
    type === "basic" ||
    type === "Credentials" ||
    type === "Language" ||
    type === "Hobbies"
      ? setCurrent(user[type])
      : setCurrent({});
  }, [type,user]);

  const handleChange = (e) => {
    type === "Language" || type === "Hobbies"
      ? setCurrent(e.target.value)
      : setCurrent({ ...currentInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      type === "Credentials" ||
      type === "public-links" ||
      type === "Summary" ||
      type === "PreferredJobCity"
    ) {
      dispatch(updateProfile(user.id, currentInput));
    } else if (

      type === "Skills" ||
      type === "WorkHistory" ||
      type === "Projects" ||
      type === "Language" ||
      type === "Hobbies"
    ) {
      !user.hasOwnProperty(type)
        ? dispatch(updateProfile(user.id, { [type]: [currentInput] }))
        : dispatch(
            updateProfile(user.id, { [type]: [...user[type], currentInput] })
          );
    } else {
      dispatch(updateProfile(user.id, { [type]: currentInput }));
    }
    setType(false);
    setCurrent({});
  };

  return (
    type && (
      <div className="fixed inset-0 w-full flex items-center justify-center z-20 bg-gray-800 bg-opacity-50">
        {/* <div className="absolute inset-0 bg-gray-800 opacity-50"></div> */}
        <div
          className="bg-white w-[65%] px-[78px] pt-2 pb-10 rounded-xl shadow-lg z-20 flex flex-col"
          style={{ boxShadow: "0px 10px 40px 0px #8552E51A" }}
        >
          <button
            className="cursor-pointer text-2xl text-gray-700 self-end"
            onClick={() => setType(false)}
          >
            x
          </button>
          {type === "basic" ? (
            <div className=" flex flex-col justify-center w-[680px]">
              <div className="flex mx-auto">
                <BsPerson className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Basic Information</h2>
              </div>
              <div className="pt-2 flex flex-wrap  justify-between gap-y-[10px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                    First Name
                    <span className="text-[#FF3F56] font-bold">*</span>
                  </label>
                  <input
                    name="firstName"
                    value={currentInput?.firstName}
                    onChange={handleChange}
                    className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                    Last Name<span className="text-[#FF3F56] font-bold">*</span>
                  </label>
                  <input
                    name="last"
                    value={currentInput?.last}
                    onChange={handleChange}
                    className="w-[323px] py-2 px-[16px]  text-[14px] rounded-xl border border-[#B0B0B0]"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                    Date of Birth
                    <span className="text-[#FF3F56] font-bold">*</span>
                  </label>
                  <input
                    name="dob"
                    value={currentInput.dob}
                    onChange={handleChange}
                    className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                    Degree Level
                    <span className="text-[#FF3F56] font-bold">*</span>
                  </label>
                  <select
                    id="degree"
                    name="degree"
                    value={currentInput.degree}
                    onChange={handleChange}
                    className="w-[320px] py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  >
                    <option value="matriculation">Matriculation</option>
                    <option value="olevel">O Level</option>
                    <option value="Inter">Intermediate</option>
                    <option value="graduation">Graduation</option>
                    <option value="master">Master's Degree</option>
                    <option value="doctorate">Doctorate Degree</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h2 className="text-[14px] text-[#252525] font-normal">
                    Gender
                  </h2>
                  <div className="flex items-center gap-[25px]">
                    <div className="flex gap-[10px]">
                      <input
                        name="gender"
                        value="male"
                        checked={currentInput.gender === "male"}
                        onChange={handleChange}
                        className="rounded-xl"
                        type="radio"
                      />
                      <label className="text-[16px]">Male</label>
                    </div>
                    <div className="flex gap-[10px]">
                      <input
                        name="gender"
                        value="female"
                        checked={currentInput.gender === "female"}
                        onChange={handleChange}
                        className=" rounded-xl"
                        type="radio"
                      />
                      <label>Female</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : type === "Credentials" ? (
            <div className="flex flex-col gap-y-[10px]">
              <h2 className="self-center text-[26px] font-bold">
                Registration Email
              </h2>
              <div className="flex flex-col gap-y-[8px]">
                <label htmlFor="Email" className="text-[14px]">
                  Registration Email
                </label>
                <input
                  type="text"
                  name="password"
                  value={user.Email}
                  placeholder="Enter your registration email"
                  className="w-[680px] py-2 bg-[#B0B0B0] rounded-xl px-5 placeholder:text-[#828282]"
                  disabled
                />
              </div>
              <div className="flex flex-col gap-y-[8px]">
                <label htmlFor="password" className="text-[14px]">
                  Change Password
                </label>
                <input
                  type="password"
                  name="Password"
                  onChange={handleChange}
                  className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
                />
              </div>
            </div>
          ) : type === "public-links" ? (
            <div className="flex flex-col gap-y-[10px]">
              <div className="flex mx-auto">
                <GoMail className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Public Profile Links</h2>
              </div>

              <p className="pt-[35px] mx-auto">
                Enhance your career by creating a custom URL for your profile.
              </p>

              <div className="flex flex-col gap-y-[8px]">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  className="border border-[#B0B0B0] w-[680px] py-2 rounded-xl px-5"
                />
                <div className="pb-[12px]">
                  <p className="text-[#373737]">
                    Public URL Links:{" "}
                    <span className="text-[#676767]">
                      {" "}
                      http://website.com/profile/
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ) : type === "education" ? (
            <div className="pb-[23px] flex flex-col">
              <div className="flex mx-auto">
                <SlGraduation className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Education</h2>
              </div>

              <div className="pt-[22px] gap-y-[4px] flex justify-between flex-wrap">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="degreeTitle">Degree Title</label>
                  <input
                    onChange={handleChange}
                    name="degreeTitle"
                    placeholder="Title"
                    value={currentInput.degreeTitle}
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col gap-y-2">
                  <label htmlFor="degreelevel">Degree Level</label>
                  <select
                    onChange={handleChange}
                    name="degreeLevel"
                    placeholder="Name"
                    value={currentInput.degreeLevel}
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  >
                    <option value="Matriculation">Matriculation</option>
                    <option value="Inter">Inter</option>
                    <option value="BS">BS</option>
                    <option value="Masters">Masters</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="flex flex-col gap-y-2">
                  <label htmlFor="majors">Majors</label>
                  <select
                    onChange={handleChange}
                    name="majors"
                    placeholder="Name"
                    value={currentInput.majors}
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  >
                    <option value="Chemistry">Chemistry</option>
                    <option value="Physics">Physics</option>
                    <option value="CS">Computer Science</option>
                    <option value="Medical">Medical</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="flex flex-col gap-y-2">
                  <label htmlFor="year">Year Completion</label>
                  <input
                    onChange={handleChange}
                    name="year"
                    placeholder="Year"
                    value={currentInput.year}
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col gap-y-2">
                  <label htmlFor="Institute">Institute</label>
                  <input
                    onChange={handleChange}
                    name="Institute"
                    placeholder="Institute Name"
                    value={currentInput.Institute}
                    className="w-[323px] h-[42px] top-[27px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col gap-y-2">
                  <label htmlFor="location">Location</label>
                  <input
                    onChange={handleChange}
                    name="location"
                    placeholder="Location"
                    value={currentInput.location}
                    className="w-[323px] h-[42px] top-[27px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="w-[323px] flex flex-col gap-y-2">
                  <label htmlFor="resultType">Result Type</label>
                  <div className="gap-y-2">
                    <input
                      type="radio"
                      name="resultType"
                      checked={currentInput.resultType === "CGPA"}
                      onChange={handleChange}
                      className="w-[12px] h-[12px] ps-[16px] pt-[10px] mt-[7px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                      value="CGPA"
                    />{" "}
                    CGPA
                    <input
                      type="radio"
                      name="resultType"
                      checked={currentInput.resultType === "Percentage"}
                      onChange={handleChange}
                      className=" ms-[25px] w-[12px] h-[12px] ps-[16px] mt-[7px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 font-['Nunito Sans'] tracking-tight"
                      value="Percentage"
                    />{" "}
                    Percentage
                  </div>
                </div>

                <div className="flex flex-col gap-y-2">
                  <label htmlFor="percentage">CGPA/Percentage</label>
                  <input
                    onChange={handleChange}
                    name="percentage"
                    value={currentInput.percentage}
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>
              </div>
            </div>
          ) : type === "Awards" ? (
            <div className="pb-[63px] flex flex-col">
              <div className="flex mx-auto">
                <BsTrophy className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Awards</h2>
              </div>
              <div className="flex mt-8 gap-y-2">
                <div className="flex flex-wrap justify-between gap-y-6">
                  <div className="flex flex-col w[323px]">
                    <label htmlFor="AwardTitle">
                      Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="AwardTitle"
                      value={currentInput.AwardTitle}
                      onChange={handleChange}
                      id=""
                      className="mt-2 rounded-[8px] border-[1px] border-gray-400 outline-none py-1 px-4 w-[323px]"
                    />
                  </div>

                  <div className="flex flex-col w[323px]">
                    <label htmlFor="date">Date</label>
                    <input
                      name="date"
                      value={currentInput.date}
                      placeholder="Month/Year"
                      onChange={handleChange}
                      className="mt-2 rounded-[8px] border-[1px] border-gray-400 outline-none py-1 px-4 w-[323px]"
                    />
                  </div>

                  <div className="flex flex-col w[323px]">
                    <label htmlFor="">Authority</label>
                    <input
                      type="text"
                      name="Authority"
                      value={currentInput.Authority}
                      onChange={handleChange}
                      className="mt-2 rounded-[8px] border-[1px] border-gray-400 outline-none py-1 px-4 w-[323px]"
                    />
                  </div>

                  <div className="flex flex-col w[323px]">
                    <label htmlFor="AwardURL">Award URL</label>
                    <input
                      name="AwardURL"
                      value={currentInput.AwardURL}
                      onChange={handleChange}
                      className="mt-2 rounded-[8px] border-[1px] border-gray-400 outline-none py-1 px-4 w-[323px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : type === "WorkHistory" ? (
            <div className="flex flex-col">
              <div className="flex mx-auto">
                <GoHistory className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Work History</h2>
              </div>

              <div className="pt-2 gap-y-[3px] flex justify-between flex-wrap">
                <div className="flex flex-col">
                  <label htmlFor="JobTitle">Job Title</label>
                  <input
                    onChange={handleChange}
                    name="JobTitle"
                    placeholder="Job Title"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Company">Company</label>
                  <input
                    onChange={handleChange}
                    name="Company"
                    placeholder="Name"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Duration</label>
                  <div className="flex justify-between w-[323px] h-[42px] text-neutral-400 text-sm font-['Nunito Sans'] tracking-tight">
                    <input
                      className="rounded-[8px] px-2 border border-[#B0B0B0]"
                      type="date"
                      name="startDate"
                      onChange={handleChange}
                    />
                    <input
                      className="rounded-[8px] px-2 border border-[#B0B0B0]"
                      type="date"
                      name="endDate"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email">Refrence Email</label>
                  <input
                    onChange={handleChange}
                    name="email"
                    placeholder="Email Address"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Refrence Number">Refrence Number</label>
                  <input
                    onChange={handleChange}
                    name="Refrence Number"
                    placeholder="Cell Number"
                    className="w-[323px] h-[42px] top-[27px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="county">Select County</label>
                  <select
                    name="Country"
                    onChange={handleChange}
                    className="w-[323px] h-[42px] border-[1px] border-gray-400 outline-none py-1 px-2 rounded-[8px]"
                  >
                    <option value="Pakistan" className="text-[16px] w-[323px]">
                      Pakistan
                    </option>
                    <option value="England">England</option>
                    <option value="Australia">Australia</option>
                    <option value="China">China</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="SaudiArab">Saudi Arabia</option>
                    <option value="India">India</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="City">Select City</label>
                  <select
                    name="City"
                    onChange={handleChange}
                    className="w-[323px] h-[42px] border-[1px] border-gray-400 outline-none py-1 px-2 rounded-[8px]"
                  >
                    <option
                      value="Select an option"
                      className="text-[16px] w-[323px]"
                    >
                      Lahore
                    </option>
                    <option value="Birmingham">Birmingham</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Beiging">Beiging</option>
                    <option value="London">London</option>
                    <option value="Toronte">Toronto</option>
                    <option value="Jeddah">Jeddah</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
              </div>

              <textarea
                name="workDetail"
                onChange={handleChange}
                cols="30"
                rows="3"
                className="mt-2 border-[1px] border-gray-400 outline-none px-2 py-1"
              ></textarea>
            </div>
          ) : type === "Projects" ? (
            <div className="flex flex-col">
              <div className="flex mx-auto">
                <AiOutlineFolder className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Projects</h2>
              </div>

              <div className="pt-2 gap-y-[3px] flex justify-between flex-wrap">
                <div className="flex flex-col">
                  <label htmlFor="ProjectTitle">Project Title</label>
                  <input
                    onChange={handleChange}
                    name="ProjectTitle"
                    placeholder="Project Title"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="Company">Company</label>
                  <input
                    onChange={handleChange}
                    name="Company"
                    placeholder="Name"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Duration</label>
                  <div className="flex justify-between w-[323px] h-[42px] text-neutral-400 text-sm font-['Nunito Sans'] tracking-tight">
                    <input
                      className="rounded-[8px] px-2 border border-[#B0B0B0]"
                      type="date"
                      name="startDate"
                      onChange={handleChange}
                    />
                    <input
                      className="rounded-[8px] px-2 border border-[#B0B0B0]"
                      type="date"
                      name="endDate"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="webLink">Project URL</label>
                  <input
                    onChange={handleChange}
                    name="webLink"
                    placeholder="Web Link"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientName">Client/Customer Name</label>
                  <input
                    onChange={handleChange}
                    name="clientName"
                    placeholder="Full name"
                    className="w-[323px] h-[42px] top-[27px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="URL">Client/Customer URL</label>
                  <input
                    onChange={handleChange}
                    name="url"
                    placeholder="Enter a Web Link"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="tools">Tools</label>
                  <input
                    onChange={handleChange}
                    name="tools"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>
              </div>

              <textarea
                name="workDetail"
                onChange={handleChange}
                cols="30"
                rows="3"
                className="mt-2 border-[1px] border-gray-400 outline-none px-2 py-1"
              ></textarea>
            </div>
          ) : type === "Certificates" ? (
            <div className="pb-[23px] flex flex-col">
              <div className="flex mx-auto">
                <HiOutlineCheckBadge className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Certifications</h2>
              </div>

              <div className="pt-[22px] gap-y-2 flex justify-between flex-wrap">
                <div className="flex flex-col">
                  <label htmlFor="degreeTitle">Certification Name</label>
                  <input
                    onChange={handleChange}
                    name="certificateName"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="rollNo.">
                    License Number/Enrolment Number
                  </label>
                  <input
                    onChange={handleChange}
                    name="rollNo."
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="certificateAuth">
                    Certification Authority
                  </label>
                  <input
                    onChange={handleChange}
                    name="certificateAuth"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="certificateURL">Certification URL</label>
                  <input
                    onChange={handleChange}
                    name="certificateURL"
                    className="w-[323px] h-[42px] ps-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="cerDate">Certification Date</label>
                  <input
                    onChange={handleChange}
                    name="cerDate"
                    type="date"
                    className="w-[323px] h-[42px] top-[27px] px-[16px] rounded-[8px] border border-[#B0B0B0] text-neutral-400 text-sm font-normal font-['Nunito Sans'] tracking-tight"
                  ></input>
                </div>
              </div>
            </div>
          ) : type === "Summary" ? (
            <div className="pb-[63px] flex flex-col">
              <div className="flex mx-auto">
                <IoDocumentTextOutline className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Summary</h2>
              </div>
              <textarea
                name="summary"
                onChange={handleChange}
                value={currentInput.summary}
                cols="30"
                rows="10"
                className="mt-8 border-[1px] border-gray-400 outline-none px-2 py-1"
              ></textarea>
            </div>
          ) : type === "Industry-Experience" ? (
            <div className="flex flex-col gap-y-[10px]">
              <div className="flex mx-auto">
                <LiaIndustrySolid className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Industry Experience</h2>
              </div>

              <div className="flex flex-col gap-y-[8px]">
                <label htmlFor="industry">Industry</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name={type}
                  id="password"
                  className="border border-[#d5b5b5] w-[680px] py-2 rounded-xl px-5"
                />
              </div>
            </div>
          ) : type === "PreferredJobCity" ? (
            <div className="flex flex-col gap-y-[10px]">
              <div className="flex mx-auto">
                <IoLocationOutline className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Preferred Job City</h2>
              </div>

              <div className="pt-[41px] pb-[119px] flex flex-col gap-y-[8px]">
                <label htmlFor={type}>Enter your Preferred Job Location</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Type Here"
                  name={type}
                  id="password"
                  className="border border-[#d5b5b5] w-[680px] py-2 rounded-xl px-5"
                />
              </div>
            </div>
          ) : type === "Hobbies" ? (
            <div className="flex flex-col gap-y-[10px]">
              <div className="flex mx-auto">
                <FaRegLifeRing className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">
                  Hobbies/Extra Activities
                </h2>
              </div>

              <div className="pt-[41px] pb-[119px] flex flex-col gap-y-[8px]">
                <label htmlFor={type}>
                  Enter your Hobbies or Extra Activities Below
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Type Here"
                  name={type}
                  id="password"
                  className="border border-[#d5b5b5] w-[680px] py-2 rounded-xl px-5"
                />
              </div>
            </div>
          ) : type === "Language" ? (
            <div className="flex flex-col gap-y-[10px]">
              <div className="flex mx-auto">
                <PiGlobeHemisphereEast className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Languages</h2>
              </div>

              <div className="pt-[41px] pb-[119px] flex flex-col gap-y-[8px]">
                <label htmlFor={type}>Enter your Languages Below</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Type Here"
                  name={type}
                  id="password"
                  className="border border-[#d5b5b5] w-[680px] py-2 rounded-xl px-5"
                />
              </div>
            </div>
          ) : type === "Refrences" ? (
            <div className="pb-[63px] flex flex-col">
              <div className="flex mx-auto">
                <MdOutlineHub className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Refrences</h2>
              </div>

              <div className="flex mt-8 gap-y-2">
                <div className="flex flex-wrap justify-between gap-y-6">
                  <div className="flex flex-col w[323px]">
                    <label htmlFor="refName">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="refName"
                      value={currentInput.refName}
                      onChange={handleChange}
                      className="mt-2 rounded-[8px] border-[1px] border-gray-400 outline-none py-1 px-4 w-[323px]"
                    />
                  </div>

                  <div className="flex flex-col w[323px]">
                    <label htmlFor="refCompany">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="refCompany"
                      value={currentInput.Company}
                      onChange={handleChange}
                      className="mt-2 rounded-[8px] border-[1px] border-gray-400 outline-none py-1 px-4 w-[323px]"
                    />
                  </div>

                  <div className="flex flex-col w[323px]">
                    <label htmlFor="refEmail">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="refEmail"
                      value={currentInput.refEmail}
                      onChange={handleChange}
                      className="mt-2 rounded-[8px] border-[1px] border-gray-400 outline-none py-1 px-4 w-[323px]"
                    />
                  </div>

                  <div className="flex flex-col w[323px]">
                    <label htmlFor="contactNo.">
                      Contact No. <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="contactNo."
                      value={currentInput.contactNo}
                      placeholder="+XXXXXXXXXXX"
                      onChange={handleChange}
                      className="mt-2 rounded-[8px] border-[1px] border-gray-400 outline-none py-1 px-4 w-[323px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ): type === "Skills"?(
          <div className=" flex flex-col justify-center pb-[30px]">
            <div className="flex mx-auto">
                <BiBarChart className="w-[45px] h-[36px]" />
                <h2 className="text-[24px] ps-[23px]">Skills</h2>
              </div>
            <div className="flex flex-wrap justify-around gap-y-[10px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Skill Name<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="name"
                  value={currentInput.name}
                  onChange={handleChange}
                  className="w-[323px] py-2 px-[16px] text-[14px]  rounded-xl border border-[#B0B0B0]"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[#252525] text-[14px] font-normal tracking-[2%]">
                  Skill Percentage<span className="text-[#FF3F56] font-bold">*</span>
                </label>
                <input
                  name="percentage"
                  value={currentInput.percentage}
                  onChange={handleChange}
                  className="w-[320px]  py-2 px-[16px] text-[14px] rounded-xl border border-[#B0B0B0]"
                  type="number"
                  />
                </div>
              </div>
            </div>
          ) : (

            ""
          )}
          <div className="flex justify-around pt-[20px]">
            <button
              onClick={() => setType(false)}
              className="py-2 w-[323px] font-bold text-[14px] border border-[#635EA3] text-[#635EA3] rounded-xl"
            >
              Cancel
            </button>
            <button
              className="py-2 w-[323px] text-[14px] font-bold text-white bg-gradient-to-r from-[#49478C] to-[#9756FF] rounded-xl"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default PopUp;
