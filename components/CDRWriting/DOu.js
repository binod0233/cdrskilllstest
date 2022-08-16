import React from "react";
import { Container } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";
const DOu = ({ data }) => {
  const { one } = data;
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container className="pt-5">
        <Headings title={one?.title} />
        <Paragraphs data={one && parse(one?.paragraph)} />
      </Container>
    </div>
  );
};

export default DOu;
