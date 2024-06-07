import jsonData from "../content.json";

const HomeLandingComponent = () => {
  const { title, subtitle, images } = jsonData.homepage;

  return (
    <div className="wrapper">
      <div className="titlebox">
        <h1 className="titles maintitle">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
      <figure className="bird-illu">
        {images.map((image, index) => (
          <img key={index} className="illu" src={image.src} alt={image.alt} />
        ))}
      </figure>
    </div>
  );
};

export default HomeLandingComponent;
