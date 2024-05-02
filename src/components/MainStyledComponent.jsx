import styled, { keyframes } from "styled-components";
import "../styles/fonts.css";

const flyAnimation = keyframes`
  0% {
    transform: translateY(0); /* Startposition */
  }
  100% {
    transform: translateY(200px); /* Endposition */
  }
`;

const MainStyle = styled.main`

  font-family: "Jost", sans-serif;
  font-weight: 300;

  margin-top: calc(1vh + var(--header-height));
  /* responsive based on header height  */

  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper {
    display: grid;
    grid-template-areas:
    "box"
  }
  .titlebox {
    text-align: right;
    grid-area: box;
    align-self: top;
    
  }
  .titles {
    font-family: "Nothing You Could Do", cursive;
    font-weight: 400;
    color: orange;
  }

  h1.maintitle {
    font-size: clamp(4rem, 4rem + 3vw, 9rem);
    white-space: nowrap; // prevent line break on smaller screens
  }
  h2.subtitle {
    font-family: "Jost", sans-serif;
    font-weight: 200;
    font-size: clamp(1.5rem, 1.5rem + 1vw, 3rem);
  }

  h2.secondTitle {
    font-size: clamp(3rem, 3rem + 1vw, 6rem);
  }

  h3 {
    font-family: "Jost", sans-serif;
    font-weight: 200;
    font-size: clamp(1rem, 1rem + 1vw, 3rem);
  }

  figure.bird-illus {
    grid-area: box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    width: 50vw;
    margin: auto;
    
   }

   .illu-box {
    overflow: visible;
    animation: ${flyAnimation} 5s ease-in-out infinite alternate; /* Animation hinzufügen */

   }
   

    .illu-box:nth-child(1) {
      grid-column: 1;
      grid-row: 1;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .illu-box:nth-child(2) {
      grid-column: 2;
      grid-row: 2;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: rotate(4.503deg);
      }


    }

    .illu-box:nth-child(3) {
      grid-column: 1;
      grid-row: 2;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

  }

  figure.bird-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(16px + 4vw); // responsive gap

    div {
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    div:hover .captions {
      color: orange;
      
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      filter: brightness(0.5); // filter for better readability of captions, on hover full brightness
    }

    img:hover {
      filter: brightness(1);
      
    }

    figcaption.captions {
      position: relative;
      top: -30%;
      text-align: center;
      // responsive font-size
      font-size: calc(
        1.5rem + 2vw
      ); // fluid typography, no breakpoints, minimal
      font-weight: 300;
      color: white;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default MainStyle;
