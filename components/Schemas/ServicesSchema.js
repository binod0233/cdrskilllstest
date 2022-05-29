import { Product } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import { Helmet } from "react-helmet";

const ServicesSchema = ({ image, name, description }) => {
  return (
    <Helmet
      script={[
        helmetJsonLdProp <
          Product >
          {
            "@context": "http://schema.org",
            "@type": "Product",
            name: "CDR Report Writing Services for Engineers Australia",
            image: "https://cdrforengineer.com/images/n2.png",
            description:
              "We provide personalised CDR reports prepared by CDR experts based on your degree and career.",
            url: "https://cdrforengineer.com/services/cdr-writing-service-australia/",
            brand: {
              "@type": "Brand",
              name: "CDRforengineer",
              logo: "https://cdrforengineer.com/images/logo.png",
            },
            offers: {
              "@type": "Offer",
              price: "Negotiable",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 10,
              bestRating: 10,
              worstRating: 7,
              ratingCount: 20,
            },
          },
      ]}
    />
  );
};
export default ServicesSchema;
