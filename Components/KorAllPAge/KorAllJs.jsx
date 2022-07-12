import { useState, useEffect } from "react";
import axios from "axios";
import KorAllItem from "./KorAllItem";
import KorAllArea from "./KorAllArea";

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

  const props = {
    covidData,
  };
  return (
    <>
      <KorAllItem {...props} />
    </>
  );
}
