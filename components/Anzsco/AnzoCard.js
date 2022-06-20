import React from "react";
import Link  from "next/link";

const AnzoCard = ({ image, title, code, link }) => {
  return (
    <div
      className="p-0 d-flex flex-column rounded my-md-4 my-2"
      style={{ borderRadius: "15px", zIndex: "-1" }}
    >
      <Link href={link}>
        <a>
        <div className="mobileAnzoCard" style={{ width: "100%", height: "200px" }}>
          <img
            src={image}
            alt={title}
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
            <span className='anzoCardText'
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
            <span className='anzoCardText'
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
        </div>
        </a>
      </Link>
    </div>
  );
};

export default AnzoCard;
