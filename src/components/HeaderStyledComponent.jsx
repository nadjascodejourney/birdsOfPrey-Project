/* import styled from "styled-components";
import "../styles/fonts.css";

const HeaderStyledComponent = styled.header`
  font-family: "Jost", sans-serif;
  background-color: white;
  background: rgb(238, 174, 202);
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
  display: flex;
  align-items: center;
  padding: 10px 15px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1;
`;

export default HeaderStyledComponent;
 */

import styled from "styled-components";
import "../styles/fonts.css";

const HeaderStyledComponent = styled.header`
  font-family: "Jost", sans-serif;
  background-color: rgba(255, 255, 255, 0.1); /* Dunkle Hintergrundfarbe */
  backdrop-filter: blur(10px); /* Verschmutzungseffekt */
  border-radius: 20px; /* Optionaler Rand für ein moderneres Aussehen */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* Verschwommene Shadow */
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin: 3px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  backface-visibility: hidden; /* Verhindert, dass Inhalte hinter dem Header sichtbar werden */
`;

export default HeaderStyledComponent;
