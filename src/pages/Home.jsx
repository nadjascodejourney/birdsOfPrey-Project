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

  // hover effect bird-cards
  const [ishovered, setIshovered] = useState(false);

  return (
    <MainStyle>
      <h1 className="titles maintitle">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <figure className="bird-illus">
        {images.map((image, index) => (
          <div key={index} className="illu-box">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </figure>

      <h3>
        {mainText} <span>{highlightedText}</span>
      </h3>
      <h2 className="titles secondTitle">{secondaryTitle}</h2>

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
