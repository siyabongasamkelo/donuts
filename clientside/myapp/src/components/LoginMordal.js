import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getLoggedUser } from "../Features/Users";
import { getLoggedStore } from "../Features/StoreReducer";
import { Spinner } from "flowbite-react";
import { ExclamationTriangle } from "react-bootstrap-icons";

export const MyButton = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 30px;
  background-color: #f3b664;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    color: white;
  }
`;

export const LoginMordal = ({ openModal, onCloseModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsErorr] = useState(false);

  const dispatch = useDispatch();

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

  let Url = "";
  if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
    Url = "http://localhost:3001";
  }
  if (process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
    Url = "https://donuts-4c1f.onrender.com";
  }
  const BaseUrl = Url;

  const loginUser = () => {
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
        onCloseModal();
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
  };

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <ToastContainer />
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="123"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <MyButton onClick={loginUser}>
                {loading ? (
                  <Spinner />
                ) : isError ? (
                  <div
                    className=" d-flex justify-content-center align-items-center"
                    onClick={loginUser}
                  >
                    <ExclamationTriangle />
                    <label style={{ marginLeft: "10px" }}>
                      Error occured try again
                    </label>
                  </div>
                ) : (
                  "Login"
                )}
              </MyButton>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <Link
                to="/register"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
