import React from "react";
import DIsclaimer from "../components/Disclaimer/DIsclaimer";
import Hero3 from "../components/FAQ/Hero3";
// import Meta from "../components/Meta";

const Disclaimer = () => {
  return (
    <div>
      {/* <Meta title="Disclaimer" /> */}
      <DIsclaimer />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="facebook"
      />
    </div>
  );
};

export default Disclaimer;
