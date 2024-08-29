import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useSelector, useDispatch } from "react-redux";

function Download() {
  const { user } = useSelector((st) => st.getSingle);
  console.log(user, "usr");
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    var width = pdf.internal.pageSize.getWidth();
    const imgProperties = pdf.getImageProperties(img);
    // var height = pdf.internal.pageSize.height;
    const height = (imgProperties.height * width) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("download.pdf");
  };

  return (
    <>
      <div
        id="pdf"
        className="w-[1355px] border my-8 mx-auto px-10"
      >
        <div className=" flex flex-wrap gap-y-4 border sm:border-black p-3 pt-1">
        <div className="w-3/4 flex items-center">
          <img
            src="../Images/Ellipse 3 (Stroke) (1).png"
            alt="Applicant Picture"
            height={150}
            width={150}
          />
          <div className="px-3">
            <h1 className="font-extrabold text-2xl ">
              {user?.Name} {user?.basic?.last}
            </h1>
            <p>{user?.experience?.expDesignation}</p>
          </div>
        </div>

        <div className="w-1/4 flex flex-col justify-center gay-y-2">
          <h1 className="text-2xl">Conatact Info</h1>
          <p>{user?.Phone}</p>
          <p className="pb-4">{user?.Email}</p>
          <p className="w-3/4 font-[600] py-2 border-t border-slate-400">{user?.contact?.addressLine1} {user?.contact?.addressLine2}, {user?.contact?.city}, {user?.contact?.country}.</p>
        </div>

        <p className="w-3/4">
          {user?.summary}
        </p>
        </div>

        <div className="py-6">
          <h1 className="text-3xl font-bold">Strength & Skills</h1>

          <div  className="py-1 flex flex-wrap w-full">
          {user?.Skills?.map((ele, i) => (
                  <div key={i} className="w-1/3 py-1 flex border">
                    <h2 className="font-bold">{ele.name}</h2>
                  </div>
              ))}
          </div>
        </div>

      </div>
      <button onClick={createPDF} className="border block mx-auto mt-10">
        Download
      </button>
    </>
  );
}

export default Download;
