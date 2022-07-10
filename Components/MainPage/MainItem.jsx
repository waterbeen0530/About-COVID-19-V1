import styled from "@emotion/styled";
import Background from "./Background";

export default function () {
  return (
    <>
      <Background />
      <Container>
        <Title>
          <h1>
            ABOUT
            <br />
            COVID-19
          </h1>
          <p>간편하게 코로나19 확진자 통계 정보를 확인하세요!</p>
        </Title>
        <img src="/img/MainPage/mainIcon.png" alt="" />
      </Container>
    </>
  );
}

const Container = styled.div`
  z-index: 10;
  width: 100%;
  height: 100vh;
  gap: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 570px;
    height: auto;
  }
`;

const Title = styled.div`
  color: #252b59;
  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 90px;
  }
  p {
    margin: 20px 0 0;
    font-weight: 600;
    font-size: 25px;
  }
`;
