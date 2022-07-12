import styled from "@emotion/styled";

export default function () {
  return (
    <Container>
      <Content>
        <img src="/img/Footer/logo.png" alt="" />
        <Lists>
          <a href="https://www.facebook.com/profile.php?id=100064560693847">
            <img src="/img/Footer/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/subin_253/">
            <img src="/img/Footer/instagram.png" alt="" />
          </a>
          <a href="https://github.com/waterbeen0530">
            <img src="/img/Footer/github.png" alt="" />
          </a>
        </Lists>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a4a5ff;
`;

const Content = styled.div`
  width: 80%;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: space-between;
  img {
    width: 18%;
    cursor: pointer;
  }
`;

const Lists = styled.div`
  gap: 15px;
  height: auto;
  margin: 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  a {
    img {
      width: 50%;
    }
  }
`;
