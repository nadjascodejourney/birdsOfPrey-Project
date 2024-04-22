import styled from "styled-components";
import MainStyle from "../components/MainStyledComponent";
import jsonData from "../home-content.json";

const Home = () => {
  const { title, subtitle, images, mainText, highlightedText, secondaryTitle } =
    jsonData.homepage;

  return (
    <MainStyle>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <figure>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </figure>
      <h3>
        {mainText} <span>{highlightedText}</span>
      </h3>
      <h2>{secondaryTitle}</h2>
      <figure></figure>
    </MainStyle>
  );
};

export default Home;
