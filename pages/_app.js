import "../styles/globals.css";
import MainVeiw from "../Components/MainPage/MainVeiw";
import InfoVeiw from "../Components/InformationPage/InfoVeiw";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainVeiw />
      <InfoVeiw />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
