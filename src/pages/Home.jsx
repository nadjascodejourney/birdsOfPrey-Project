import HomeStyle from "../components/HomeStyledComponent";
import FetchBirds from "../components/FetchBirds";
import HomeLandingComponent from "../components/HomeLandingComponent";
import HomeBirdMenu from "../components/HomeBirdMenu";
import { RaptorsDataDisplay } from "../components/RaptorsDataDisplay";

const Home = () => {
  return (
    <HomeStyle>
      <HomeLandingComponent />
      <HomeBirdMenu />
      {/*       <FetchBirds />*/}
      <RaptorsDataDisplay />
    </HomeStyle>
  );
};

export default Home;
