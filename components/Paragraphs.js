import React from "react";

const Paragraphs = ({ data }) => {
  return (
    <div
      className="textParagraph"
      style={{
        color: "#5B5B5B",
        fontFamily: "Asap",
        fontWeight: "400",
        fontSize: "18px",
        textAlign: "justify",
      }}
    >
      {data}
    </div>
  );
};

export default Paragraphs;
