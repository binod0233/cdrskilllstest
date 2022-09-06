import Head from "next/head";

const Seo = ({ seo }) => {
  // const seo = { ...seo,seo.metaTitle, seo.metaDescription, seo.metaImage };
  const Seo = seo !== null ? seo : "";
  return (
    <>
      <Head>
        {Seo?.metaTitle && (
          <>
            <title>{Seo.metaTitle}</title>
            <meta property="title" content={Seo.metaTitle} />

            <meta property="og:title" content={Seo.metaTitle} />
            <meta name="twitter:title" content={Seo.metaTitle} />
          </>
        )}
        {Seo?.metaDescription && (
          <>
            <meta name="description" content={Seo.metaDescription} />
            <meta property="og:description" content={Seo.metaDescription} />
            <meta name="twitter:description" content={Seo.metaDescription} />
          </>
        )}
        {Seo?.metaImage && (
          <>
            <meta property="og:image" content={Seo.metaImage} />
            <meta name="twitter:image" content={Seo.metaImage} />
            <meta name="image" content={Seo.metaImage} />
          </>
        )}
        {Seo?.article && <meta property="og:type" content="article" />}
        <meta name="twitter:card" content="summary_large_image" />
        {Seo?.canonicalURL && <link rel="canonical" href={Seo.canonicalURL} />}
        {Seo?.structuredData && (
          <script type="application/ld+json" id="analytics">
            {JSON.stringify(Seo?.structuredData)}
          </script>
        )}
      </Head>
    </>
  );
};

export default Seo;
