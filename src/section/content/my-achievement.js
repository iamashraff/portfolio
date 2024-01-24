import React from "react";
import { Typography } from "@material-tailwind/react";
import Tilt from "react-parallax-tilt";
import { DrawerContext } from "../../App";
import { CardAchievement } from "./card-achievement";
import bgachievement from "../../media/achievement/bg-achievement.jpg";

function MyAchievement() {
  const { screenWidth, setScreenWidth } = React.useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  const fontStyle = { fontFamily: "Poppins" };

  return (
    <>
      <div
        id="sectionAchievement"
        className="relative flex flex-col items-center justify-center"
        style={{
          backgroundColor: "#F7F9FB",
        }}
      >
        <Typography
          style={{
            ...fontStyle,
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "80px",
          }}
          color="gray"
        >
          My <label style={{ color: "#FC0E49" }}> Achievement</label>
          &nbsp;
        </Typography>
      </div>
    </>
  );
}

export default MyAchievement;
