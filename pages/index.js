import React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
// import Products from "../components/products/Grid";
import Post from "../components/products/Post";

import styled from "styled-components";

// CONTENTFUL_SPACE_ID=pwqt3c72vj9v
// CONTENTFUL_ACCESS_TOKEN=mTty2H7ONePrpF8kxIfq0RjxMmrUp2CVBdiRMlqlVL0

// space: process.env.SPACE_ID,
// accessToken: process.env.ACCESS_TOKEN

const client = require("contentful").createClient({
  space: "pwqt3c72vj9v",
  accessToken: "mTty2H7ONePrpF8kxIfq0RjxMmrUp2CVBdiRMlqlVL0"
});

const Header = styled.header`
  padding: 6.5rem 3.5rem 10rem 3.5rem;
  background-image: linear-gradient(120deg, #00ccaa 0%, #8fd3f4 100%);

  font-size: 1.1em;
  color: #eee;

  h1 {
    color: #f9f9f9;
  }
`;

const Root = styled.div`
  max-width: 90vw;
  margin: -5rem auto 5rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;

  @media (max-width: 80rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
`;

const Error = styled.div`
  max-width: 90rem;
  margin: auto;
  padding: 2.5rem 1.8rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.05);

  font-size: 2em;
  font-weight: bold;
  grid-column: 1/-1;
`;

function Home() {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });

    console.log(entries);

    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allPosts = await fetchEntriesForContentType(contentTypes[0]);
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <>
      <Layout>
        <Header>
          <h1>Bandol Banyumas</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Header>
        <Root>
          {posts.length > 0 ? (
            posts
              .slice(0, 4)
              .map(p => (
                <Post
                  alt={p.fields.alt}
                  key={p.fields.title}
                  media={p.fields.media.fields.file.url}
                  title={p.fields.title}
                  description={p.fields.description}
                />
              ))
          ) : (
            <>
              <Error>
                Error showing the posts, please check your internet connection
              </Error>
            </>
          )}
        </Root>
      </Layout>
    </>
  );
}

export default Home;
