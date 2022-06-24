import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "./Headings";
import Paragraphs from "./Paragraphs";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack } from "@mui/material";

const Expectations = ({ list, title, details }) => {
  return (
    <Container className="py-2">
      <Headings title={title} />
      <Paragraphs data={details} />
      {list?.map((l, i) => (
        <Box
          key={i}
          sx={{
            fontFamily: "Asap",
            fontSize: "18px",
          }}
        >
          <Stack direction="row" spacing={1}>
            <CheckCircleIcon color="primary" />

            <Paragraphs data={l} />
          </Stack>
        </Box>
      ))}
    </Container>
  );
};

export default Expectations;