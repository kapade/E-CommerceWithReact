import Button from '../../components/Button'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Product from '../../components/Product'

const URL = "http://localhost:5000/vineyards/products"

const Wines = () => {

    const [wine, setWine] = useState([])
    console.log(wine)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get(URL)
        setWine(res.data.data.data)
    }

    return (
        <>
            {wine.map(wine => (
                <Container key={wine._id}>
                    <Link
                        className="link"
                        to={{
                            pathname: `/product/${wine._id}`,
                            state: { wineId: wine._id }
                        }}>
                        <Wrapper>
                            <Image src={wine.photo} alt="zad" />
                            <Title>{wine.title}</Title>
                            {/* <Info>{wine.info}</Info> */}
                            <Button value="LEARN MORE" />
                        </Wrapper>
                    </Link>
                </Container>
            ))}
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-transform: uppercase;
`

const Image = styled.img`
    width: 60%;

    transition: all 0.4s ease;

    &:hover {
        cursor: pointer;
        transform: translateY(-10px);
    }
`

const Title = styled.h2`
    margin-top: 40px;
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.8;
    font-family: 'Brandon Grotesque';
    word-wrap: break-word;
    font-weight: 600;
`

const Info = styled.h3`
    margin-top: 20px;
    font-family: 'Requiem';
    text-transform: capitalize;
    color: var(--color-brown);
    letter-spacing: 2px;
    font-weight: 100;
    margin-bottom: 20px;
`

export default Wines
