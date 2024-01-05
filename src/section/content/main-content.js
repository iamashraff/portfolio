import React from "react";
import Lottie from "lottie-react";
import {
  Typography,
  Card,
  Avatar,
  avatar,
  IconButton,
} from "@material-tailwind/react";
import scroll from "./../../media/scroll_lottie.json";
import "./main-content.css";
import myavatar from "../../media/avatar.svg";
import { DrawerContext } from "../../App";

const fontStyle = { fontFamily: "Poppins" };

function MainContent() {
  const { screenWidth, setScreenWidth } = React.useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  return (
    <>
      <div
        style={{ backgroundColor: "#F7F7F7" }}
        class="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg"
      >
        <div class="absolute inset-0 overflow-hidden">
          <div class="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col items-center justify-center">
          <div class="flex flex-col items-center justify-center">
            <img
              className={`mb-5 ${
                isSmallScreen
                  ? "animate__animated animate__pulse h-40 w-40"
                  : "animate__animated animate__fadeIn  h-60 w-60"
              }   rounded-full object-cover object-center shadow-xl`}
              src={myavatar}
              alt="nature image"
            />

            <Typography
              className="typing-effect animate__animated animate__fadeIn animate__slower text-shadow-lg"
              style={{
                ...fontStyle,
                fontSize: `${isSmallScreen ? "40px" : "45px"}`,
                fontWeight: "bold",
              }}
              color="gray"
            >
              Hi, I am <label style={{ color: "#940808" }}>Ashraff !</label>
              &nbsp;
            </Typography>
            <Typography
              className="animate__animated animate__fadeIn animate__slower"
              style={{
                ...fontStyle,
                fontSize: `${isSmallScreen ? "18px" : "22px"}`,
              }}
              color="gray"
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
                <IconButton
                  variant="outlined"
                  className="rounded-full"
                  size="lg"
                >
                  <i
                    style={{ fontSize: "25px" }}
                    class="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>
                </IconButton>
              </a>
            </div>

            <div>
              <a href="https://github.com/iamashraff" target="_blank">
                <IconButton
                  variant="outlined"
                  className="rounded-full"
                  size="lg"
                >
                  <i
                    style={{ fontSize: "25px" }}
                    class="fa fa-github"
                    aria-hidden="true"
                  ></i>
                </IconButton>
              </a>
            </div>
          </div>

          <Lottie
            className="animate__animated animate__fadeInDown animate__slower animate__delay-2s"
            style={{ marginTop: "50px" }}
            animationData={scroll}
            loop={true}
            autoplay={true}
            speed={1.5}
          />
        </div>
      </div>
    </>
  );
}

export default MainContent;
