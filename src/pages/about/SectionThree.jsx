import styled from "styled-components"

const SectionThree = () => {
    return (
        <Container>
            <ImageOne src="https://chamisalvineyards.com/wp-content/uploads/2018/06/edna_valley_1.png" />
            <Info>
                <ParaOne>A PREMIER REGION</ParaOne>
                <Title>edna valley</Title>
                <ParaTwo>Because of its east-west orientation so close to the Pacific Coast, the Edna Valley is one of
                    the coolest appellations in California. its long, temperate growing season gives the grapes plenty
                    of time to ripen on the vine — typically several weeks longer than warmer growing regions. 
                    This extended hangtime allows cool-climate grapes like Chardonnay to delevop deep, rich flavors 
                    and superior fruit intensity.</ParaTwo>
            </Info>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 100px;
    position: relative;
`

const ImageOne = styled.img`
    width: 45%;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
    margin-left: 10px;
`

const Info = styled.div`
    flex: 1;
    text-align: left;
    margin-left: 100px;
`

const ParaOne = styled.p`
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

const ParaTwo = styled.p`
    width: 60%;
    line-height: 1.7;
    font-size: 15px;
    color: var(--color-para);
    opacity: 0.8;
    margin-bottom: 40px;
`


export default SectionThree