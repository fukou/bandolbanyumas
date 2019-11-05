import Layout from "../components/layout/Layout";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Post from "../components/products/Post";
import { useEffect, useState } from "react";

const LazyImage = dynamic(() => import("../components/utils/lazy-image"), {
  ssr: false
});

const Root = styled.div`
  max-width: 90vw;
  margin: 3.5rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;

  @media (max-width: 70rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 50rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const client = require("contentful").createClient({
  space: "pwqt3c72vj9v",
  accessToken: "mTty2H7ONePrpF8kxIfq0RjxMmrUp2CVBdiRMlqlVL0"
});

function Produk() {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
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
        <Root>
          {posts.length > 0
            ? posts.map(p => (
                <Post
                  alt={p.fields.alt}
                  key={p.fields.title}
                  media={p.fields.media}
                  title={p.fields.title}
                  description={p.fields.description}
                />
              ))
            : null}
        </Root>
      </Layout>
    </>
  );
}

export default Produk;

// class Produk extends React.Component {
//   render() {
//     return (
//       <>
//         <Layout pageTitle="Produk Kami">
//           <Root>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model1.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model2.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model3.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model4.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model5.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model9.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//           </Root>
//         </Layout>
//       </>
//     );
//   }
// }

// export default Produk;
