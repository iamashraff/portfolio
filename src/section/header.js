import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { DrawerContext } from "../App";

function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [scrolling, setScrolling] = React.useState(false);

  const { open, setOpen } = React.useContext(DrawerContext);

  const { screenWidth, setScreenWidth } = React.useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  const fontStyle = {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#F5F5F5",
  };

  const handleToggleNav = () => {
    setOpenNav((prevOpenNav) => !prevOpenNav);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleScroll = () => {
    // console.log(window.scrollY);
    setScrollPosition(window.scrollY);
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAnchor = (anchor) => {
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        // style={{ backgroundColor: "rgba(245, 245, 245, 0.5)" }}
        style={{
          // backgroundColor: "rgba(1, 1, 1, 0.86)",
          backgroundColor:
            scrollPosition >= 100
              ? "rgba(1, 1, 1, 0.9)"
              : "rgba(37, 37, 37, 0)",
        }}
        className={`flex items-center justify-between flex-wrap p-3`}
      >
        <div
          className={`animate__animated animate__fadeInDown flex items-center flex-shrink-0 text-white ${
            isLargeScreen ? "ml-15" : "ml-4"
          } mr-10`}
        >
          <Typography
            // style={{ color: "black", fontFamily: "Satisfy", fontSize: "30px" }}
            style={{
              color: "smokewhite",
              fontFamily: "Satisfy",
              fontSize: "30px",
            }}
          >
            Ashraff
          </Typography>
        </div>
        <div className="block lg:hidden">
          <button
            // onClick={handleToggleNav}
            onClick={() => {
              setOpen(true);
            }}
            className="animate__animated animate__fadeInDown flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`animate__animated animate__fadeInDown w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            openNav ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow"></div>
          {scrollPosition >= 100 && (
            <div>
              <Button onClick={() => scrollToAnchor("home")} variant="text">
                <Typography style={fontStyle}>Home</Typography>
              </Button>
            </div>
          )}

          <div>
            <Button
              onClick={() => scrollToAnchor("myeducation")}
              variant="text"
            >
              <Typography style={fontStyle}>My Education</Typography>
            </Button>
          </div>
          <div>
            <Button onClick={() => scrollToAnchor("myskills")} variant="text">
              <Typography style={fontStyle}>My Skills</Typography>
            </Button>
          </div>

          <div>
            <Button onClick={() => scrollToAnchor("myprojects")} variant="text">
              <Typography style={fontStyle}>My Projects</Typography>
            </Button>
          </div>

          <div>
            <Button
              onClick={() => scrollToAnchor("mycertifications")}
              variant="text"
            >
              <Typography style={fontStyle}>My Certifications</Typography>
            </Button>
          </div>

          <div>
            <Button onClick={() => scrollToAnchor("contactme")} variant="text">
              <Typography style={fontStyle}>Contact Me</Typography>
            </Button>
          </div>
        </div>
      </nav>

      <button
        onClick={scrollToTop}
        style={{ backgroundColor: "#FC0E49" }}
        className={`animate__animated ${
          scrollPosition > 1 ? "animate__fadeInUpBig" : "animate__fadeOutDown"
        } fixed bottom-10 right-10  text-white py-2 px-4 rounded-full cursor-pointer `}
      >
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
    </>
  );
}

export default Header;
