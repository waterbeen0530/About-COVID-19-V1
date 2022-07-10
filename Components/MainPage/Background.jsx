import styled from "@emotion/styled";

export default function () {
  return (
    <Container>
      <img src="/img/MainPage/Background1.png" alt="" />
      <img src="/img/MainPage/Background2.png" alt="" />
    </Container>
  );
}

const Container = styled.div`
  & > img:first-child {
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: auto;
  }
  & > img:last-child {
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: auto;
  }
`;
