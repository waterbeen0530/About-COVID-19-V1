import styled from "@emotion/styled";

export default function () {
  return (
    <Conta>
      <img src="/img/HeaderLogo.png" alt="" />
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
  z-index: 100;
  position: fixed;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #abaebf;
  opacity: 0.9;
  img {
    width: 130px;
    height: 40px;
    margin-left: 170px;
  }
`;

const ContentList = styled.nav`
  margin-right: 170px;
  gap: 60px;
  display: flex;
  align-items: center;
  color: #fff;
`;
