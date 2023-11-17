import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
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
              <TextInput id="password" type="password" required />
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
              <MyButton>Log in to your account</MyButton>
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
