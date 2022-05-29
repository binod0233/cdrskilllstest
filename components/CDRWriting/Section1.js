import React from "react";
import { Container } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Section1 = ({ title, data, image }) => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container className="pt-5">
        <h1
          className="headingTitle"
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            fontSize: "34x",
          }}
        >
          {title}
        </h1>

        <Paragraphs data={data} />

        <img src={image} alt={title} className="img-fluid" />
      </Container>
    </div>
  );
};

export default Section1;
