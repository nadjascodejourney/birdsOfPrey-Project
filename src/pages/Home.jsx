import styled from "styled-components";
import MainStyle from "../components/MainStyledComponent";
import bird1 from "../images/bird-illu/Bird1.png";
import bird2 from "../images/bird-illu/Bird2.png";
import bird3 from "../images/bird-illu/Bird3.png";

const Home = () => {
  return (
    <MainStyle>
      <h1>Birds of Prey</h1>
      <h2>From Hawks to Owls</h2>
      <figure>
        <img src={bird3} alt="Drawing of a flying Bird" />
        <img src={bird2} alt="Drawing of a flying Bird" />
        <img src={bird1} alt="Drawing of a flying Bird" />
      </figure>
      <h3>
        Experience the Power and Grace of beautiful Birds of Prey and learn more
        about the <span>Eyes of the Sky</span>
      </h3>
      <h2>Discover beautiful Birds</h2>
      <figure></figure>
    </MainStyle>
  );
};

export default Home;
