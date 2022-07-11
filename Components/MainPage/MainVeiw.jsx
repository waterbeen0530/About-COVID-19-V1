import styled from "@emotion/styled";
import Header from "../common/Header";
import MainItem from "./MainItem";

export default function () {
  return (
    <Container>
      <Header />
      <MainItem />
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
