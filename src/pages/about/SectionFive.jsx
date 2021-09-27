import styled from "styled-components"
import Button from '../../components/Button'

const SectionFive = () => {
    return (
        <Container>
            <Info>
                <Para>LET'S GET TOGETHER</Para>
                <Title>visit us</Title>
                <Button value="LEARN MORE"></Button>
            </Info>
            <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/06/mini-about-background.png" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    position: relative;
`

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
`

const Para = styled.p`
    color: var(--color-darkGreen);
    letter-spacing: 2px;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;
`

const Title = styled.h1`
    color: #404040;
    font-size: 55px;
    font-weight: 100;
    font-family: "Requiem",serif;
    letter-spacing: 3px;
    opacity: 0.9;
    margin-bottom: 20px;
    text-transform: uppercase;
`

const Image = styled.img`
    width: 100%;
    vertical-align: middle;
    max-width: 100%;
`


export default SectionFive