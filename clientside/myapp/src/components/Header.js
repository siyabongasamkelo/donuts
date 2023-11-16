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
import sprinkles from "../images/sprinkles.png";
import sprinkles2 from "../images/sprinkles2.png";

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
      color: #e90064;
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
  @media (max-width: 480px) {
  }
`;

const Header = () => {
  const [closeIt, setCloseIt] = useState(true);
  const [display, setDisplay] = useState("block");

  return (
    <HeaderStyled className=" d-flex justify-content-between align-items-center">
      <div className="logo">
        <img src={donut} alt="donut logo" />
      </div>
      <NavStyled className=" d-none d-lg-block">
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
              <label>Login</label> <Person />
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
              <label>Cart</label> <Bag />
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
