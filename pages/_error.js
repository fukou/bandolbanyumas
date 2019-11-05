import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";

const Root = styled.div`
  padding: 0 1.5rem;
`;

const Section = styled.section`
  max-width: 65rem;
  margin: 5rem auto;
  padding: 2.5rem 3.5rem;
  background-color: #fff;

  @media (max-width: 60rem) {
    margin: 1.5rem auto;
  }

  font-family: "PT Sans", sans-serif;

  border-radius: 8px;
  color: #777;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.05);

  h1 {
    color: #111;
    font-size: 1.75em;
  }

  a {
    color: #00ccaa;
  }
`;

function Error({ statusCode }) {
  return (
    <Layout pageTitle="404 Halaman tidak ditemukan">
      <Root>
        <Section>
          {/* {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"} */}
          <h1>Halaman yang Anda cari tidak ditemukan</h1>
          Anda baru saja ke halaman yang tidak ada. Kembali ke{" "}
          <a href="/">halaman utama?</a>
        </Section>
      </Root>
    </Layout>
  );
}

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

export default Error;
