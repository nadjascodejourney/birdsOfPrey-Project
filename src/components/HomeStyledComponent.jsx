import styled, { keyframes } from "styled-components";
import "../styles/fonts.css";

/* Animation for the illustrated birds */
const flyBird = keyframes`
0% {
  transform: translate(100vw, 0) rotate(0deg);
}

100% {
  transform: translate(20vw, -100vh) rotate(0deg); /* Anpassung der Distanz und Rotation */
}
`;
const flyBird2 = keyframes`
0% {
  transform: translate(100vw, 10vh) rotate(0deg);
}
100% {
  transform: translate(15vw, -100vh) rotate(-20deg); /* Anpassung der Distanz und Rotation */
}
`;
const flyBird3 = keyframes`
0% {
  transform: translate(100vw, -5vh) rotate(0deg);
}
100% {
  transform: translate(10vw, -100vh) rotate(5deg); /* Anpassung der Distanz und Rotation */
}
`;

/* Styling for the whole main part of the Homepage */
const HomeStyle = styled.main` 
  font-family: "Jost", sans-serif;
  font-weight: 300;

  margin-top: calc(1vh + var(--header-height));
  /* responsive based on header height  */

  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper {
    height: 70vh;
    width: 90vw;
  }
  
  .titlebox {
    text-align: center;
    margin-top: 10vh;
  }

  .titles {
    font-family: "Nothing You Could Do", cursive;
    font-weight: 400;
    color: orange;
  }

  /* "Birds of Prey" */
  h1.maintitle {
    white-space: nowrap; // prevent line break on smaller screens
    margin: 0;
    font-size: 32px;
  }
  /* "From Hawks to Owls" */
  h2.subtitle {
    font-family: "Jost", sans-serif;
    font-weight: 200;
    margin: 0;
  }

  /* "Discover beautiful birds" */
  h2.secondTitle {
/*     font-size: clamp(3rem, 3rem + 1vw, 6rem);*/ 
font-size: 32px;
  text-align: center;
  }

  h3 {
    font-family: "Jost", sans-serif;
    font-weight: 200;
/*     font-size: clamp(1rem, 1rem + 1vw, 3rem); */    
    text-align: center;
    margin-top: 0;
  }

  /* ANIMATED BIRD-ILLU */

  figure.bird-illu {
    position: relative; // to position the birds below absolutely
    overflow: visible; // to see the bird flying out of the figureelement
    margin: 0; 
  }
  .illu:nth-child(1) {
    position: absolute;
      width: 25vw;
      z-index: 1;
      animation: ${flyBird} 4s ease-in-out forwards; /* Animation für das erste Bild */
    }
    .illu:nth-child(2) {
      position: absolute;
        width: 25vw;
        z-index: 1;
        animation: ${flyBird2} 6s ease-in-out forwards; /* Animation für das erste Bild */
      }
      .illu:nth-child(3) {
        position: absolute;
          width: 25vw;
          z-index: 1;
          animation: ${flyBird3} 8s ease-in-out forwards; /* Animation für das erste Bild */
        }
  }

  /* BIRD-CARD-GRID */

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
      filter: brightness(
        0.5
      ); // filter for better readability of captions, on hover full brightness
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

export default HomeStyle;
