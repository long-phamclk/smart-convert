import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/smartconvert-icon.svg";
import Button from "../Elements/Button";

const Head = () => {
  return (
    <Nav>
      <LeftNav>
        <StyledLink to="/">
          <img src={logo} alt="Smart-Convert" />
        </StyledLink>
        <StyledLink to="/service">Service</StyledLink>
        <StyledLink to="/pricing">Pricing</StyledLink>
        <StyledLink to="/support">Support</StyledLink>
      </LeftNav>
      <ButtonBox>
        <Button />
      </ButtonBox>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
`;

const LeftNav = styled.div`
  display: flex;
`;

const ButtonBox = styled.div`
  margin-left: auto;
`;

const StyledLink = styled(Link)``;

export default Head;
