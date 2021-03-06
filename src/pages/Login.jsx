import styled from "styled-components"
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
const Container = styled.div`
    width: 100%;
    height: 100%;
    
`;

const ContainerImage =styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.2),
    rgba(255, 255, 255, 0.2)), url("https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    margin: 15px auto;
    ${mobile({width: "80%"})}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    font-size: 14px;
    margin: 10px 0px;
    padding: 10px;
    ${mobile({margin: "12px 0px", border:"1px solid black", padding: "7px"})}
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 16px;
    text-decoration: underline;
    color: black;
    cursor: pointer;
    ${mobile({fontSize: "15px"})}
`;


const Login = () => {
    return (
        <Container>
            <ContainerImage>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
                    <Link><b>CREATE A NEW ACCOUNT</b></Link>
                </Form>
            </Wrapper>
            </ContainerImage>
        </Container>
    )
}

export default Login
