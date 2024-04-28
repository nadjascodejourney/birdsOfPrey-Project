import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled Components of the Navigation Component
const NavList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 2rem;

  li {
    margin-right: 2rem;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: none;
  }
  a:hover {
    color: orange;
  }

  /* responsive: */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    li {
      margin-right: 0;
      margin-bottom: 10px;
    }
`;

const Navigation = () => {
  const navItems = [
    { name: "Home", to: "/", id: 1 },
    { name: "About", to: "/about", id: 2 },
    { name: "Falconry", to: "/falconry", id: 3 },
    { name: "Events", to: "/events", id: 4 },
    { name: "Contact", to: "/contact", id: 5 },
  ];

  return (
    <nav>
      <NavList>
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
      </NavList>
    </nav>
  );
};

export default Navigation;
