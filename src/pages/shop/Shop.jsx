import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import Wines from "./Wines";

const URL = "http://localhost:5000/vineyards/products"


const Shop = () => {
    const [wines, setWines] = useState([])
    const { search } = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(URL + search)
            setWines(res.data)
            console.log(res.data);
        }
        fetchPosts()
    }, [search])


    return (
        <Container>
            <Header />
            <Section />
            <Wines wines={wines} />
            <SectionTwo />
        </Container>
    )
}

const Container = styled.div``

export default Shop
