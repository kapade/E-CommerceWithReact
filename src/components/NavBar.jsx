import {
  ShoppingBasket,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@material-ui/icons";
import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../index.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { CancelOutlined } from "@material-ui/icons";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { Button } from "@material-ui/core";
import { Lines } from "./Lines";
import { Facebook } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";

const useStyles = makeStyles({
  menuItem: {
    background: "#A36833",
  },
});

export default function NavBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const ShoppingCartOutlinedStyle = {
    cursor: "pointer",
    borderRadius: "50%",
    border: "2px solid #d4d0c3",
    color: "#d4d0c3",
    position: "absolute",
    left: "!important 0px",
    margin: "!important 10px",
    width: "!important 35px",
    height: "!important 30px"
  };
  const CancelOutlinedStyle = {
    cursor: "pointer",
    color: "#d4d0c3",
    position: "absolute",
    right: "0px",
    margin: "10px",
    width: "35px",
    height: "35px"
  };
  const SocialIconFb = {
    cursor: "pointer",
    color: "#d4d0c3",
    position: "absolute",
    right: "400px",
    bottom: "50px",
    margin: "10px",
    width: "35px",
    height: "35px"
  }
  const SocialIconInsta = {
    cursor: "pointer",
    color: "#d4d0c3",
    position: "absolute",
    right: "250px",
    bottom: "50px",
    margin: "10px",
    width: "35px",
    height: "35px"
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const shopFunc = () =>{
    window.location.href = "/shop"
  }
  const homeFunc = () => {
    window.location.href = "/"
  }
  return (
    
    <Container>
      <Wrapper>
        <Left>
          <ShoppingCartOutlined onClick={shopFunc}/>
        </Left>
        <Center>
          <Logo onClick={homeFunc}>CHAMISAL</Logo>
          <LogoSmall>VINEYARDS</LogoSmall>
        </Center>
        <Right>
          {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuOutlined onClick={toggleDrawer(anchor, true)} />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
             <List style={{position:"relative"}} >
               <Lines />
            <Button ><ShoppingCartOutlined onClick={shopFunc} style={ShoppingCartOutlinedStyle}  /></Button>
            <CancelOutlined style={CancelOutlinedStyle} onClick={homeFunc}/>
            <ListItem onClick={handleClose}>
              {" "}
              <a href="/">HOME</a>
            </ListItem>
            <ListItem onClick={handleClose}>
              <a href="/shop">SHOP</a>
            </ListItem>
            <ListItem onClick={handleClose}>
              <a href="/login">LOGIN</a>
            </ListItem>
            <ListItem onClick={handleClose}>
              <a href="/registration">REGISTRATION</a>
            </ListItem>
            <Facebook style = {SocialIconFb}></Facebook>
            <Instagram style = {SocialIconInsta} />
      </List>
      <Divider />
            {/* <Menu
            className="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <ShoppingCartOutlined style={ShoppingCartOutlinedStyle} onClick={shopFunc} />
            <CancelOutlined style={CancelOutlinedStyle} onClick={handleClose}/>
            <ListItem onClick={handleClose}>
              {" "}
              <a href="/">Home</a>
            </ListItem>
            <ListItem onClick={handleClose}>
              <a href="/shop">Shop</a>
            </ListItem>
            <ListItem onClick={handleClose}>
              <a href="/login">Login</a>
            </ListItem>
            <ListItem onClick={handleClose}>
              <a href="/registration">Registration</a>
            </ListItem>
          </Menu> */}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid black;
  padding: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Shop = styled.div``;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-family: "source_sans_proregular", sans-serif;
  color: #404040;
  font-weight: bold;
  letter-spacing: 0.2em;
  cursor: pointer;
`;
const LogoSmall = styled.h3`
  color: #808080;
  font-size: small;
  letter-spacing: 0.3em;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100%;
`;



