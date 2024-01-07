import React from "react";
import { Typography } from "@material-tailwind/react";
import { ProjectsCard } from "./projects-card";
import { DrawerContext } from "../../App";
import "./projects.css";
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
import sqlitelogo from "./../../media/sqlite_logo.png";

import imsproject from "./../../media/projects/IMS.png";
import mcdproject from "./../../media/projects/MCD.png";
import pccproject from "./../../media/projects/PCC.jpg";
import rpproject from "./../../media/projects/RP.png";
import ezcproject from "./../../media/projects/EZC.jpg";
import mysimsproject from "./../../media/projects/MYSIMS.png";

function Projects() {
  const { screenWidth, setScreenWidth } = React.useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  const fontStyle = { fontFamily: "Poppins" };

  const listProjects = [
    {
      thumbnail: mysimsproject,
      title:
        "MySIMS: A Hybrid Application of Face Recognition Attendance & Tuition Management System",
      description:
        "MySIMS is a Student Information Management System,designed for small educational organization such as tuition center and kindergarten. The system itself provide a new solution of face recognition attendance instead of conventional method of attendance taking. ",
      link: "https://mysims.me/",
      tags: [
        { name: "PHP", logo: phplogo },
        { name: "Flutter", logo: flutterlogo },
        { name: "C#", logo: csharplogo },
        { name: "MySQL", logo: mysqllogo },
        { name: "Bootstrap", logo: bootstraplogo },
        { name: "Microsoft Azure", logo: msazure },
      ],
    },
    {
      thumbnail: imsproject,
      title: "Inventory Management System",
      description:
        "Inventory Management System (IMS) frequently used in many business and enterprise in order to maintain stock keeping of their products. In this project, the IMS being used to record and store product inventories systematically.",
      link: "https://github.com/iamashraff/InventoryMS-JavaEE-Web",
      tags: [
        { name: "Java", logo: javalogo },
        { name: "MySQL", logo: mysqllogo },
        { name: "Bootstrap", logo: bootstraplogo },
      ],
    },
    {
      thumbnail: mcdproject,
      title: "McDonalds Online Ordering System",
      description:
        "McDonalds Online Ordering System is a web-based food ordering system is based on McDelivery website where it is for customer to make a food delivery order.",
      link: "https://github.com/iamashraff/McDonalds-Online-Ordering-System",
      tags: [
        { name: "C#", logo: csharplogo },
        { name: "ASP.NET", logo: aspnetlogo },
        { name: "Microsoft SQL", logo: mssqllogo },
        { name: "Bootstrap", logo: bootstraplogo },
      ],
    },
    {
      thumbnail: pccproject,
      title: "Pet Club Management System",
      description:
        "Pet Corner Club is a Pet Club Management System. Designed for Pet Club to manage the membership of the club.",
      link: "https://github.com/iamashraff/Pet-Club-Management-System",
      tags: [
        { name: "PHP", logo: phplogo },
        { name: "MySQL", logo: mysqllogo },
        { name: "Bootstrap", logo: bootstraplogo },
        { name: "Microsoft Azure", logo: msazure },
      ],
    },
    {
      thumbnail: rpproject,
      title: "RecycleProfit",
      description:
        "RecycleProfit is a mobile application that aims to connect stakeholders in the recycling business and local communities.",
      link: "https://recycleprofit.sca-academy.com.my",
      tags: [
        { name: "PHP", logo: phplogo },
        { name: "Flutter", logo: flutterlogo },
        { name: "MySQL", logo: mysqllogo },
        { name: "Bootstrap", logo: bootstraplogo },
        { name: "Amazon Web Services", logo: awslogo },
      ],
    },
    {
      thumbnail: ezcproject,
      title: "EZConference",
      description:
        "EZConference is a conference application that allow users to register to the conference through the mobile application. The project was developed using Flutter and Dart and integrated with SQLite relational database. EZConference allows user to register and sign in to their user account, view list of specialization area of conference and managing conference registration.",
      link: "https://github.com/iamashraff/EZConference-Application",
      tags: [
        { name: "Flutter", logo: flutterlogo },
        { name: "SQLite", logo: sqlitelogo },
      ],
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#F7F9FB" }} className="content-project">
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
            My <label style={{ color: "#FC0E49" }}>Projects</label>
            &nbsp;
          </Typography>
        </div>

        <div className={`flex flex-wrap  items-center justify-center mb-30`}>
          {listProjects.map((project, index) => (
            <ProjectsCard data={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
