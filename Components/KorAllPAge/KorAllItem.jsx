import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiUsers } from "react-icons/fi";

export default function () {
  const [covidData, setCovidData] = useState([]);
  const getData = () => {
    axios
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
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Content>
        <ItemList>
          <div>
            <h2>{covidData.length && covidData[0].totalCnt}</h2>
            <p id="">+{covidData.length && covidData[0].incDec}</p>
            <p>국내 확진자</p>
          </div>
          <FiUsers />
        </ItemList>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f3f5ff;
`;

const Content = styled.div`
  &:first-child {
    h2 {
      color: #ffb800;
    }
    & > div > p:first-child {
      width: auto;
      height: 10px;
      color: #fff;
      background: #ffb800;
    }
  }
`;

const ItemList = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 20px;
  background: #fff;

  h2 {
    margin: 0;
  }
`;
