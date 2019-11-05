import Link from "./ActiveLink";
import styled from "styled-components";

const Root = styled.nav`
  font-family: "PT Serif", serif;
  padding: 2.5rem 1.5rem;

  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #fff;
  z-index: 99999;
`;

const Inner = styled.ul`
  display: flex;
`;

const InnerItem = styled.li``;

const InnerLink = styled.a`
  position: relative;
  display: block;
  margin: 0 2.5rem;
  color: #aaa;
  cursor: pointer;
  transition: 0.5s;

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
