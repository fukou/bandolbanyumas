import React from "react";
import styled from "styled-components";
import SEO from "./SEO";
import Footer from "./Footer";
import Navigation from "./Navigation";

import reset from "../../styles/reset";

const Root = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-color: #eee;
`;

class Layout extends React.Component {
  render() {
    return (
      <>
        <SEO pageTitle={this.props.pageTitle} />
        <style jsx global>
          {reset}
        </style>
        <Navigation />

        <Root>{this.props.children}</Root>
        <Footer></Footer>
      </>
    );
  }
}

export default Layout;
