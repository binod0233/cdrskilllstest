import React from "react";
import  Link  from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SampleCard = ({ image, title, code, link }) => {
  return (
    <div
      className="p-0 d-flex flex-column rounded my-4"
      style={{ borderRadius: "10px", zIndex: "-1" }}
    >
      <div style={{ width: "100%", height: "170px" }}>
        <img
          src={image}
          alt="sample card"
          className="img-fluid"
          style={{ height: "100%", width: "100%", objectFit: "fill" }}
        />
      </div>
      <div style={{ width: "100%", height: "90px" }}>
        <div
          className="sampleCodeContainer"
          style={{
            height: "80%",
            background: "#1562B0",
            padding: "20px 5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Century Gothic",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "700",
              color: "white",
              textAlign: "center",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontFamily: "Arial",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "26px",
              color: "white",
            }}
          >
            {code}
          </span>
        </div>
        <div
          className="d-flex justify-content-center align-items-center viewSampleContainer"
          style={{
            height: "40%",
            fontFamily: "Century Gothic",
            fontSize: "20px",
            fontWeight: "700",
            textAlign: "center",
            cursor: "pointer",
            background: "#EDEDED",
          }}
          // onClick={() => navigate("/cdr-sample/engineer")}
        >
          <Link
            className="viewSampleLink"
            
            href={link}
          >
            <a style={{ textDecoration: "none", color: "black" }}>

            See Sample<ArrowForwardIcon className="ms-2"/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
