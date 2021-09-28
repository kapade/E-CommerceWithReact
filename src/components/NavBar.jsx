import {
  ShoppingBasket,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../index.css";
import { useContext } from "react";
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
import { Context } from "../context/Context";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  menuItem: {
    background: "#A36833",
  },
});

export default function NavBar() {
  const { user, admin, dispatch } = useContext(Context)
  console.log(user?.firstName ?? "N/A")
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }
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
  const ToggleStyles = {
    cursor: "pointer",
    borderRadius: "50%",
    border: "2px solid #d4d0c3",
    color: "#d4d0c3",
    zIndex: "10",
    width: "35px",
    height: "35px",
    padding: "5px"
  };

  const SocialIcons = {
    cursor: "pointer",
    color: "#d4d0c3",
    opacity: "1",
    borderRadius: "50%",
    border: "2px solid #d4d0c3",
    width: "35px",
    height: "35px",
    zIndex: "10",
    padding: "5px",
    marginRight: "30px"
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
  const FbFunc = () => {
    window.location.href = "https://www.facebook.com/Chamisal.Vineyards"
  }
  const InstaFunc = () => {
    window.location.href = "https://www.instagram.com/chamisalvyd/"
  }
  const { user, dispatch } = useContext(Context)
  const history = useHistory()

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  const handleProfile = () => {
    return history.push('/profile')
  }
  return (
    
    <Container>
      <Wrapper>
        <Left>
          <Link to='/shop'>
            <ShoppingCartOutlined style={{ fontSize: '25px', color: '#000000' }} />
          </Link>
        </Left>
        <Center>
          <Link to='/'>
            <Logo>CHAMISAL</Logo>
            <LogoSmall>VINEYARDS</LogoSmall>
          </Link>
        </Center>
        <Right>
          {user ? (<span style={{ marginLeft: '10px' }}>HELLO
            <span onClick={handleProfile}>{user.firstName}</span>
          </span>)
            : (
              <Link to="/login">LOGIN</Link>
            )
          }
          <Link to='/' onClick={handleLogout}>{user && "LOGOUT"}</Link>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuOutlined onClick={toggleDrawer(anchor, true)} />
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <List style={{ position: "relative" }}>
                  <Lines />
                  <Toggle>
                    <Link onClick={toggleDrawer(anchor, false)} to='/shop'>
                      <Button><ShoppingCartOutlined style={ToggleStyles} /></Button>
                    </Link>
                    <CancelOutlined style={ToggleStyles} onClick={toggleDrawer(anchor, false)} />
                  </Toggle>
                  <ListItem className="listItems">
                    <Link onClick={toggleDrawer(anchor, false)} to="/">HOME</Link>
                  </ListItem>
                  <ListItem className="listItems">
                    <Link onClick={toggleDrawer(anchor, false)} to="/shop">SHOP</Link>
                  </ListItem>
                  <ListItem className="listItems">
                    <Link onClick={toggleDrawer(anchor, false)} to="/basket">BASKET</Link>
                  </ListItem>
                  <ListItem className="listItems">
                    <Link onClick={toggleDrawer(anchor, false)} to="/about">ABOUT</Link>
                  </ListItem>
                  {!user && (
                    <>
                      <ListItem className="listItems">
                        <Link onClick={toggleDrawer(anchor, false)} to="/registration">REGISTRATION</Link>
                      </ListItem>
                    </>
                  )}
                  {
                    user?.role === 'admin' && (
                      <>
                        <ListItem className="listItems">
                          <Link to="/add">ADD</Link>
                        </ListItem>
                        {/* <ListItem className="listItems">
                          <Link to="/edit">EDIT</Link>
                        </ListItem> */}
                      </>
                    )
                  }
                  <Social>
                    <Link to='https://www.facebook.com/Chamisal.Vineyards'>
                      <Facebook style={SocialIcons} />
                    </Link>
                    <Link to='https://www.instagram.com/chamisalvyd/'>
                      <Instagram style={SocialIcons} />
                    </Link>
                  </Social>
                </List>
              </SwipeableDrawer>
            </React.Fragment>
          ))
          }
        </Right>
      </Wrapper>
    </Container>
  );
}




const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`

const Left = styled.div`
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid black;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 2.5px solid black;
  padding: 5px;
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
  display:flex;
  align-items: center;
  justify-content: center; 
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
const Toggle = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin: 5px;
`;
const Social = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-top: 50px;
`;



const LogoSmall = styled.h3`
  color: #808080;
  font-size: small;
  letter-spacing: 0.3em;
`

const Right = styled.div`
`

const Toggle = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`

const Social = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`
