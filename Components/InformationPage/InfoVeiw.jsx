import styled from "@emotion/styled";
import Header from "../common/Header";
import InfoItem from "./InfoItem";

export default function () {
  return (
    <Container>
      <Header />
      <InfoItem />
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
