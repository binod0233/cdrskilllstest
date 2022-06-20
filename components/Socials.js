import React from "react";

const Socials = () => {
  return (
    <div className="position-fixed socialContainer">
      <div className=" d-flex flex-column">
        <a
          href="https://www.facebook.com/CDRSkill-Assessment-
          114392794578547"
          target="_blank"
          rel="noreferrer"
          className="bg-white iconContainer"
        >
          <img
            src="/images/facebook.png"
            alt="facebook icon"
            className="img-fluid"
            style={{borderRadius:'100%',height:'40px'}}

          />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=61481615807"
          target="_black"
          rel="noreferrer"
          className="bg-white mt-3 iconContainer"
        >
          <img
            src="/images/what.jpg"
            alt="whatsapp icon"
            
            style={{borderRadius:'100%',height:'40px'}}
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
