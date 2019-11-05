import Link from "./ActiveLink";
import styled from "styled-components";

const Root = styled.nav`
  position: relative;
  font-family: "PT Serif", serif;
  padding: 2.5rem 1.5rem;

  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #fff;
  z-index: 99999;

  @media (max-width: 60rem) {
    padding: 0.5rem 1rem;
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 25%;
    background: rgba(255, 255, 255, 0);
    background: -moz-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.53) 53%,
      rgba(255, 255, 255, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      right top,
      color-stop(0%, rgba(255, 255, 255, 0)),
      color-stop(53%, rgba(255, 255, 255, 0.53)),
      color-stop(100%, rgba(255, 255, 255, 1))
    );
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.53) 53%,
      rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.53) 53%,
      rgba(255, 255, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ededed', endColorstr='#ffffff', GradientType=1 );
  }
`;

const Inner = styled.ul`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 60rem) {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const InnerItem = styled.li`
  flex: 0 0 auto;
`;

const InnerLink = styled.a`
  position: relative;
  display: block;
  margin: 0 2.5rem;
  color: #aaa;
  cursor: pointer;
  transition: 0.5s;

  @media (max-width: 60rem) {
    margin: 1rem 1rem;
    padding: 0rem 0;
  }

  &:hover {
    color: #111;
  }

  svg {
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  text-decoration: none;
  ${props =>
    props.active &&
    "& { color:#111; font-weight:bold;} &:before { content:''; position:absolute; left:50%; transform:translateX(-50%);bottom:-12px; width:40%; height:5px; background:#00ccaa; border-radius:30px;"}
`;

const Navigation = () => (
  <Root>
    <Inner>
      <InnerItem>
        <Link href="/">
          <InnerLink>Beranda</InnerLink>
        </Link>
      </InnerItem>
      <InnerItem>
        <Link href="/tentang">
          <InnerLink>Tentang kami</InnerLink>
        </Link>
      </InnerItem>
      <InnerItem>
        <Link href="/produk">
          <InnerLink>Produk</InnerLink>
        </Link>
      </InnerItem>
      <InnerItem>
        <Link href="/pemesanan">
          <InnerLink>Tata cara pemesanan</InnerLink>
        </Link>
      </InnerItem>
    </Inner>
  </Root>
);

export default Navigation;
