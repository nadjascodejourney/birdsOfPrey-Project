import styled from "styled-components";

const HomeSection = styled.main`
  margin-top: calc(1vh + var(--header-height));
  /* Anpassung basierend auf der Höhe des Headers */
`;

const Home = () => {
  return (
    <HomeSection>
      <h1>Home</h1>
    </HomeSection>
  );
};

export default Home;
