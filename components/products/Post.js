import styled from "styled-components";

const Root = styled.article`
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.05);

  h1,
  h2,
  h3 {
    color: #111;
  }
`;

const Text = styled.div`
  padding: 1.5rem 1.5rem;
  color: #777;
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

function Post({ alt, description, media, title }) {
  return (
    <Root>
      <img alt={alt} src={media} />
      <Text>
        <h2>{title}</h2>
        {description}
      </Text>
      <Button>Pesan sekarang</Button>
    </Root>
  );
}

export default Post;
