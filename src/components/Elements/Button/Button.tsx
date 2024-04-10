import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Wrapper>
      <Link to="https://lodgementconverter.store/login?fbclid=IwAR0lPQHz3MrFuhho4l3uQ0q6N2DwrspNVM9aDzbYzS2vUAoOOVZTZ0qzSwE_aem_AUcuCPD1fz1QZRJLMJaa5X7VRDrUUlMuOaxz01y9OgZUJCzq14ePy-E446ZaPdl2Zc7Gq9oyFixYss5Kc_FsPAtr">
        <StyledButton>Login</StyledButton>
      </Link>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div`
  margin-right: 30px;
`;

const StyledButton = styled.button`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  background-color: #ffffff;
  color: #112d4e;
  border-radius: 5px;
  width: 130px;
  height: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    max-width: 130px;
  }
`;
