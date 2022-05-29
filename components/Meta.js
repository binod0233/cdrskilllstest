import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="service" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <mata property="og:image" content={image} />  
      <meta property="og:site_name" content="CDRforengineer" />
      <meta property="twitter:title" content="CDRforengineer" />
      <meta property="twitter:site" content="@CDRforengineer" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={url} />
    </Helmet>
  );
};

export default Meta;
Meta.defaultProps = {
  title: "",
  keywords: "",
  url: "cdrskillassessment.com",
  image: "/logo.png",
};
