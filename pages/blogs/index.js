import React from "react";
import { Suspense } from "react";
// import ALLBLOGS from "../../components/Blogs/ALLBLOGS";
import BlogsCategories from "../../components/Blogs/BlogsCategories";
import RecentBlogs from "../../components/Blogs/RecentBlogs";
import Hero3 from "../../components/FAQ/Hero3";
import { useRouter } from "next/router";
import Head from "next/head";
const ALLBLOGS = React.lazy(() => import("../../components/Blogs/ALLBLOGS"));

const Blogs = ({ resBlogData }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <div className="pt-5 pt-md-0">
      <Head>
        <title>Blogs | CDR Skill Assessment</title>
        <meta
          name="description"
          content="Articles on and about cdr with cdrskillassessment | CDR Skill Assessment"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <BlogsCategories />
      <Suspense fallback={<div>Loading...</div>}>
        <ALLBLOGS />
      </Suspense>

      {resBlogData && <RecentBlogs resBlogData={resBlogData} />}
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const blog = await fetch(
    `https://cdrskill.herokuapp.com/api/blogs?populate=deep`
  );
  const blogData = await blog.json();

  return {
    props: { resBlogData: blogData?.data },
    revalidate: 1,
  };
}
export default Blogs;
