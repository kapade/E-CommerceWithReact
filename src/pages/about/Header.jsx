import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <Image />
            <HeaderWrapper>
            <Para1>PIONEERING EDNA VALLEY</Para1>
            <Title>About Us</Title>
            <Para2>Chamisal made history in 1973 as the first winery in Edna Valley to plant grapevines. 
                Just 10 minutes from downtown San Luis Obispo, our tasting room offers sustainably produced 
                wines painted with gorgeous natural scenery.</Para2>
            </HeaderWrapper>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 100px;
    position: relative;
`
// When I change it to styled.img a thin border appears around the pic.
const Image = styled.div`
    transform: matrix(1, 0, 0, 1, 0, 93);
    background-image: url("https://chamisalvineyards.com/wp-content/uploads/2018/04/fav72-1.png ");
    background-position: center bottom;
    width: 100%;
    height: 100vh;
    background-size: 1580px;
    background-repeat: no-repeat;
    /* border-style: none; */
`

const HeaderWrapper = styled.div`
    position: absolute;
    top: 100px;
    left: 100px;
`

const Para1 = styled.p`
    color: var(--color-darkGreen);
    letter-spacing: 2px;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
`

const Title = styled.h1`
    color: #404040;
    font-size: 55px;
    font-weight: 100;
    font-family: "Requiem",serif;
    letter-spacing: 3px;
    opacity: 0.9;
    text-transform: uppercase;
`

const Para2 = styled.p`
    color: var(--color-darkGreen);
    letter-spacing: 1px;
    font-size: 0.85rem;
    line-height: 1.5;   
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: 500;
    width: 50%
`


export default Header