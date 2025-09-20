import React from "react";

const Skeleton = ({ height = "20px", width = "100%", borderRadius = "4px", style = {}, className = "" }) => {
  return (
    <div
      className={`block bg-[linear-gradient(90deg,#D9D9D9_25%,#eaeaea_37%,#D9D9D9_63%)] 
                  bg-[length:400%_100%] animate-skeleton 
                  rounded-md shadow-sm mb-3 mx-auto ${className}`}
      style={{ height, width, borderRadius, ...style }}
    />
  );
};

export default Skeleton;
