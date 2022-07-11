import styled from "@emotion/styled";
import Header from "../common/Header";
import PortItem from "./PortItem";

export default function () {
  return (
    <Container>
      <Header />
      <PortItem />
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
`;
