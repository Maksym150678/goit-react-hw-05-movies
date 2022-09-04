import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
  color: black;
  &:not(:last-child) {
    margin-right: 40px;
  }
  &.active {
    color: orange;
  }
`;

const StyledHeader = styled.header`
  padding: 15px;
  border-bottom: 2px solid black;
  background-color: #3e6469;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  & nav {
    display: flex;
    & a {
      font-size: 24px;
    }
  }
`;

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">movies</NavLinkStyled>
        </nav>
      </StyledHeader>
    </>
  );
};