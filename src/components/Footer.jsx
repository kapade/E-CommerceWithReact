import { Facebook, Instagram } from '@material-ui/icons'
import styled from 'styled-components'
import "../index.css"

const Footer = () => {
    return (
        <Container>
            <Contact>
                <Title>CONTACT</Title>
                <Address>Chamisal Vineyard 7525 Orcutt Road San Luis Obispo, CA 93401</Address>
                <Number>210-24-63-127</Number>
                <Email>info@chamisalvineyards.com</Email>
            </Contact>
            <Logo>
                <Name>CHAMISAL</Name>
                <Span>VINEYARDS</Span>
                <Social>
                    <Insta><Instagram /></Insta>
                    <Face><Facebook /></Face>
                </Social>
            </Logo>
            <Links className="footerLinks">
                <Title>RESOURCES</Title>
                <Link>Store Locator</Link>
                <Link>Trade & Media</Link>
                <Link>Shipping</Link>
                <Link>Privacy Policy</Link>
                <Link>Terms</Link>
                <Link>Community</Link>
                <Link>Sustainability</Link>
                <Link>Careers</Link>
            </Links>
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 70px;
`

const Contact = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Title = styled.p`
    color: var(--color-brown);
    font-weight: 500;
    letter-spacing: 2.5px;
    font-size: 20px;
    margin-bottom: 10px;
`

const Address = styled.span`
    color: #337ab7;
    opacity: 0.3;
    font-weight: 400;
    letter-spacing: 1.2px;
    font-size: 13px;
    margin-bottom: 10px;

    &:hover{
        color: gray;
        opacity: 0.3;
    }
`

const Number = styled.span`
    color: #337ab7;
    opacity: 0.3;
    font-weight: 400;
    letter-spacing: 1.2px;
    font-size: 13px;
    margin-bottom: 10px;

    &:hover{
        color: gray;
        opacity: 0.3;
    }
`

const Email = styled.span`
    color: #337ab7;
    opacity: 0.3;
    font-weight: 400;
    letter-spacing: 1.2px;
    font-size: 13px;
    margin-bottom: 10px;

    &:hover{
        color: gray;
        opacity: 0.3;
    }
`

const Logo = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -20px;
`

const Name = styled.h2`
    color: #000;
    opacity: 0.8;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 3px;
`

const Span = styled.span`
    color: #000;
    opacity: 0.6;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 5px;
    margin-bottom: 50px;
`

const Social = styled.span`
    display: flex;
    justify-content: space-between;
    width: 130px;
    /* outline: 1px solid red; */
`

const Insta = styled.span`
    border-radius: 50%;
    border: 3px solid var( --color-brown);
    padding: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
`

const Face = styled.span`
    border-radius: 50%;
    border: 3px solid var( --color-brown);
    padding: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
`

const Links = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: justify;
`

const Link = styled.a`
    color: #337ab7;
    opacity: 0.3;
    font-weight: 400;
    letter-spacing: 1.2px;
    font-size: 13px;
    margin-bottom: 10px;

    &:hover{
        color: gray;
        opacity: 0.3;
        cursor: pointer;
    }
`

export default Footer
