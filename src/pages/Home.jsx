import styled from "styled-components";
import MainStyle from "../components/MainStyledComponent";
import jsonData from "../content.json";
import FetchBirds from "../components/FetchBirds";

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
      <div className="wrapper">
        <div className="titlebox">
          <h1 className="titles maintitle">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
        <figure className="bird-illus">
          {images.map((image, index) => (
            <div key={index} className="illu-box">
              <img className="illu" src={image.src} alt={image.alt} />
            </div>
          ))}
        </figure>
      </div>

      <h3>
        {mainText} <span>{highlightedText}</span>
      </h3>
      <h2 className="titles secondTitle">{secondaryTitle}</h2>

      <figure className="bird-card-grid">
        {menuImages.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
            <figcaption className="captions">{image.caption}</figcaption>
          </div>
        ))}
      </figure>

      {/* <FetchBirds /> */}
    </MainStyle>
  );
};

export default Home;
