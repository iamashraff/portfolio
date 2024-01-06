import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import uniklimage from "../../media/unikl_image.jpg";
import unikllogo from "../../media/unikl_logo.png";
const fontStyle = { fontFamily: "Poppins" };

function CardEducationSmall() {
  return (
    <>
      <Card className="max-w-[24rem] overflow-hidden m-6">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={uniklimage} />
        </CardHeader>
        <CardBody className="text-center">
          <img src={unikllogo} alt="card-image" className="h-22 mx-auto" />
          <Typography
            variant="h5"
            color="blue-gray"
            style={{ ...fontStyle, fontSize: "20px" }}
            className="mt-4"
          >
            Universiti Kuala Lumpur
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-3 font-normal"
            style={{ ...fontStyle, fontSize: "15px" }}
          >
            Malaysian Institute of Information Technology &nbsp;&nbsp;
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bachelor of
            Information Technology (Hons.) in Software Engineering
            <br></br>
            <br></br>
            CGPA : 3.93/4.00
            <br></br>
            <br></br>
            Dean List All Semesters
          </Typography>
        </CardBody>
      </Card>
    </>
  );
}

export default CardEducationSmall;
