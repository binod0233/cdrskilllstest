import { Blog } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import { Helmet } from "react-helmet";

const ServicesSchema = ({
  title,
  image,
  link,
  briefDescription,
  description,
}) => {
  return (
    <Helmet
      script={[
        helmetJsonLdProp <
          Blog >
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": { link },
            },
            headline: { title },
            image: {
              "@type": "ImageObject",
              url: "",
            },

            author: {
              "@type": "Person",
              name: "CDRforengineer",
            },
            publisher: {
              "@type": "Organization",
              name: "CDRforengineer",
            },
            description: { briefDescription },
            articleBody: { description },
          },
      ]}
    />
  );
};
export default ServicesSchema;
