import React from "react";

function LoadingSpinner() {
  return (
    <div className="w-full h-[40vh] flex justify-center items-center">
      <span className="loading loading-spinner loading-lg  text-success"></span>
    </div>
  );
}

export default LoadingSpinner;
