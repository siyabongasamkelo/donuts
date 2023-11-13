import donut from "../images/donut.png";
import { Link } from "react-router-dom";
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
} from "react-bootstrap-icons";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

export const HeaderStyled = styled.header`
  width: 100%;
  overflow-x: hidden;
  .logo {
    img {
      height: 60px;
      cursor: pointer;
    }
  }
  .icons {
    margin-right: 10px;
    svg {
      transform: scale(180%);
      margin-left: 30px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        fill: #e90064;
      }
    }
  }
  .menu {
    svg {
      transform: scale(200%);
    }
  }
  @media (max-width: 480px) {
    .icons {
      margin-left: -60px;
    }
  }
`;
export const NavStyled = styled.nav`
  a {
    padding-left: 30px;
    font-size: 16px;
    transition: 0.5s ease-in-out;
    &:hover {
      color: #e90064;
    }
  }
`;

export const MobileHeader = styled.div`
  height: 100vh;
  width: 98vw;
  background-color: white;
  position: absolute;
  z-index: 1;
  top: 0%;
  right: -5%;
  border-radius: 10px 0 0 10px;
  overflow-x: hidden;
  .logo2 {
    height: 20%;
    h3 {
      font-weight: 800;
      font-size: 22px;
      margin-top: 7%;
      letter-spacing: 8px;
    }
    img {
      height: 70%;
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
`;

const Header = () => {
  const [closeIt, setCloseIt] = useState(true);
  return (
    <HeaderStyled className=" d-flex justify-content-between align-items-center">
      <div className="logo">
        <img src={donut} alt="donut logo" />
      </div>
      <NavStyled className=" d-none d-md-block">
        <ul className=" d-flex">
          <li>
            <Link to="123">About</Link>
          </li>
          <li>
            <Link to="123">Services</Link>
          </li>
          <li>
            <Link to="123">Pricing</Link>
          </li>
          <li>
            <Link to="123">Contact</Link>
          </li>
        </ul>
      </NavStyled>
      <div className="icons d-flex">
        <Person />
        <Bag />
      </div>
      <div className="menu d-block d-md-none d-lg-none">
        <List
          onClick={() => {
            setCloseIt(false);
          }}
        />
      </div>

      <MobileHeader
        className="d-md-none d-lg-none"
        as={motion.div}
        initial={{ x: 400 }}
        animate={{ x: closeIt ? 400 : 0 }}
        transition={{ duration: 0.5 }}
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
                x: closeIt ? 100 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Link to="123">About</Link>
            </motion.li>
            <motion.li
              animate={{
                x: closeIt ? 100 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Link to="123">Services</Link>
            </motion.li>
            <motion.li
              animate={{
                x: closeIt ? 100 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Link to="123">Pricing</Link>
            </motion.li>
            <motion.li
              animate={{
                x: closeIt ? 100 : 0,
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
                x: closeIt ? 100 : 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <label>Login</label> <Person />
            </motion.li>
            <motion.li
              className=" d-flex justify-content-center align-items-center "
              animate={{
                x: closeIt ? 100 : 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <label>Cart</label> <Bag />
            </motion.li>
            <motion.li
              className=" d-flex justify-content-center align-items-center "
              animate={{
                x: closeIt ? 100 : 0,
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
      </MobileHeader>
    </HeaderStyled>
  );
};

export default Header;
