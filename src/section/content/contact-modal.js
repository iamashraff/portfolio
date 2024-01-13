import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import ReCAPTCHA from "react-google-recaptcha";

const fontStyle = { fontFamily: "Poppins" };

export function ContactModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <Button
        size="xs"
        ripple={true}
        style={{ backgroundColor: "#FC0E49" }}
        variant="filled"
        fullWidth
        onClick={handleOpen}
      >
        Submit
      </Button>

      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader style={{ fontStyle }}>Confirmation</DialogHeader>
        <DialogBody>
          <ReCAPTCHA
            sitekey="6LcbBlApAAAAANKdhCN72SeSM67i1fBpkwxlaJ2X"
            onChange={onChange}
          />
        </DialogBody>
        <DialogFooter>
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
        </DialogFooter>
      </Dialog>
    </>
  );
}
