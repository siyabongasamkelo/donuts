import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import {
  ExclamationTriangle,
  Facebook,
  Github,
  Instagram,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import sprinkles from "../images/sprinkles.png";
import sprinkles2 from "../images/sprinkles2.png";
import sprinkles3 from "../images/sprinkles3.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { LoginSchema } from "../validations/UserValidation";
import { Spinner } from "flowbite-react";
import { getLoggedUser } from "../Features/Users";
import { getLoggedStore } from "../Features/StoreReducer";
import { useDispatch } from "react-redux";

export const LoginPagestyled = styled.div`
  width: 100vw;
  @media (max-width: 480px) {
    background-color: #ec8f5e;
    height: auto;
  }
`;
export const Contatiner = styled.div`
  width: 95%;
  height: 90%;
  border-radius: 20px;
  background-color: #ec8f5e;
  @media only screen and (max-width: 600px) {
    width: 90%;
    overflow-x: visible;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 2rem;
    overflow-x: visible;
  }
`;

export const MainDiv = styled.div`
  width: 95%;
  height: 95%;
`;

export const HeroDiv = styled.div`
  height: 90%;
  width: 100%;
`;

export const LeftDiv = styled.div`
  width: 5%;
  height: 100%;
  img {
    filter: drop-shadow(30px 5px 5px #666666);
  }
  .icons {
    svg {
      filter: drop-shadow(10px 2px 2px #666666);
      transform: scale(150%);
      margin-top: 20px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        fill: #ec8f5e;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 5%;
    .icons {
      position: absolute;
      top: 34rem;
      svg {
        transform: scale(150%);
        margin-top: 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          fill: #ec8f5e;
        }
      }
    }
    img {
      transform: scale(600%);
      margin-left: 5rem;
      margin-top: -18rem;
    }
  }
  @media only screen and (min-width: 768px) {
    height: auto;
    width: 5%;
    .icons {
      position: absolute;
      top: 34rem;
      svg {
        transform: scale(150%);
        margin-top: 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          fill: #ec8f5e;
        }
      }
    }
    img {
      transform: scale(400%);
      margin-left: 8rem;
      margin-top: -18rem;
    }
  }

  @media only screen and (min-width: 992px) {
    .icons {
      margin-top: 7rem;
      svg {
        transform: scale(150%);
        margin-top: 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          fill: #f3b664;
        }
      }
    }
    img {
      margin-top: -18rem;
      margin-left: 14rem;
    }
  }
`;

export const Middle = styled.div`
  .donut {
    img {
      filter: drop-shadow(30px 5px 5px #666666);
    }
  }
  .text {
    h1 {
      filter: drop-shadow(10px 2px 2px #666666);
    }
  }
  .action {
    button {
      filter: drop-shadow(30px 5px 5px #666666);
    }
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    overflow-x: visible;
    .text {
      margin-top: 5rem;
      h1 {
        font-size: 2rem;
        text-align: center;
        letter-spacing: 1rem;
        font-weight: 700;
      }
    }
    .donut {
      margin-top: 7.5rem;
      img {
        height: 16rem;
      }
    }
    .action {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
    height: 90%;
    .text {
      h1 {
        font-size: 3rem;
        letter-spacing: 2rem;
        text-align: center;
        margin-top: 5rem;
        font-weight: 500;
      }
    }
    .donut {
      img {
        height: 350px;
        margin-top: 5rem;
      }
    }
    .action {
      margin-top: 5rem;
      margin-bottom: 3rem;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 90%;
    height: 90%;
    .text {
      h1 {
        font-size: 3rem;
        letter-spacing: 2rem;
        text-align: center;
        margin-top: 5rem;
        font-weight: 700;
      }
    }
    .donut {
      img {
        height: 350px;
        margin-top: 5rem;
      }
    }
    .action {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 90%;
    height: 100%;
    .text {
      h1 {
        font-size: 4rem;
        letter-spacing: 1.5rem;
        text-align: center;
        margin-top: 5rem;
        font-size: 600;
      }
    }
    .donut {
      img {
        height: 28rem;
        margin-top: 3rem;
      }
    }
    .action {
      margin-top: 50px;
    }
  }
`;

export const RightDiv = styled.div`
  width: 5%;
  height: 100%;
  img {
    filter: drop-shadow(30px 5px 5px #666666);
  }
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 5%;
    img {
      position: absolute;
      height: 5rem;
      right: 1rem;
      top: 14rem;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 5%;
    img {
      position: absolute;
      height: 7rem;
      right: 4rem;
      top: 15rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    .sprinkles {
      height: 15rem;
      position: absolute;
      top: 40rem;
    }
  }
`;

export const TheCardStyled = styled.div`
  height: 250px;
  width: 200px;
  margin-left: 30px;
  border-radius: 10px;
  img {
    height: 80%;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  button {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    color: #e90064;
    background-color: transparent;
    border: 1px solid #e90064;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #e90064;
      color: white;
    }
  }
`;

export const MyButton = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 30px;
  background-color: #f3b664;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    color: white;
  }
