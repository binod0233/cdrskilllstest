import React from "react";
import ALLBLOGS from "../../components/Blogs/ALLBLOGS";
import BlogsCategories from "../../components/Blogs/BlogsCategories";
import RecentBlogs from "../../components/Blogs/RecentBlogs";
import Hero3 from "../../components/FAQ/Hero3";
// import Meta from "../../components/Meta";

const Blogs = () => {
  return (
    <div className='pt-5 pt-md-0'>
      {/* <Meta title="Blogs" /> */}
      <BlogsCategories />
      <ALLBLOGS />
      <RecentBlogs />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export default Blogs;
