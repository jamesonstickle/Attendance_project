import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="flex flex-wrap items-center md:justify-between pt-6 pb-6 justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Atten:D{" "}
              <a
                href=""
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                by DevNest Studio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
