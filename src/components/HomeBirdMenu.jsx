import jsonData from "../content.json";

const HomeBirdMenu = () => {
  const { mainText, highlightedText, secondaryTitle, menuImages } =
    jsonData.homepage;

  return (
    <div className="main-menu-birds">
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
    </div>
  );
};

export default HomeBirdMenu;
