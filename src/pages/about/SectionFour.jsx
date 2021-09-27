import styled from "styled-components"

const SectionFour = () => {
    return (
        <Container>
            <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/06/edna_valley_2.png" />
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

const Image = styled.img`
    position: relative; 
    width: 45%;
    vertical-align: center;
    height: 450px;
    max-width: 100%;
    top: -90px;
    left: 340px;
`

export default SectionFour