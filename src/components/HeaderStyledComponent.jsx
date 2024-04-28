import styled from "styled-components";
import "../styles/fonts.css";

const HeaderStyledComponent = styled.header`
  font-family: "Jost", sans-serif;
  background-color: white;
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
