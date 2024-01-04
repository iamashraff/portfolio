import { DrawerMenu } from "./section/drawer-menu";
import React, { createContext } from "react";
import LoadingFile from "./loading-file";
import Main from "./section/main";
import "./App.css";
export const DrawerContext = createContext("");

function App() {
  const [open, setOpen] = React.useState(false);
  const [timer, setTimer] = React.useState(2);

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    let intervalId; // Declare intervalId variable

    // This effect will run when the component mounts
    intervalId = setInterval(() => {
      // Decrement the timer by 1 every second
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
    }, 500);

    if (timer === 0) {
      // Additional logic when timer reaches 0
      console.log("Timer reached 0. Stopping the timer.");
      clearInterval(intervalId); // Clear the interval to stop the timer
    }

    // This cleanup function will run when the component unmounts or when the timer reaches 0
    return () => {
      clearInterval(intervalId);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  // Optional: You can handle additional logic when the timer reaches 0

  return (
    <>
      <DrawerContext.Provider
        value={{ open, setOpen, screenWidth, setScreenWidth }}
      >
        <DrawerMenu />
        {timer === 0 ? <Main /> : <LoadingFile />}
      </DrawerContext.Provider>
    </>
  );
}

export default App;
