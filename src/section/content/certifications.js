import React from "react";
import "./certifications.css";
import { Typography } from "@material-tailwind/react";

const fontStyle = { fontFamily: "Poppins" };

function Certifications() {
  return (
    <>
      <div className="content-cert">
        <div className={`text-center`}>
          <Typography
            style={{
              ...fontStyle,
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "80px",
              marginBottom: "50px",
            }}
            color="gray"
          >
            <label style={{ color: "#FFFFFF" }}>My</label>{" "}
            <label style={{ color: "#FC0E49" }}>Certifications</label>
            &nbsp;
          </Typography>
        </div>

        <div className={`flex flex-wrap mr-30 ml-30`}>
          <div className="w-1/5 p-4 text-center flex flex-col items-center">
            1
          </div>
          <div className="w-1/5 p-4 text-center flex flex-col items-center">
            1
          </div>
          <div className="w-1/5 p-4 text-center flex flex-col items-center">
            1
          </div>
          <div className="w-1/5 p-4 text-center flex flex-col items-center">
            1
          </div>
          <div className="w-1/5 p-4 text-center flex flex-col items-center">
            1
          </div>
        </div>
      </div>
    </>
  );
}

export default Certifications;
