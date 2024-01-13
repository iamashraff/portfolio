import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import "./contact-me.css";
import { DrawerContext } from "../../App";
import { ContactModal } from "./contact-modal";
const fontStyle = { fontFamily: "Poppins" };

function ContactMe() {
  const { screenWidth, setScreenWidth } = React.useContext(DrawerContext);

  const isSmallScreen = screenWidth < 560;
  const isMediumScreen = screenWidth >= 560 && screenWidth < 850;
  const isLargeScreen = screenWidth >= 850;

  return (
    <>
      <div class="bg-royal relative flex flex-col items-center justify-center dark:bg-black transition-bg">
        <div class="absolute inset-0 overflow-hidden">
          <div class="  absolute -inset-[10px] opacity-50"></div>
        </div>
        <div class="relative flex flex-col items-center text-5xl font-bold transition-colors">
          <Typography
            style={{
              ...fontStyle,
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "100px",
              marginBottom: "10px",
            }}
            color="gray"
          >
            <label style={{ color: "#000000" }}>Contact</label>{" "}
            <label style={{ color: "#FC0E49" }}>Me</label>
            &nbsp;
          </Typography>

          <Card
            id="contactform"
            className="mt-6 mb-30 backdrop-blur-sm"
            style={{ minWidth: isLargeScreen && "100vh" }}
          >
            <CardBody>
              <Typography className="mb-2">
                <div id="nameinput" className=" mb-7">
                  <Input
                    id="name"
                    size="lg"
                    label="Name"
                    placeholder="Name"
                    required={true}
                    type="text"
                  />
                </div>
                <div id="emailinput " className=" mb-7">
                  <Input
                    id="email"
                    size="lg"
                    label="Email"
                    placeholder="Email"
                    required={true}
                    type="email"
                  />
                </div>
                <div id="phoneinput " className="mb-7">
                  <Input
                    id="phone"
                    size="lg"
                    label="Phone"
                    placeholder="Phone"
                    required={false}
                    type="text"
                  />
                </div>
                <div>
                  <div class="relative w-full min-w-[200px]">
                    <textarea
                      class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      required={true}
                    ></textarea>
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Message
                    </label>
                  </div>

                  <div className="mt-5">
                    <ContactModal />
                  </div>
                </div>
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div class="mt-4"></div>
      </div>
    </>
  );
}

export default ContactMe;
