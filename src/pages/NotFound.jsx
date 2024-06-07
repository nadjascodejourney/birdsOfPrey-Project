import styled from "styled-components";
import HomeStyle from "../components/HomeStyledComponent";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <HomeStyle>
      <h1>NotFound</h1>
      <Link to="/">Home</Link>
    </HomeStyle>
  );
};

export default NotFound;
