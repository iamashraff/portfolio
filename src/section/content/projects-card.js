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

export function ProjectsCard(data) {
  React.useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Tooltip
      content={
        <div className="w-80">
          <Typography color="white" className="font-medium">
            {data.data.title}
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            {data.data.description}
          </Typography>
        </div>
      }
      placement="bottom"
    >
      <Card className="max-w-[24rem] overflow-hidden transition-transform transform-gpu hover:shadow-2xl">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
          style={{ backgroundColor: "#F7F7F7", height: "200px" }}
        >
          <img src={data.data.thumbnail} />
        </CardHeader>
        <CardBody
          style={{ backgroundColor: "#F7F7F7", height: "100px" }}
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
          style={{ backgroundColor: "#F7F7F7" }}
          className="flex items-center "
        >
          {data.data.tags.map((tag, index) => (
            <div style={{ marginLeft: "7px" }}>
              <Tooltip content={tag.name}>
                <img style={{ height: "32px" }} src={tag.logo} />
              </Tooltip>
            </div>
          ))}

          <div style={{ marginLeft: "auto" }}>
            <Button size="sm" variant="filled">
              <Typography
                style={{ fontFamily: "Poppins" }}
                as="a"
                href="#instagram"
              >
                <i style={{ fontSize: "18px" }} className="fa fa-github" />
                &nbsp;View
              </Typography>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Tooltip>
  );
}
