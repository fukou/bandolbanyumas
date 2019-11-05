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
`;

class Pemesanan extends React.Component {
  render() {
    return (
      <>
        <Layout pageTitle="Tentang Kami">
          <Root>
            <Section>
              <h1>Cara pemesanan</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Section>
          </Root>
        </Layout>
      </>
    );
  }
}

export default Pemesanan;
