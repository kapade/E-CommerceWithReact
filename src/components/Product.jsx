import { ArrowBackSharp, Height, ShoppingBasketOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import '../index.css'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useFetch from '../tools/useEffect'
import NotFound from './NotFound'
import Modal from 'react-modal';
import ShoppingCart from './ShoppingCart'
import ShoppingModal from './ShoppingModal'
import Context from '../context/Context'

const Product = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const location = useLocation()
    const id = location.state?.wineId
    const path = location.pathname.split("/")[2]
    const history = useHistory()
    const PF = "http://localhost:5000/vineyards/products"
    console.log(path);

    const [wineData, setWineData] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios.get(PF)
            console.log(res.data.data.data)
            setWineData(res.data.data.data)
        } catch (error) {
            console.log('Wrong data')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const product = wineData.find(p => p._id == id)


    /*  */

    const handleDelete = () => {
        console.log('inside');
        axios.delete(`${PF}/${path}`)
            .then(res => {
                console.log(res);
            })
        history.push('/shop')
    }

    return (
        <ProductWrapper>
            <Link to="/shop">
                <ArrowBackSharp className="arrow" />
            </Link>
            <Basket onClick={setModalIsOpenToTrue}><ShoppingBasketOutlined /></Basket>
            {product ? (
                <Container key={product._id}>
                    <Image src={product.photo} />
                    <Wrapper>
                        <Date>{product.year}</Date>
                        <Title>{product.title}</Title>
                        <Price>{product.price}</Price>
                        <Actions>
                            <Select>
                                {/* fix stock */}
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
                            {/* <Button onClick={handleDelete} className="actionButton" value={value} ></Button> */}
                            <ButtonDelete onClick={handleDelete}>DELETE</ButtonDelete>
                            <Link
                                key={product._id}
                                className="link"
                                to={{
                                    pathname: `/edit/${product._id}`,
                                    state: { wineId: product._id }
                                }}>
                                <Button className="actionButton" value="EDIT"></Button>
                            </Link>
                        </Actions>
                        <SmallTitle>Aromas</SmallTitle>
                        <SmallDesc>{product.aroma}</SmallDesc>
                        <SmallTitle>Flavors</SmallTitle>
                        <SmallDesc>{product.flavor}</SmallDesc>
                        <SmallTitle>Finish</SmallTitle>
                        <SmallDesc>{product.finish}</SmallDesc>
                        <SmallTitle>Alcohol</SmallTitle>
                        <SmallDesc>{product.alcohol} %</SmallDesc>
                        <SmallTitle>Size</SmallTitle>
                        <SmallDesc>750 ml</SmallDesc>
                        <ModalContainer>
                            <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                <ButtonClose onClick={setModalIsOpenToFalse}>x</ButtonClose>
                                <ShoppingModal />
                            </Modal>
                        </ModalContainer>
                    </Wrapper>
                </Container>
            ) : (
                <ProductNotFound>
                    <NotFound />
                </ProductNotFound>
            )}
        </ProductWrapper>
    )
}

const Basket = styled.span`
    position: absolute;
    top: 80px;
    left: 80px;
    cursor: pointer;
`

const customStyles = {
    content: {
        top: '15%',
        left: '40px',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
    }
}

const ModalContainer = styled.div`
    background-color: green;
    position: relative;
`

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

const ProductNotFound = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonClose = styled.button`
    position: absolute;
    top: 5px;
    left: 10px;
    font-weight: 400;
    font-size: 20px;
    border: none;
    cursor: pointer;
    background-color: #fff;
`

const ButtonDelete = styled.button`
    color: var(--color-para);
    border-radius: 30px;
    padding-right: 20px;
    padding-left: 20px;
    height: 35px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.7px;
    border: 3px solid var(--color-brown);
    background-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
    background-color: var(--color-brown);
    color: #fff;
    transition: all 0.2s ease-in-out;
    }
`

export default Product