import React from "react";
import { Container } from "react-bootstrap";

const Div1 = ({ title, description, image, alt }) => {
  return (
    <div>
      <Container className="p-5 mt-5 mt-md-0">
        <h1
          className="ourCDRServicesTitle"
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <p
          className="p-3 m-md-4 ourCDRServicesParagraph"
          style={{
            color: "#666666",
            fontFamily: "Asap",
            fontWeight: "400",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          {description}
        </p>
        <img className="img-fluid" src={image} alt={alt} />
      </Container>
    </div>
  );
};

export default Div1;
