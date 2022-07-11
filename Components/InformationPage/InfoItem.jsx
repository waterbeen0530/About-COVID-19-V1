import styled from "@emotion/styled";

export default function () {
  const items = [
    { text: "국내 전체 확진자 현황", src: "/img/InfoPage/map.png" },
    { text: "국내 예방 접종 현황", src: "/img/InfoPage/covid.png" },
    { text: "국내 카운터 현황", src: "/img/InfoPage/count.png" },
    { text: "시도별 발생 동향", src: "/img/InfoPage/city.png" },
  ];

  const contentList = items.map((list, i) => (
    <div key={i}>
      <img src={list.src} alt="" />
      <h2>{list.text}</h2>
      <button>바로가기</button>
    </div>
  ));
  return (
    <Container>
      <Title>
        <h1>통계 정보 목록</h1>
        <p>다양한 기준의 확진자 통계 정보를 확인해보세요.</p>
      </Title>
      <Content>{contentList}</Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #ccccfa;
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
  gap: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    width: 240px;
    height: 430px;
    gap: 40px;
    border-radius: 25px;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));

    img {
      width: 40%;
      height: auteo;
      padding: 70px 0 0;
    }

    h2 {
      position: absolute;
      top: 200px;
      width: 135px;
      margin: 0;
      font-size: 25px;
      font-weight: 900px;
      text-align: center;
    }

    button {
      position: absolute;
      bottom: 70px;
      width: 150px;
      height: 42px;
      border: none;
      outline: none;
      border-radius: 25px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      background: #6c63ff;
      cursor: pointer;
    }
  }
`;
