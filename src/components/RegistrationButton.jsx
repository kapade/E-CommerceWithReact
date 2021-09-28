import styled from 'styled-components'

const RegistrationButton = ({ value }) => {
    return (
        <Container>
            <Button type="submit">{value}</Button>
        </Container>
    )
}

const Container = styled.div``

const Button = styled.button`
    width: 50%;
    margin-top: 50px;
    border: 3px solid var(--color-brown);
    background-color: #fff;
    border-radius: 25px;
    padding: 12px;
    font-size: 15px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-para);
    position: absolute;
    left: 0; 
    right: 0; 
    bottom: 0;
    margin-left: auto; 
    margin-right: auto; 

    &:hover{
        cursor: pointer;
        color: #fff;
        background-color: var(--color-brown);
    }
`

export default RegistrationButton
