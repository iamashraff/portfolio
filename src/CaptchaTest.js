import React, { useEffect } from "react";
import axios from "axios";
import { Button, Input } from "@material-tailwind/react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { ContactMeContext } from "./section/content/contact-me";

const CaptchaTest = () => {
  const {
    captchaStatus,
    setCaptchaStatus,
    setCaptchaOpen,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    msg,
    setMsg,
  } = React.useContext(ContactMeContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = async (objPost) => {
    console.log(objPost);
    try {
      const response = await axios.post(
        "https://api.ashraff.me/contact_form/index.php",
        objPost,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.data.status === "success") {
        console.log("Form submitted successfully!");
        // You can perform any other actions upon successful submission
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const doSubmit = async () => {
    const user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true) {
      let objPost = {
        name: name,
        email: email,
        phone: phone,
        message: msg,
      };
      await handleSubmit(objPost);

      setCaptchaStatus(true);
      setCaptchaOpen(false);
      setName("");
      setPhone("");
      setEmail("");
      setMsg("");
      // alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      // alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <LoadCanvasTemplateNoReload />
        </div>

        <div>
          <Input
            variant="static"
            placeholder="Enter Captcha Value"
            id="user_captcha_input"
            name="user_captcha_input"
            type="text"
          ></Input>
        </div>

        <div className="mt-10">
          <Button
            onClick={async () => {
              await doSubmit();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaptchaTest;
