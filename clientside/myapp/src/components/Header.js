import donut from "../images/donut.png";
import {
  Person,
  Bag,
  List,
  Facebook,
  Twitter,
  Instagram,
  Whatsapp,
  Github,
  X,
  DoorClosed,
} from "react-bootstrap-icons";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import sprinkles from "../images/sprinkles.png";
import sprinkles2 from "../images/sprinkles2.png";
import { LoginMordal } from "./LoginMordal";
import { HashLink as Link } from "react-router-hash-link";
import { useSelector } from "react-redux";

import LogOutMordal from "../components/LogOutMordal";

export const HeaderStyled = styled.header`
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
    .logo {
      img {
        height: 3rem;
      }
    }
    .icons {
      margin-right: 20px;
      svg {
        transform: scale(160%);
        margin-left: 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          fill: #f3b664;
        }
      }
    }
    .menu {
      svg {
        transform: scale(180%);
      }
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 1rem;
    .logo {
      img {
        height: 3rem;
      }
    }
    .icons {
      margin-right: 20px;
      svg {
        transform: scale(160%);
        margin-left: 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          fill: #f3b664;
        }
      }
    }
    .menu {
      svg {
        transform: scale(180%);
      }
    }
  }
`;

export const NavStyled = styled.nav`
  a {
    padding-left: 30px;
    font-size: 16px;
    transition: 0.5s ease-in-out;
    &:hover {
      color: #f3b664;
    }
  }
`;

export const MobileHeader = styled.div`
  height: 100vh;
  background-color: white;
  position: absolute;
  z-index: 1;
  top: 0%;
  border-radius: 10px 0 0 10px;
  overflow-x: hidden;
  .logo2 {
    height: 20%;
    h3 {
      font-weight: 800;
      font-size: 22px;
      letter-spacing: 8px;
    }
    img {
      height: 70%;
      margin-top: 5%;
      filter: drop-shadow(30px 5px 5px #666666);
    }
  }
  .links {
    margin-top: 5%;
    ul {
      li {
        height: 50px;
        text-align: center;
        svg {
          margin-left: 10px;
          transform: scale(120%);
        }
      }
    }
  }
  .sprinkle {
    height: 50px;
    margin-left: 70%;
    filter: drop-shadow(30px 5px 5px #666666);
  }
  .sprinkle2 {
    height: 100px;
    filter: drop-shadow(30px 5px 5px #666666);
  }
`;

const Header = () => {
  const isLogged = useSelector((state) => state?.user?.value.isLogged);
  const [closeIt, setCloseIt] = useState(true);
  const [display, setDisplay] = useState("block");
  const [cartTotal, setCartTotal] = useState(0);

  const [logoutMordal, setLogoutMordal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const theCart = useSelector((state) => state.cart.value);

  useEffect(() => {
    let totalItem = 0;
    if (theCart.length !== 0) {
      for (let i = 0; i < theCart.length; i++) {
        totalItem = totalItem + theCart[i].quantity;
      }
      setCartTotal(totalItem);
    }
  }, [theCart, cartTotal]);

  return (
    <HeaderStyled className=" d-flex justify-content-between align-items-center">
      <div className="logo">
        <Link to="/">
          <img src={donut} alt="donut logo" />
        </Link>
      </div>
      <NavStyled className=" d-none d-lg-block">
        <ul className=" d-flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#shop">Shop</Link>
          </li>
          <li>
            <Link to="#review">Review</Link>
          </li>
          <li>
            <Link to="#timeline">Our Timeline</Link>
          </li>
        </ul>
      </NavStyled>
      <LogOutMordal
        openModal={logoutMordal}
        closeIt={() => {
          setLogoutMordal(false);
        }}
      />
      <div className="icons d-flex">
        {isLogged ? (
          <DoorClosed
            onClick={() => {
              setLogoutMordal(true);
            }}
          />
        ) : (
          <Person
            onClick={() => {
              setOpenModal(!openModal);
            }}
          />
        )}
        <Link to="/cart">
          <div className=" d-flex align-items-center">
            <Bag />
            {cartTotal > 0 ? (
              <p
                className=" d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  marginLeft: "10px",
                  marginTop: "-20px",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
              >
                {cartTotal}
              </p>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>

      <div className="menu d-block d-lg-none">
        <List
          onClick={() => {
            if (closeIt) {
              setDisplay("none");
            } else {
              setDisplay("block");
            }
            setCloseIt(false);
          }}
        />
      </div>

      <LoginMordal
        openModal={openModal}
        onCloseModal={() => {
          setOpenModal(false);
        }}
      />

      <MobileHeader
        className="d-lg-none"
        as={motion.div}
        animate={{
          x: -35,
          width: closeIt ? 0 : 400,
        }}
        transition={{ duration: 0.5 }}
        dis={display}
      >
        <div className="close d-flex justify-content-end">
          <X
            style={{ transform: "scale(350%)", margin: "30px" }}
            onClick={() => {
              setCloseIt(true);
            }}
          />
        </div>
        <div className="logo2 d-flex flex-column align-items-center">
          <h3>Siya Donut</h3>
          <img src={donut} alt="donut logo" />
        </div>
        <div className="links">
          <ul>
            <motion.li
              animate={{
                x: closeIt ? -100 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Link to="123">About</Link>
            </motion.li>
            <motion.li
              animate={{
                x: closeIt ? -100 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Link to="123">Services</Link>
            </motion.li>
            <motion.li
              animate={{
                x: closeIt ? -100 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Link to="123">Pricing</Link>
            </motion.li>
            <motion.li
              animate={{
                x: closeIt ? -100 : 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <Link to="123">Contact</Link>
            </motion.li>
            <motion.li
              className=" d-flex justify-content-center align-items-center "
              animate={{
                x: closeIt ? -100 : 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <label
                onClick={() => {
                  setLogoutMordal(true);
                }}
              >
                {isLogged ? "Log out" : "Log in"}
              </label>
              {isLogged ? (
                <DoorClosed
                  onClick={() => {
                    setLogoutMordal(true);
                  }}
                />
              ) : (
                <Person
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                />
              )}
            </motion.li>
            <motion.li
              className=" d-flex justify-content-center align-items-center "
              animate={{
                x: closeIt ? -100 : 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <label>Cart</label>{" "}
              <div className=" d-flex align-items-center">
                <Bag />
                {cartTotal > 0 ? (
                  <p
                    className=" d-flex justify-content-center align-items-center"
                    style={{
                      color: "white",
                      marginLeft: "10px",
                      marginTop: "-20px",
                      height: "30px",
                      width: "30px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                    }}
                  >
                    {cartTotal}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </motion.li>
            <motion.li
              className=" d-flex justify-content-center align-items-center "
              animate={{
                x: closeIt ? -100 : 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <Facebook />
              <Twitter />
              <Instagram />
              <Whatsapp />
              <Github />
            </motion.li>
          </ul>
        </div>
        <img className="sprinkle" src={sprinkles} alt="sprinkles" />
        <img className="sprinkle2" src={sprinkles2} alt="sprinkles" />
      </MobileHeader>
    </HeaderStyled>
  );
};

export default Header;
