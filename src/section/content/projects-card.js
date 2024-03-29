import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import "./projects.css";
import { DrawerContext } from "../../App";

export function ProjectsCard(data) {
  // React.useEffect(() => {
  //   console.log(data);
  // }, []);

  const { screenWidth, setScreenWidth } = React.useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  return (
    // <Tooltip
    //   content={
    //     <div className="w-80">
    //       <Typography color="white" className="font-medium">
    //         {data.data.title}
    //       </Typography>
    //       <Typography
    //         variant="small"
    //         color="white"
    //         className="font-normal opacity-80"
    //       >
    //         {data.data.description}
    //       </Typography>
    //     </div>
    //   }
    //   placement="bottom"
    // >
    <Card className="max-w-[24rem] overflow-hidden transition-transform transform-gpu ml-3 mr-3 mb-7">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
        style={{ backgroundColor: "#F7F7F7", height: "200px" }}
      >
        <div className="hover14">
          <figure>
            <img src={data.data.thumbnail} />
          </figure>
        </div>
      </CardHeader>
      <CardBody
        style={{ backgroundColor: "#FFFFFF", height: "100px" }}
        className="text-center"
      >
        <Typography
          style={{ fontFamily: "Poppins", fontWeight: "bold" }}
          color="blue-gray"
        >
          {data.data.title}
        </Typography>
      </CardBody>
      <CardFooter
        style={{ backgroundColor: "#FFFFFF" }}
        className="flex items-center "
      >
        {data.data.tags.map((tag, index) => (
          <div style={{ marginLeft: "7px" }}>
            <Tooltip content={tag.name}>
              <img
                style={{
                  height: "25px",
                }}
                src={tag.logo}
              />
            </Tooltip>
          </div>
        ))}

        <div style={{ marginLeft: "auto" }}>
          <Button size="sm" variant="text">
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              as="a"
              href={data.data.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View&nbsp;
              <i style={{ fontSize: "14px" }} className="fa fa-external-link" />
            </Typography>
          </Button>
        </div>
      </CardFooter>
    </Card>
    // </Tooltip>
  );
}
