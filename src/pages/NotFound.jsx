import styled from "styled-components";
import MainStyle from "../components/MainStyledComponent";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <MainStyle>
      <h1>NotFound</h1>
      <Link to="/">Home</Link>
    </MainStyle>
  );
};

export default NotFound;
