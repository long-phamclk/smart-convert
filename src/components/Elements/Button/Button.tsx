import styled from "styled-components";

const Button = () => {
  return (
    <Wrapper>
      <StyledButton>Login</StyledButton>
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
`;
