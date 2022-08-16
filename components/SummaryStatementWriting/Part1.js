import React from "react";
import { Container } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";

const Part1 = ({ data }) => {
  const { content3 } = data;
  return (
    <div>
      <Container>
        <Headings title={content3[0]?.title} />
        <Paragraphs
          data={content3[0]?.paragraph && parse(content3[0]?.paragraph)}
        />
      </Container>
    </div>
  );
};

export default Part1;
