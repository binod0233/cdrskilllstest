import React from "react";
import { Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";
const Tips = ({ data }) => {
  const { tips } = data;
  return (
    <div>
      <Container>
        <Headings title={tips?.title} />
        <Row className="p-5">
          <img
            src={tips?.image?.data?.attributes?.url}
            alt="tips"
            className="img-fluid m-1"
          />
        </Row>
        {tips?.paragraph && parse(tips?.paragraph)}
      </Container>
    </div>
  );
};

export default Tips;
