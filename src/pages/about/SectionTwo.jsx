import styled from "styled-components"

const SectionTwo = () => {
    return (
        <Container>
            <WrapperOne>
                <ParaOne>our style is about allowing each varietal to shine.</ParaOne>
                <ParaTwo>FINTAN DU FRESNE, GENERAL MANAGER & WINEMAKER</ParaTwo>
            </WrapperOne>

            <WrapperTwo>
                <ParaThree>
                RESPECTFUL STEWARDSHIP OF THE LAND
                </ParaThree>
                <Title>
                OUR PROPERTY
                </Title>
                <ParaFour>
                As farmers and stewards of the land, we're constantly striving to find its highest and best use.
                Our unique soil types and proximity to the ocean have convinced us that it's Chardonnay. At Chamisal,
                we're commited to growing truly world-class Chardonnay and showcasing each vineyard's unique characteristics.
                Chamisal Vineyards has been SIP (Sustainability in Practice) certified in the vineyards since 2010 and we
                were the the second-ever winery to be SIP-certified in 2016, though the winery has always gone above and
                beyond the requirements to maintain the health of our vineyards and improve biodiversity in the area.
                Sustainable practices at Chamisal Vineyards include the use of compost, cover crops, minimal organic fertilizers,
                a rooftop solar array and the introduction of drought-tolerant rootstock and moisture-sensors to mitigate
                irrigation needs, as well as a water-recapture system that reclaims 100 percent of winery process water
                for irrigation needs.
                </ParaFour>
            </WrapperTwo>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-top: 150px;
`

const WrapperOne = styled.div``

const ParaOne = styled.p`
    color: var(--color-title);
    font-size: 40px;
    font-weight: 500;
    font-family: "Requiem",serif;
    letter-spacing: 3px;
    opacity: 0.9;
    margin-bottom: 20px;
    text-transform: uppercase;
`

const ParaTwo = styled.p`
    color: var(--color-darkGreen);
    letter-spacing: 2px;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;
`

const WrapperTwo = styled.div`
   margin-top:80px;
`

const ParaThree = styled.p`
    color: var(--color-darkGreen);
    letter-spacing: 2px;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;
`

const Title = styled.h1`
    color: var(--color-title);
    font-size: 55px;
    font-weight: 500;
    font-family: "Requiem",serif;
    letter-spacing: 3px;
    opacity: 0.9;
    margin-bottom: 20px;
`

const ParaFour = styled.p`
    width: 33%;
    margin: 0 auto;
    line-height: 1.7;
    font-size: 15px;
    color: var(--color-para);
    opacity: 0.8;
    margin-bottom: 40px;
`


export default SectionTwo
