import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "./Headings";
import Paragraphs from "./Paragraphs";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Expectations = ({ list, title, details }) => {
  return (
    <Container className="py-2">
      <Headings title={title} />
      <Paragraphs data={details} />
      {list?.map((l,i) => (
        <Row key={i}>
          <Col xs={1} className="pt-1">
          
                  <CheckCircleIcon style={{float: "right" ,
                      color: "#017CC9",}}/>
           
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
