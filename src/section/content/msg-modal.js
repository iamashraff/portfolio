import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { ContactMeContext } from "./contact-me";
import CaptchaTest from "../../CaptchaTest";
const fontStyle = { fontFamily: "Poppins" };

export function MsgModal() {
  const { msgOpen, setMsgOpen, msgError } = React.useContext(ContactMeContext);

  const handleOpen = () => {
    setMsgOpen(!msgOpen);
  };

  return (
    <>
      <Dialog size="xs" open={msgOpen} handler={handleOpen}>
        <DialogHeader style={{ fontStyle }}>{msgError.status}</DialogHeader>
        <DialogBody>
          <Typography style={{ fontStyle }}>{msgError.msg}</Typography>
        </DialogBody>
        <DialogFooter>
          {/* <Button
            className="mr-2"
            variant="gradient"
            color="red"
            onClick={handleOpen}
          >
            <span>Cancel</span>
          </Button> */}
          <Button variant="gradient" onClick={handleOpen}>
            <span>OK</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
