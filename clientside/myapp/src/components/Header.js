// "use client";
import { Navbar, Button } from "flowbite-react";
import donut from "../images/donut.png";
// import { Button } from "./Button";

const Header = () => {
  return (
    <Navbar fluid rounded className="bg-transparent">
      <Navbar.Brand href="/">
        <img
          src={donut}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          donuts
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button style={{ backgroundColor: "#e90064" }}>See All</Button>
        {/* <Button>Sell All</Button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
