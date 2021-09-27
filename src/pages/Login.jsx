import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import styled from 'styled-components'
import axios from "axios";

const PF = "http://localhost:5000/vineyards/products"

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching } = useContext(Context)
    console.log(emailRef)
    console.log(passwordRef)
    console.log(dispatch)

    const handleSubmit = async e => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE' })
        }
    }
    return (
        <BackImage>
            <Container>
                <Infos>
                    <Title>member login</Title>
                    <Desc>In order to proceed you need to login. If you are not a member you need to sign up by clicking the link on the left.</Desc>
                    <Span>log in</Span>
                </Infos>
                <Form onSubmit={handleSubmit}>
                    <Label className="success error">*email</Label>
                    <Input
                        type="email"
                        placeholder="e.g. example@gmail.com"
                        required
                        ref={emailRef} />
                    <Label className="success error">*password</Label>
                    <Input type="password" placeholder="Enter your password..." required ref={passwordRef} />
                    <Button type="submit" disabled={isFetching}>log in</Button>
                </Form>
                <LinksForActions>
                    <Link style={links} to="/forgotPassword" >Forgot your username or password? </Link>
                    <Link style={links} to="/registration" >Sign up for an account</Link>
                </LinksForActions>
            </Container>
        </BackImage>
    )
}

const BackImage = styled.div`
    background-image: url("https://dob3qj4mreqzz.cloudfront.net/lines.png");
`

const Container = styled.div`
    width: 70%;
    max-width: 100%;
    margin: 0 auto;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 100px;
    margin-top: 100px;
`

const Infos = styled.div``

const Title = styled.h1`
    color: var(--color-title);
    font-size: 45px;
    font-weight: 500;
    font-family: 'Requiem';
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 20px;
`

const Desc = styled.p`
    color: var(--color-para);
    font-size: 14px;
    font-weight: 500;
    font-family: 'Brandon Grotesque';
    width: 80%;
    margin: 0 auto;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 20px;
    line-height: 20px;
`

const Span = styled.span`
    color: var(--color-title);
    font-size: 25px;
    font-weight: 100;
    font-family: 'Brandon Grotesque';
    letter-spacing: 2px;
    text-transform: uppercase;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    margin-top: 50px;
`

const Label = styled.label`
    margin-bottom: 20px;
    color: var(--color-title);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    opacity: 0.7;
    text-transform: uppercase;
`

const Input = styled.input`
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 3px solid var(--color-gray);
    margin-bottom: 10px;
    padding-left: 10px;
    font-family: 'Brandon Grotesque';
    font-size: 17px;
    letter-spacing: 1.2px;
`

const Button = styled.button`
    width: 40%;
    margin-top: 30px;
    border: 3px solid var(--color-brown);
    background-color: #fff;
    border-radius: 25px;
    padding: 12px;
    font-size: 15px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-para);
    align-self: center;

    &:hover{
        cursor: pointer;
        color: #fff;
        background-color: var(--color-brown);
    }
`

const LinksForActions = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

const links = {
    marginBottom: '10px',
    letterSpacing: "1px",
    color: "black",
    backgroundColor: "transparent"
}

export default Login
