import React from "react";
import { Container, Row } from "react-bootstrap";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";
const Serv1 = ({ hero }) => {
  return (
    <div>
      <Container className="pt-5 pt-md-0">
        <h2
          className="  pt-5"
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "Center",
          }}
        >
          {hero?.title}
        </h2>
        <Paragraphs data={hero.paragraph ? parse(hero.paragraph) : ""} />

        <Row>
          <img
            src={
              hero.image
                ? hero.image.data.attributes.url
                : "/images/CDRServices/report-writing.png"
            }
            alt="report writing"
            className="img-fluid"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Serv1;
