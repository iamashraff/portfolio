import React from "react";
import {
  Typography,
  Avatar,
  Tooltip,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import uniklimage from "../../media/unikl_image.jpg";
import unikllogo from "../../media/unikl_logo.png";
const fontStyle = { fontFamily: "Poppins" };

function CardEducationBig() {
  return (
    <>
      <Card className="w-full max-w-[68rem] flex-row">
        <CardHeader
          shadow={true}
          floated={true}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={uniklimage}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="flex items-center justify-center">
          <div className="text-center">
            <Tooltip content="www.unikl.edu.my">
              <a href="https://www.unikl.edu.my/" target="_blank">
                <Button variant="text" color="white">
                  <img
                    src={unikllogo}
                    alt="card-image"
                    className="h-25 mx-auto"
                  />
                </Button>
              </a>
            </Tooltip>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 mt-5"
              style={fontStyle}
            >
              Universiti Kuala Lumpur
            </Typography>
            <Typography
              color="gray"
              className="mb-8 font-normal"
              style={fontStyle}
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
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default CardEducationBig;
