import React from "react";

const Paragraphs = ({ data }) => {
  return (
    <p
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
    </p>
  );
};

export default Paragraphs;
