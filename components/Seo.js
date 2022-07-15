import Head from "next/head";

const Seo = ({ seo }) => {
  // const seo = { ...seo,seo.metaTitle, seo.metaDescription, seo.metaImage };
  const Seo = seo !== null ? seo : "";
  return (
    <>
      <Head>
        {Seo.metaTitle && (
          <>
            <title>{Seo.metaTitle}</title>
            <meta property="og:title" content={Seo.metaTitle} />
            <meta name="twitter:title" content={Seo.metaTitle} />
          </>
        )}
        {Seo.metaDescription && (
          <>
            <meta name="description" content={Seo.metaDescription} />
            <meta property="og:description" content={Seo.metaDescription} />
            <meta name="twitter:description" content={Seo.metaDescription} />
          </>
        )}
        {Seo.shareImage && (
          <>
            <meta property="og:image" content={Seo.shareImage} />
            <meta name="twitter:image" content={Seo.shareImage} />
            <meta name="image" content={Seo.shareImage} />
          </>
        )}
        {Seo.article && <meta property="og:type" content="article" />}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={Seo.canonicalURL} />
      </Head>
    </>
  );
};

export default Seo;
