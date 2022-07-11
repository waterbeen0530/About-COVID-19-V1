import styled from "@emotion/styled";

export default function () {
  const items = [
    {
      title: "편리한 통계 자료",
      text: "쉽고 빠르게 확인하는 확진자 통계 자료",
      src: "/img/PortPage/image1.png",
    },
    {
      title: "다양한 기준의 정보",
      text: "다양한 기준으로 분류된 확진자 정보",
      src: "/img/PortPage/image2.png",
    },
    {
      title: "간편한 UI/ UX",
      text: "간편한 UI/ UX 디자인 구현",
      src: "/img/PortPage/image3.png",
    },
  ];
  const portList = items.map((list, i) => (
    <div key={i}>
      <img src={list.src} alt="" />
      <h2>{list.title}</h2>
      <p>{list.text}</p>
    </div>
  ));
  return (
    <Container>
      <Background>
        <img src="/img/PortPage/Group1.png" alt="" />
        <img src="/img/PortPage/Group2.png" alt="" />
      </Background>
      <Title>
        <h1>포트폴리오</h1>
        <p>AC19만의 차별화된 기능을 경험해보세요.</p>
      </Title>
      <Content>{portList}</Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #e9ebf5;
`;

const Title = styled.div`
  padding: 40px 0 0;
  h1 {
    margin: 0;
    padding: 20px 0 0;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: #6c63ff;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #1c2248;
  }
`;

const Content = styled.div`
  padding: 50px 0 0;
  gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    z-index: 10;
    width: 350px;
    height: 410px;
    border-radius: 25px;
    background: #fff;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));

    img {
      width: 100%;
      padding: 80px 0 0;
    }

    h2 {
      margin: 25px 0 10px 0;
      font-size: 30px;
      text-align: center;
    }

    p {
      margin: 10px;
      font-size: 15px;
      font-weight: 600;
      text-align: center;
    }
  }
`;

const Background = styled.div`
  & > img:first-child {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 22%;
    height: auto;
  }
  & > img:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 27%;
    height: auto;
  }
`;
