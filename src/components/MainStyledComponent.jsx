import styled from "styled-components";

const MainStyle = styled.main`
  margin-top: calc(1vh + var(--header-height));
  /* Anpassung basierend auf der Höhe des Headers */
  background-color: lightgrey;

  figure.bird-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

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
      top: -20%;
      text-align: center;
      font-size: 3rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default MainStyle;
