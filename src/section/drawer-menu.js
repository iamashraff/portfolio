import React, { useContext } from "react";
import { DrawerContext } from "../App";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function DrawerMenu() {
  //   const [open, setOpen] = React.useState(false);

  const { open, setOpen } = React.useContext(DrawerContext);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const fontStyle = {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#000000",
  };

  return (
    <React.Fragment>
      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4"
        style={{ position: "absolute" }}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Menu
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
          <Button variant="text">
            <Typography style={fontStyle}>My Education</Typography>
          </Button>
        </div>
        <div>
          <Button variant="text">
            <Typography style={fontStyle}>My Skills</Typography>
          </Button>
        </div>

        <div>
          <Button variant="text">
            <Typography style={fontStyle}>My Projects</Typography>
          </Button>
        </div>

        <div>
          <Button variant="text">
            <Typography style={fontStyle}>My Certifications</Typography>
          </Button>
        </div>

        <div>
          <Button variant="text">
            <Typography style={fontStyle}>Contact Me</Typography>
          </Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
