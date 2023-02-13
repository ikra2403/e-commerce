import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const i1=require('../components/assets/images/corousel_12.png');
const Container = styled.div`
  width: 98.7vw;
  height: 82vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${i1})
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Label1 = styled.div`
  margin: 12px;
  font-size: 14px;
  ${'' /* text-decoration: underline; */}
  
`;

const Label = styled.div`
  margin: 12px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          <Label1>
          Already registered?
          </Label1>
          <Label>
          <NavLink to='/Login'>LOGIN HERE</NavLink>
          </Label>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;