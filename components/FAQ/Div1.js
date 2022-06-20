import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

const Div1 = ({ title, description, image, alt }) => {
  return (
    <div>
      <Container className="p-5 mt-5 mt-md-0">
        <Typography
          variant="h1"
          sx={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
            fontStyle: "normal",
            fontSize: "40px",
            fontHeight: "49px",
          }}
        >
          {title}
        </Typography>
        <Typography
          my={3}
          sx={{
            color: "#666666",
            fontFamily: "Asap",
            fontWeight: "400",
            fontSize: "25px",
            fontStyle: "normal",
            lineHeight: "29px",
          }}
          gutterBottom
        >
          {description}
        </Typography>
        <Image
          className="img-fluid"
          src={image}
          alt={alt}
          width={1413}
          height={463.53}
        />
      </Container>
    </div>
  );
};

export default Div1;
