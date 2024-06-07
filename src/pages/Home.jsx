import HomeStyle from "../components/HomeStyledComponent";
import FetchBirds from "../components/FetchBirds";
import HomeLandingComponent from "../components/HomeLandingComponent";
import HomeBirdMenu from "../components/HomeBirdMenu";

const Home = () => {
  return (
    <HomeStyle>
      <HomeLandingComponent />
      <HomeBirdMenu />
      {/*   <FetchBirds /> */}
    </HomeStyle>
  );
};

export default Home;
