import styled from "styled-components";
import send from "../../assets/send.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <Upper>
        <Para>Newsletter</Para>
        <Input type="text" placeholder="Your email"></Input>
        <IconWrapper>
          <img src={send} alt="" />
        </IconWrapper>
      </Upper>
      <Lower>
        <LinkWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/">Experience</StyledLink>
          <StyledLink to="/">News</StyledLink>
          <StyledLink to="/">About Us</StyledLink>
          <StyledLink to="/">Jobs</StyledLink>
          <StyledLink to="/">Contact</StyledLink>
        </LinkWrapper>
        <PWrapper>
          <P>© Copyright 2023 - SmartConvert</P>
        </PWrapper>
      </Lower>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: auto;
`;

const Upper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e4764;
  color: white;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
`;

const Para = styled.p`
  margin: 20px;
`;

const Input = styled.input`
  width: 445px;
  height: 72px;
  border-radius: 36px;
  font-size: 18px;
  font-weight: 400;
  padding: 30px;

  @media screen and (max-width: 768px) {
    width: 225px;
  }
`;

const IconWrapper = styled.div`
  margin-left: -70px;
  cursor: pointer;
`;

const Lower = styled.div`
  max-height: 120px;
  background-color: #112d4e;
  /* display: flex; */
  /* flex-wrap: wrap; */
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-family: Montserrat;
  font-size: 14px;
  color: white;
  padding: 30px;
  /* display: flex; */
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const PWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 20px; */
`;

const P = styled.p`
  color: white;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
`;
