import styled from "styled-components";
import "../styles/fonts.css";

const MainStyle = styled.main`
  font-family: "Jost", sans-serif;
  font-weight: 300;

  margin-top: calc(1vh + var(--header-height));
  /* Anpassung basierend auf der Höhe des Headers */
  background-color: lightgrey;

  figure.bird-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(16px + 4vw); // responsive gap

    div {
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

    figcaption.captions {
      position: relative;
      top: -30%;
      text-align: center;
      // responsive font-size
      font-size: calc(
        1.5rem + 2vw
      ); // fluid typography, no breakpoints, minimal
      font-weight: 200;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default MainStyle;
