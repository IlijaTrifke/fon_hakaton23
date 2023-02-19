import React from "react";

import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

export const Loader = () => {
  return (
    <div
      className="loader"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
      }}
    >
      <div className="backdrop"></div>
      <FadeLoader
        color={"#00ffa3"}
        size={"80vw"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
