import React from "react";
import { Typography } from "@material-tailwind/react";
const fontStyle = { fontFamily: "Poppins" };

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <hr className="my-8 border-blue-gray-50 ml-20 mr-20" />
      <div
        class="relative flex  items-center justify-center mb-4"
        style={{ height: "10px", fontSize: "15px" }}
      >
        <label style={{ ...fontStyle, color: "black" }}>Made with &nbsp;</label>
        <label
          className="animate__animated animate__heartBeat animate__infinite"
          style={{ color: "#FC0E49" }}
        >
          ❤︎
        </label>
        <label style={{ ...fontStyle, color: "black" }}>
          &nbsp; by Ashraff
        </label>
      </div>
      <div class="relative flex  items-center justify-center mb-7">
        <label style={{ ...fontStyle, color: "black", fontSize: "15px" }}>
          © 2024. All Rights Reserved.
        </label>
      </div>
    </div>
  );
}

export default Footer;
