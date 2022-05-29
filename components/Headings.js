import React from "react";

const Headings = ({ title }) => {
  return (
    <h2
      className="headingTitle"
      style={{
        color: "#203546",
        fontFamily: "Century Gothic",
        fontWeight: "700",
        fontSize: "34x",
      }}
    >
      {title}
    </h2>
  );
};

export default Headings;
