import Header from "components/templates/Header";
import styled from "styled-components";

const Container = styled.div`
  width: 1920px;
  height: 1080px;

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}
