import styled from "styled-components"


const SectionOne = () => {
    return (
        <Container>
            <Wrapper>
                <ImageOne src="https://chamisalvineyards.com/wp-content/uploads/2018/04/fav57.png" />
                <ImageTwo src="https://chamisalvineyards.com/wp-content/uploads/2018/04/fav52-2.png" />
                <Info>
                    <ParaOne>THE PEOPLE BEHIND THE WINE</ParaOne>
                    <Title>OUR TEAM</Title>
                    <ParaTwo>While some winemakers find their domain is limited mostly to the cellar, 
                        Fin is committed to spending just as much time in the Chamisal vineyards. 
                        Estate Director Andrea de Palo is dedicated to making sure that guests have a 
                        memorable experience at Chamisal. </ParaTwo>
                </Info>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 120px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    position: relative;
`

const ImageOne = styled.img`
    width: 25%;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
    margin-right: 10px;
    position: relative;
    top: -60px;
`

const ImageTwo = styled.img`
    width: 25%;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
`

const Info = styled.div`
    flex: 1;
    text-align: left;
    margin-left: 120px;
`

const ParaOne = styled.h2`
    color: var(--color-darkGreen);
    letter-spacing: 2px;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;

    &::after {
    content: url('https://chamisalvineyards.com/wp-content/uploads/2018/04/lines.png');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    top: 0;
}
`

const Title = styled.div`
    color: #404040;
    font-size: 55px;
    font-weight: 100;
    font-family: "Requiem",serif;
    letter-spacing: 3px;
    opacity: 0.9;
    margin-bottom: 20px;
`

const ParaTwo = styled.div`
    width: 70%;
    line-height: 1.7;
    font-size: 15px;
    color: var(--color-para);
    opacity: 0.8;
    margin-bottom: 40px;
`

export default SectionOne
