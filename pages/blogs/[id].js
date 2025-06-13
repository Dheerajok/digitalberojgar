import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import React from "react";

const SinglePost = ({ post }) => { // Receive post as a prop
  if (!post) {
    return <div>Loading...</div>; // Or render a 404 page
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title={post.date} /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='50%' height='50%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title={post.h1} />
              <p className='desc-p'>{post.para1}</p>
              <p className='desc-p'>{post.para2}</p>
              
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title={post.h2} />

              <p className='desc-p'>{post.para3}</p>
              <p className='desc-p'>{post.para4}</p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const paths = blogdata.map((post) => ({
    params: { id: post.id.toString() }, // Make sure id is a string
  }));

  return { paths, fallback: false }; // fallback: false means any paths not returned by getStaticPaths will result in a 404 page.
}

export async function getStaticProps({ params }) {
  const post = blogdata.find((post) => post.id === parseInt(params.id));

  if (!post) {
    return {
      notFound: true, // Return a 404 page if the post is not found
    };
  }

  return {
    props: {
      post,
    },
  };
}
