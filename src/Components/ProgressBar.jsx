import React, { useEffect, useState } from "react";
import { CircularProgressbar , buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ value }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < value) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage, value]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 150 , fontWeight:"800" }}>
        <CircularProgressbar 
        styles={buildStyles({
          textColor: "#635EA3",
          pathColor: "#635EA3",
          trailColor: "#d3d3d3",
        }
        )}
        strokeWidth={12}
        value={percentage}
        text={`${percentage}%`} />
      </div>
    </div>
  );
}
export default ProgressBar;
