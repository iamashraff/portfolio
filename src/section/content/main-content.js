import React from "react";
import Lottie from "lottie-react";
import {
  Typography,
  Card,
  Avatar,
  avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import scroll from "./../../media/scroll_lottie.json";
import "./main-content.css";
import myavatar from "../../media/avatar.svg";
import Tilt from "react-parallax-tilt";
import { DrawerContext } from "../../App";

const fontStyle = { fontFamily: "Poppins" };

function MainContent() {
  const { screenWidth, setScreenWidth } = React.useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  return (
    <>
      <div className="context">
        <div class="relative z-10 flex flex-col items-center justify-center">
          <div class="avatarimg flex flex-col items-center justify-center">
            <Tilt>
              <Tooltip content="Hello there :)" placement="top">
                <img
                  className={`mb-5 ${
                    isSmallScreen
                      ? "animate__animated animate__pulse h-40 w-40"
                      : "animate__animated animate__fadeIn  h-60 w-60"
                  }   rounded-full object-cover object-center shadow-xl`}
                  src={myavatar}
                />
              </Tooltip>
            </Tilt>

            <Typography
              className="typing-effect animate__animated animate__fadeIn animate__slower text-shadow-lg"
              style={{
                ...fontStyle,
                fontSize: `${isSmallScreen ? "40px" : "45px"}`,
                fontWeight: "bold",
              }}
            >
              <label style={{ color: "#FFFFFF" }}>Hi, I am </label>
              <label style={{ color: "#FC0E49" }}>Ashraff !</label>
              &nbsp;
            </Typography>

            <Typography
              className="animate__animated animate__fadeIn animate__slower"
              style={{
                ...fontStyle,
                fontSize: `${isSmallScreen ? "18px" : "22px"}`,
              }}
              color="white"
            >
              Full Stack Software Engineer
            </Typography>
          </div>

          <div class="mt-5 grid grid-cols-2 gap-6 animate__animated animate__fadeIn animate__slower">
            <div>
              <a
                href="https://www.linkedin.com/in/muhamad-ashraff-a50a1717b/"
                target="_blank"
              >
                <Tooltip content="LinkedIn" placement="bottom">
                  <IconButton
                    variant="outlined"
                    className="rounded-full"
                    size="lg"
                    color="white"
                  >
                    <i
                      style={{ fontSize: "25px", color: "white" }}
                      class="fa fa-linkedin-square"
                      aria-hidden="true"
                    ></i>
                  </IconButton>
                </Tooltip>
              </a>
            </div>

            <div>
              <a href="https://github.com/iamashraff" target="_blank">
                <Tooltip content="GitHub" placement="bottom">
                  <IconButton
                    variant="outlined"
                    className="rounded-full"
                    size="lg"
                    color="white"
                  >
                    <i
                      style={{ fontSize: "25px", color: "white" }}
                      class="fa fa-github"
                      aria-hidden="true"
                    ></i>
                  </IconButton>
                </Tooltip>
              </a>
            </div>
          </div>

          <Lottie
            className="animate__animated animate__fadeInDown animate__slower animate__delay-2s"
            style={{
              marginTop: "50px",
              opacity: 0.3,
              width: "100px",
              height: "100px",
            }}
            animationData={scroll}
            loop={true}
            autoplay={true}
            speed={2}
          />
        </div>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default MainContent;
