import { ArrowBackSharp } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import '../index.css'

const Product = () => {
    return (
        <ProductWrapper>
            <Link to="/shop">
                <ArrowBackSharp className="arrow" />
            </Link>
            <Container>
                <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/06/CV-morrito-pinot-WP_705x214.png" />
                <Wrapper>
                    <Date>2019</Date>
                    <Title>Morrito Pinot Noir</Title>
                    <Price>100€</Price>
                    <Actions>
                        <Select>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                        </Select>
                        <Button className="actionButton" value="PURCHASE"></Button>
                        <Button className="actionButton" value="DELETE"></Button>
                        <Button className="actionButton" value="EDIT"></Button>
                    </Actions>
                    <SmallTitle>Aromas</SmallTitle>
                    <SmallDesc>Classically varietal. Intensely aromatic. Baked granny smith apple, citrus crème brulee</SmallDesc>
                    <SmallTitle>Flavors</SmallTitle>
                    <SmallDesc>Opulent oak toast notes. Defined acidity, hints of vanilla and butterscotch</SmallDesc>
                    <SmallTitle>Finish</SmallTitle>
                    <SmallDesc>Focused and lengthy</SmallDesc>
                    <SmallTitle>Alcohol %</SmallTitle>
                    <SmallDesc>13.8</SmallDesc>
                    <SmallTitle>Size</SmallTitle>
                    <SmallDesc>750 ml</SmallDesc>
                </Wrapper>
            </Container>
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
    background-image: url("https://dob3qj4mreqzz.cloudfront.net/lines.png");
    margin-top: 50px;
    margin-bottom: 100px;
`

const Container = styled.div`
    width: 70%;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Image = styled.img`
    width: 200px;
    margin-right: 200px;
    transition: all 0.4s ease;

    &:hover {
        cursor: pointer;
        transform: translateY(-10px);
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Date = styled.span`
    color: var(--color-date);
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
    font-family: 'sans-serif';
`

const Title = styled.h1`
    margin-top: 20px;
    margin-bottom: 20px;
    color: var(--color-title);
    font-size: 60px;
    letter-spacing: 2px;
    font-family: 'Requiem';
    font-weight: 100;
    text-transform: uppercase;
`

const Price = styled.span`
    color: var(--color-title);
    font-weight: 400;
    opacity: 0.9;
    letter-spacing: 1px;
    font-size: 35px;
    font-family: 'sans-serif';
`

const Actions = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin: 20px 0 30px 0;
`

const Select = styled.select`
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 12px;
`

const Option = styled.option`
    font-family: 'sans-serif';
`

const SmallTitle = styled.h3`
    color: var(--color-title);
    font-weight: 500;
    opacity: 0.8;
    letter-spacing: 1px;
    margin-bottom: 10px;
`

const SmallDesc = styled.span`
    display: block;
    color: var(--color-title);
    opacity: 0.7;
    margin-bottom: 10px;
`

export default Product
