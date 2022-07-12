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
      <p>{arr.countryNm}</p>
      <p>{arr.totalCnt}</p>
      <p>{arr.isolCnt}</p>
      <p id="lastItem">{arr.deathCnt}</p>
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
  margin-top: 20px;

  #lastItem {
    border-right: none;
  }

  p {
    border-radius: 7px;
    background: #fff;
  }
`;

const Title = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  gap: 30px;
  border-bottom: 1px solid #818181;
  display: table;
  table-layout: fixed;
  text-align: center;
  p {
    color: #818181;
    display: table-cell;
    line-height: 70px;
  }
`;

const Content = styled.div``;

const InfoList = styled.div`
  width: 100%;
  height: 50px;
  gap: 30px;
  display: table;
  table-layout: fixed;
  text-align: center;
  p {
    display: table-cell;
    line-height: 50px;
  }
`;
