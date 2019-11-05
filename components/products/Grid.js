import styled from "styled-components";
import dynamic from "next/dynamic";

const LazyImage = dynamic(() => import("../utils/lazy-image"), { ssr: false });

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

const Products = styled.div`
  background-color: #fff;

  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;

  transition: 0.5s;

  &:hover {
    transform: translateY(-5%);
  }

  @media (max-width: 60rem) {
    &:hover {
      transform: translateY(0%);
    }
  }

  img {
    border: 30px solid #eff6ff;
  }

  p {
    padding: 1.5rem 1.85rem;
    color: #777;
  }
`;

const Button = styled.a`
  display: block;
  padding: 0.85rem 1rem;
  margin: 0 1rem 1rem 1rem;
  text-align: center;
  font-weight: bold;
  border: 2px solid #333;
  color: #333;
  text-decoration: none;
  border-radius: 10px;
  -moz-border-radius: 10px;
  transition: 0.5s;

  &:hover {
    background-color: #333;
    color: white;
  }

  ${props =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
    `}
`;

const Grid = () => (
  <Root>
    <Products>
      <LazyImage srcset="/img/model1.png" src="/img/model1.png" alt="Product" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button href="/" target="_blank" rel="noopener">
        Pesan sekarang
      </Button>
    </Products>
    <Products>
      <LazyImage srcset="/img/model2.png" src="/img/model2.png" alt="Product" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button href="/" target="_blank" rel="noopener">
        Pesan sekarang
      </Button>
    </Products>
    <Products>
      <LazyImage srcset="/img/model3.png" src="/img/model3.png" alt="Product" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button href="/" target="_blank" rel="noopener">
        Pesan sekarang
      </Button>
    </Products>
    <Products>
      <LazyImage srcset="/img/model4.png" src="/img/model3.png" alt="Product" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button href="/" target="_blank" rel="noopener">
        Pesan sekarang
      </Button>
    </Products>
  </Root>
);

export default Grid;
