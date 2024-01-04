import React from "react";
import { Spinner } from "@material-tailwind/react";

function LoadingFile() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    </>
  );
}

export default LoadingFile;
