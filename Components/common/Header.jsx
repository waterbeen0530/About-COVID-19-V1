import styled from "@emotion/styled";

export default function () {
  return (
    <Conta>
      <img src="/img/MainPage/logo.png" alt="" />
      <ContentList>
        <p>Introduction</p>
        <p>Information</p>
        <p>Portfolio</p>
        <p>Developer</p>
        <a href="https://url.kr/xrldu3">Arin</a>
      </ContentList>
    </Conta>
  );
}

const Conta = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #7988f4;
  opacity: 0.9;
  img {
    width: 130px;
    height: 40px;
    margin-left: 25px;
  }
`;

const ContentList = styled.nav`
  margin-right: 25px;
  gap: 60px;
  display: flex;
  align-items: center;
  color: #fff;
`;
