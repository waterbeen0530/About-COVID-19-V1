import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";

export default function () {
  const [covidData, setCovidData] = useState([]);

  const getData = async () => {
    await axios
      .request({
        url: "https://api.corona-19.kr/korea/beta/?serviceKey=LnJWSjMIRqfEzUNTiQ3VuCo749kGlehKY",
        method: "GET",
      })
      .then(({ data }) => {
        const arr = Object.keys(data)
          .filter((key) => key !== "API")
          .map((key) => {
            return data[key];
          });
        console.log(arr);
        setCovidData(arr);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const items = covidData.slice(1).map((arr) => (
    <InfoList>
      <p>
        <InfoItem id="firstItem">{arr.countryNm}</InfoItem>
      </p>
      <p>
        <InfoItem id="secondItem">{arr.totalCnt}</InfoItem>
      </p>
      <p>
        <InfoItem id="thirdItem">{arr.isolCnt}</InfoItem>
      </p>
      <p>
        <InfoItem id="lastItem">{arr.deathCnt}</InfoItem>
      </p>
    </InfoList>
  ));

  return (
    <Container>
      <Title>
        <Wrapper>
          <p>지역</p>
          <p>오늘 확진자</p>
          <p>전체 확진자</p>
          <p id="lastItem">사망자</p>
        </Wrapper>
        <Content>{items}</Content>
      </Title>
    </Container>
  );
}

const Container = styled.div`
  margin: 30px;
  border-radius: 10px;
  background: #fff;
  p {
    width: 200px;
    margin: 15px 0;
    border-right: 1px solid #9d9d9d;
  }
  #lastItem {
    border: none;
  }
`;

const Title = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 200px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    color: #9d9d9d;
  }
`;

const Content = styled.div``;

const InfoItem = styled.div`
  width: 130px;
  height: 37px;
  margin: 0 35px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    cursor: pointer;
  }

  &#secondItem {
    color: #ff6584;
  }

  & > #thirdItem {
    color: #9697ff;
  }
  #lastItem {
    border: none;
  }
`;

const InfoList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
