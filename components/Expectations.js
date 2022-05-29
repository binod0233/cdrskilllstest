import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "./Headings";
import Paragraphs from "./Paragraphs";

const Expectations = ({ list, title, details }) => {
  return (
    <Container className="py-2">
      <Headings title={title} />
      <Paragraphs data={details} />
      {list?.map((l,i) => (
        <Row key={i}>
          <Col xs={1} className="pt-1">
          <i
                    className="fa-solid fa-circle-check"
                    style={{
                      float: "right" ,
                      color: "#017CC9",
                    }}
                  ></i>
           
          </Col> 
          <Col xs={11}>
            <Paragraphs data={l} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Expectations;
