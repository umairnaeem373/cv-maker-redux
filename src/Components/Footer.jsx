import React from "react";

const Footer = () => {
  return (
    <div className="px-[65px] pt-[61px] pb-[18px]">
      <div className="flex flex-col">
        <div className="flex gap-[144px] justify-between">
          <div className="flex flex-col gap-[10px] pt-[32px]">
            <h2 className="text-[16px] text-[#373737] leading-[28px] font-normal">
              Services
            </h2>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 1
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 2
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 3
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 4
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 5
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 6
            </p>
          </div>
          <div className="flex flex-col gap-[10px] pt-[32px]">
            <h2 className="text-[16px] text-[#373737] leading-[28px] font-normal">
              Company
            </h2>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 1
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 2
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 3
            </p>
          </div>
          <div className="flex flex-col gap-[10px] pt-[32px]">
            <h2 className="text-[16px] text-[#373737] leading-[28px] font-normal">
              About
            </h2>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 1
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 2
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 3
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 4
            </p>
          </div>
          <div className="flex flex-col gap-[10px] pt-[32px]">
            <h2 className="text-[16px] text-[#373737] leading-[28px] font-normal">
              Links
            </h2>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 1
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 2
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 3
            </p>
            <p className="text-[16px] font-normal leading-[20px] text-[#373737] opacity-75">
              List Item 4
            </p>
          </div>

          <div className="bg-[#635ea315] px-[42px]">
            <h2 className="pt-[32px] text-[16px] font-normal text-[#373737]">
              Subscribe
            </h2>
            <div className="flex items-center pt-[16px] pb-[20px]">
              <input
                type="text"
                placeholder="Email address"
                className="w-[248px] py-[16px] bg-[#635EA3] pl-[16px] placeholder:text-[#ffffff] placeholder:text-[14px] rounded-tl-xl rounded-bl-xl"
              />
              <div className="bg-[#ffffff] px-[18px] py-[22px] rounded-tr-xl rounded-br-xl">
                <img src="../Images/arrows-down-top-move-1.png" alt="" />
              </div>
            </div>
            <p className=" mb-[31px] w-[245px] text-[12px] font-normal text-[#373737] leading-[20px]">
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing how companies engage with their
              clients & their team.
            </p>
          </div>
        </div>
        <div className="border border-[#37373747] mt-[54px]"></div>
        <div className="flex items-center justify-between px-[83px] pt-[18px]">
          <img src="/img/image 1.png" alt="" />
          <div className="flex gap-[36px]">
            <p className="text-[14px] font-normal leading-[19px] text-[#635EA3]">
              Terms
            </p>
            <p className="text-[14px] font-normal leading-[19px] text-[#635EA3]">
              Privacy
            </p>
            <p className="text-[14px] font-normal leading-[19px] text-[#635EA3]">
              Cookies
            </p>
          </div>
          <div className="flex gap-[15px]">
            <img src="/img/Linkedin.png" alt="" />
            <img src="/img/Facebook1.png" alt="" />
            <img src="/img/Twitter.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
