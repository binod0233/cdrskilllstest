import { Person } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";
import { Helmet } from "react-helmet";

const MarkupSchema = ({ FAQFirstList }) => {
  const main = [];
  // FAQFirstList.map((f) => {
  //   main.push({
  //     "@type": "Question",
  //     name: `${f.title}`,
  //     acceptedAnswer: {
  //       "@type": "Answer",
  //       text: `${f.details}`,
  //     },
  //   });
  // });
  return (""
    // <Helmet
    //   script={[
    //     helmetJsonLdProp
    //       {
    //         "@context": "https://schema.org",
    //         "@type": "FAQPage",
    //         mainEntity: main,
    //       },
    //   ]}
    // />
  );
};

export default MarkupSchema;