`;

// this is the css for the form
export const FormStyled = styled.div`
  margin-top: 10%;
  margin-bottom: 20%;
  width: 500px;
  form {
    width: 60%;
    margin-bottom: 55%;
  }
`;

export const RegForm = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsErorr] = useState(false);
  const dispatch = useDispatch();

  let Url = "";

  if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
    Url = "http://localhost:3001";
  }
  if (process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
    Url = "https://donuts-4c1f.onrender.com";
  }
  const BaseUrl = Url;

  const showToastMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const succToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      setLoading(true);
      setIsErorr(false);
      const { email } = formik.values;
      const { password } = formik.values;

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      axios
        .post(`${BaseUrl}/login/user`, formData)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          succToastMessage("you're now logged in");

          if (res.data.auther === "user") {
            dispatch(
              getLoggedUser({
                jwt: res.data.token,
                user: res.data.result,
              })
            );
          }
          if (res.data.auther === "store") {
            dispatch(
              getLoggedStore({
                jwt: res.data.token,
                store: res.data.result,
              })
            );
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setIsErorr(true);
          err?.response?.data?.error?.map((error) => {
            return showToastMessage(error);
          });
          showToastMessage(err?.response?.data);
        });
    },
  });

  return (
    <FormStyled className=" d-flex justify-content-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control rounded-3 "
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-danger">
            {formik.errors.email}
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control rounded-3 "
            id="password"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-danger">
            {formik.errors.password}
          </div>
        </div>

        <MyButton type="submit">
          {loading ? (
            <Spinner />
          ) : isError ? (
            <div
              className=" d-flex justify-content-center align-items-center"
              onClick={formik.handleSubmit}
            >
              <ExclamationTriangle />
              <label style={{ marginLeft: "10px" }}>
                Error occured try again
              </label>
            </div>
          ) : (
            "Create User"
          )}
        </MyButton>
      </form>
    </FormStyled>
  );
};

export const Login = () => {
  return (
    <LoginPagestyled className=" d-flex justify-content-center align-items-center overflow-x-hidden">
      <Contatiner className=" d-flex justify-content-center align-items-center overflow-x-hidden">
        <MainDiv>
          <ToastContainer />
          <Header />
          <HeroDiv className=" d-flex">
            <LeftDiv
              // className=" d-flex flex-column justify-content-center align-items-center"
              className=" d-none d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-center"
            >
              <div className="icons">
                <Facebook />
                <Whatsapp />
                <Twitter />
                <Instagram />
                <Github />
              </div>
              <img src={sprinkles2} alt="sprinkles" />
            </LeftDiv>
            <Middle className=" d-flex flex-column  align-items-center  ">
              <div className="text">
                <h1>Login</h1>
              </div>
              <div className="form">
                <RegForm />
              </div>
            </Middle>
            <RightDiv className=" d-none d-lg-block ">
              <img src={sprinkles} alt="sprinkles" />
              <img
                className="sprinkles d-none d-md-block"
                src={sprinkles3}
                alt="sprinkles"
              />
            </RightDiv>
          </HeroDiv>
        </MainDiv>
      </Contatiner>
    </LoginPagestyled>
  );
};
