import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CaptchaTest from "../../CaptchaTest";
import { ContactMeContext } from "./contact-me";
const fontStyle = { fontFamily: "Poppins" };

export function ContactModal() {
  const { captchaOpen, setCaptchaOpen } = React.useContext(ContactMeContext);

  const handleOpen = () => {
    setCaptchaOpen(!captchaOpen);
  };

  return (
    <>
      <Dialog size="xs" open={captchaOpen} handler={handleOpen}>
        <DialogHeader style={{ fontStyle }}>Confirmation</DialogHeader>
        <DialogBody>
          <CaptchaTest />
        </DialogBody>
        {/* <DialogFooter>
          <Button
            className="mr-2"
            variant="gradient"
            color="red"
            onClick={handleOpen}
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>
    </>
  );
}
