import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import "./skills.css";
import reactlogo from "./../../media/react_logo.png";
import expresslogo from "./../../media/expressjs_logo.png";
import javalogo from "./../../media/java_logo.png";
import phplogo from "./../../media/php_logo.png";
import csharplogo from "./../../media/csharp_logo.png";
import aspnetlogo from "./../../media/aspnet_logo.png";
import flutterlogo from "./../../media/flutter_logo.png";
import pythonlogo from "./../../media/python_logo.png";
import bootstraplogo from "./../../media/bootstrap_logo.png";
import tailwindlogo from "./../../media/tailwind_logo.png";
import muilogo from "./../../media/mui_logo.png";
import wplogo from "./../../media/wordpress_logo.png";
import mysqllogo from "./../../media/mysql_logo.png";
import mariadblogo from "./../../media/mariadb_logo.png";
import mssqllogo from "./../../media/mssql_logo.png";
import msazure from "./../../media/msazure_logo.png";
import awslogo from "./../../media/aws_logo.png";
import { DrawerContext } from "../../App";

function Skills() {
  const { screenWidth, setScreenWidth } = useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  const skillList = [
    { title: "React JS", image: reactlogo },
    { title: "Express JS", image: expresslogo },
    { title: "Java", image: javalogo },
    { title: "PHP", image: phplogo },
    { title: "C#", image: csharplogo },
    { title: "ASP", image: aspnetlogo },
    { title: "Flutter", image: flutterlogo },
    { title: "Python", image: pythonlogo },
    { title: "Tailwind", image: tailwindlogo },
    // { title: "Material UI", image: muilogo },
    { title: "Wordpress", image: wplogo },
    { title: "MySQL", image: mysqllogo },
    { title: "MariaDB", image: mariadblogo },
    { title: "Microsoft SQL", image: mssqllogo },
    { title: "Microsoft Azure", image: msazure },
    { title: "AWS", image: awslogo },
  ];

  const fontStyle = { fontFamily: "Poppins" };
  return (
    <>
      <div
        class={`bg-stars`}
        style={{
          minHeight: `${isSmallScreen ? "calc(100vh + 150px)" : "calc(100vh)"}`,
        }}
      >
        <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        <div className={`centered-content ${isLargeScreen && "ml-40 mr-40"}  `}>
          <Typography
            style={{
              ...fontStyle,
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
            color="white"
          >
            My <label style={{ color: "#940808" }}>Skills</label>
            &nbsp;
          </Typography>
          <div className={`flex flex-wrap`}>
            {skillList.map((skill, index) => (
              <div
                key={index}
                className={`${isSmallScreen && "w-1/3"} ${
                  isMediumScreen && "w-1/4"
                } ${
                  isLargeScreen && "w-1/5"
                } p-4 text-center flex flex-col items-center`}
              >
                <img
                  src={skill.image}
                  // style={{ height: "70px" }}
                  className={`mx-auto mb-2 ${isSmallScreen ? "h-15" : "h-21"}`}
                  alt={skill.title}
                />
                <p className="flex-grow">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
