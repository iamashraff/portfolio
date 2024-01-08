import React from "react";
import { Typography } from "@material-tailwind/react";
const fontStyle = { fontFamily: "Poppins" };

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#131313",
        paddingBottom: "20px",
        paddingTop: "20px",
      }}
      className="text-center"
    >
      <label style={{ ...fontStyle, color: "white", fontSize: "15px" }}>
        Made with &nbsp;
      </label>
      <label style={{ color: "#FC0E49" }}>❤︎</label>
      <label style={{ ...fontStyle, color: "white", fontSize: "15px" }}>
        &nbsp; by Ashraff
      </label>
      <br></br>
      <label style={{ ...fontStyle, color: "white", fontSize: "15px" }}>
        © 2024. All Rights Reserved.
      </label>
    </div>
  );
}

export default Footer;
