import React from "react";
import "./certifications.css";
import { Typography, Button } from "@material-tailwind/react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlejson from "../../media/particlesjs-config.json";
import { DrawerContext } from "../../App";
import azurefundamentals from "../../media/certifications/azurefundamentals.png";
import azureai from "../../media/certifications/azureai.png";
import azuredata from "../../media/certifications/azuredata.png";
import googlepmc from "../../media/certifications/googlepmc.png";
import googleitsupport from "../../media/certifications/googleitsupport.png";
import ibmtechsupport from "../../media/certifications/ibmtechsupport.png";
import ibmcloud from "../../media/certifications/ibmcloud.png";
import orcaledbfoundation from "../../media/certifications/oracledbfoundation.png";
import intelcloud from "../../media/certifications/intelcloud.png";
import Tilt from "react-parallax-tilt";

const fontStyle = { fontFamily: "Poppins" };

const certList = [
  {
    certImg: azurefundamentals,
    certName: "Microsoft Certified: Azure Fundamentals",
  },
  {
    certImg: azuredata,
    certName: "Microsoft Certified: Azure Data Fundamentals",
  },
  {
    certImg: azureai,
    certName: "Microsoft Certified: Azure AI Fundamentals",
  },
  {
    certImg: googlepmc,
    certName: "Google Project Management Professional Certificate",
  },
  {
    certImg: googleitsupport,
    certName: "Google IT Support Professional Certificate",
  },
  {
    certImg: ibmtechsupport,
    certName: "IBM Technical Support Professional Certificate",
  },
  {
    certImg: ibmcloud,
    certName: "IBM IT & Cloud Fundamentals Specialization",
  },
  {
    certImg: intelcloud,
    certName: "Intel Cloud Fundamentals",
  },
  {
    certImg: orcaledbfoundation,
    certName: "Oracle Academy Database Foundation",
  },
];

function Certifications() {
  const [init, setInit] = React.useState(false);
  const { screenWidth, setScreenWidth } = React.useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = React.useMemo(
    () => ({
      background: {
        color: {
          value: "#252525",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 70,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: false,
    }),
    []
  );

  return (
    <>
      <div className="content-cert">
        <div className="particle-container">
          <Particles
            id="particles"
            options={options}
            init={init}
            loaded={particlesLoaded}
          />
        </div>
        <div
          className={`text-center`}
          style={{ position: "relative", zIndex: 1 }}
        >
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
        <div
          className={`flex flex-wrap mb-10 ${
            isSmallScreen ? "" : "mr-30 ml-30"
          } `}
          style={{ position: "relative", zIndex: 1 }}
        >
          {certList.map((cert, index) => (
            <div
              className={`${
                isSmallScreen ? "w-1/2" : "w-1/3"
              } p-4 text-center flex flex-col items-center mb-7`}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.9}
                glareColor="#ffffff"
                glarePosition="bottom"
                glareBorderRadius="10px"
              >
                <img
                  src={cert.certImg}
                  // style={{ height: "70px" }}
                  className={`mx-auto mb-2 ${isSmallScreen ? "h-30" : "h-35"}`}
                  alt={cert.certName}
                />

                <p
                  className="flex-grow"
                  style={{ ...fontStyle, color: "white" }}
                >
                  {cert.certName}
                </p>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Certifications;
