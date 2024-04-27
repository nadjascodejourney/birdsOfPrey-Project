import styled from "styled-components";
import MainStyle from "../components/MainStyledComponent";
import jsonData from "../content.json";

const Home = () => {
  const {
    title,
    subtitle,
    images,
    mainText,
    highlightedText,
    secondaryTitle,
    menuImages,
  } = jsonData.homepage;

  return (
    <MainStyle>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <figure className="bird-illus">
        {images.map((image, index) => (
          <img src={image.src} alt={image.alt} style={{ width: "25%" }} />

          // map the illus for landingpage
        ))}
      </figure>
      <h3>
        {mainText} <span>{highlightedText}</span>
      </h3>
      <h2>{secondaryTitle}</h2>

      <figure className="bird-card-grid">
        {menuImages.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
            <figcaption className="captions">{image.caption}</figcaption>
          </div> // map birds for homepage
        ))}
      </figure>
    </MainStyle>
  );
};

export default Home;
