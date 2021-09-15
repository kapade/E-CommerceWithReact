import styled from 'styled-components'
import Form from '../components/RegistrationForm'

const Registration = () => {
    return (
        <BackImage>
            <Container>
                <Infos>
                    <Title>create a new account</Title>
                    <Desc>Fill in the form below to create a new account.</Desc>
                </Infos>
                <PersonInfo>personal information</PersonInfo>
                <Form />
            </Container>
        </BackImage>
    )
}

const BackImage = styled.div`
    background-image: url("https://dob3qj4mreqzz.cloudfront.net/lines.png");
    margin-top: 100px;
    margin-bottom: 150px;
`

const Container = styled.div`
    width: 70%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

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
    width: 50%;
    margin: 0 auto;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 20px;
    line-height: 20px;
`

const PersonInfo = styled.span`
    color: var(--color-title);
    font-size: 25px;
    font-weight: 100;
    font-family: 'Brandon Grotesque';
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0 ,0, 0.4);
    margin-top: 50px;
    padding: 10px;
`

export default Registration
