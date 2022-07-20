import styled from "@emotion/styled";
import KorAllArea from "./KorAllArea";
import { useEffect } from "react";

export default function ({ covidData }) {
  return (
    <Container>
      <Content>
        <ItemList>
          <div className="covidMan">
            <span>국내 확진자</span>
            <h2>{covidData.length && covidData[0].totalCnt}</h2>
            <p>+{covidData.length && covidData[0].incDec}</p>
          </div>
          <div className="freshMan">
            <span>국내 사망자</span>
            <h2>{covidData.length && covidData[0].isolCnt}</h2>
          </div>
          <div className="deathMan">
            <span>국내 사망자</span>
            <h2>{covidData.length && covidData[0].deathCnt}</h2>
          </div>
        </ItemList>
        <KorAllArea />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f5ff;
`;

const Content = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ItemList = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  div {
    width: 250px;
    height: 110px;
    padding: 15px 0 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: #9d9d9d;
  }
  h2 {
    margin: 0;
  }
  p {
    width: 80px;
    margin: 5px 0 0;
    padding: 0 0 3px 0;
    border-radius: 25px;
    text-align: center;
  }
  .covidMan {
    h2 {
      color: #ff6584;
    }
    p {
      color: #ff6584;
      background: #ffdbe3;
    }
  }

  .freshMan {
    h2 {
      margin-top: 10px;
      color: #9697ff;
    }
  }

  .deathMan {
    h2 {
      margin-top: 10px;
      color: #3c3c3c;
    }
  }
`;
