import styled from "styled-components";
import yeist from "../images/yiest.png";
import cake from "../images/cake.png";
import potato from "../images/potato.png";
import donutholes from "../images/donutholes.png";
import beignet from "../images/beignet.png";
import jelly from "../images/jelly.png";
import boston from "../images/boston.png";
import { ItemCard } from "../components/ItemCard";
import { Sliders } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { CartModal } from "../components/CartModal";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems, clearItems } from "../Features/Items";
import { addToCart } from "../Features/Cart";

export const Cartstyled = styled.div`
  width: 100vw;
  overflow-x: hidden;
  margin-top: 2%;
`;
export const Container = styled.div`
  width: 85%;
  height: 95%;
  overflow-x: hidden;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Topdiv = styled.div`
  h1 {
    text-align: center;
    font-size: 38px;
    @media only screen and (max-width: 600px) {
      margin-top: 10%;
    }
    @media only screen and (min-width: 768px) {
      margin-top: 5%;
    }
  }
  margin-bottom: 3%;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
export const Carts = styled.div`
  width: 90%;
  margin-left: 5%;
  @media only screen and (min-width: 1200px) {
  }
`;

export const CartSstyled = styled.div`
  img {
    height: 80px;
    width: 80px;
  }
  div {
    p {
      text-align: center;
    }
  }
`;

export const Shop = styled.div`
  height: 80vh;
  width: 100%;
  height: auto;
  @media only screen and (max-width: 600px) {
    height: auto;
    margin-top: 30px;
    width: 90%;
  }
  @media only screen and (min-width: 768px) {
    height: auto;
  }
  @media only screen and (min-width: 992px) {
    height: auto;
  }
  @media only screen and (min-width: 1200px) {
    height: auto;
    margin-top: 3%;
  }
`;

export const MobileCart = styled.div`
  svg {
    transform: scale(130%);
  }
`;

const Cart = ({ pic, type }) => {
  return (
    <CartSstyled>
      <div>
        <img src={pic} alt="cartegoris" />
      </div>
      <div>
        <p>{type}</p>
      </div>
    </CartSstyled>
  );
};

export const Cartegories = () => {
  const theCart = useSelector((state) => state?.cart?.value);

  const [openModal, setOpenModal] = useState(false);
  const [items, setSetItmes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BaseUrl}/get/items`)
      .then((res) => {
        setSetItmes(res.data);
        dispatch(clearItems());
        dispatch(getAllItems(res.data));
        succToastMessage("data fetching successfully");
        setLoading(false);
      })
      .catch((err) => {
        showToastMessage("Could not load items");
        showToastMessage(err.message);
        console.log(err);
        setLoading(false);
      });
  }, []);

  const getItem = (id) => {
    navigate(`/item/${id}`);
  };

  const addingToCart = (item) => {
    let exist = false;
    for (let i = 0; i < theCart.length; i++) {
      if (item._id === theCart[i].id) {
        exist = true;
      }
    }
    if (exist) {
      showToastMessage("item already in cart");
    } else {
      dispatch(
        addToCart({
          item: {
            id: item._id,
            name: item.name,
            brand: item.brand,
            image: item.image,
            price: item.price,
            store: item.store,
            quantity: 1,
          },
        })
      );
      showToastMessage("item added to cart");
    }
  };

  console.log({ BaseUrl });

  return (
    <Cartstyled className=" d-flex justify-content-center">
      <CartModal
        openModal={openModal}
        onCloseModal={() => {
          setOpenModal(!openModal);
        }}
      />
      <Container>
        <ToastContainer />
        <Topdiv>
          <h1>Cartegories</h1>
        </Topdiv>
        <Carts className=" d-none d-lg-flex mt-4 d-flex justify-content-around">
          <Cart pic={yeist} type="all" />
          <Cart pic={cake} type="cake" />
          <Cart pic={potato} type="potato" />
          <Cart pic={donutholes} type="donut holes" />

          <Cart pic={jelly} type="jelly donut" />
          <Cart pic={beignet} type="beignet" />
          <Cart pic={boston} type="boston cream donut" />
        </Carts>

        <MobileCart className=" mt-4 d-flex d-lg-none">
          <Sliders
            onClick={() => {
              setOpenModal(!openModal);
            }}
          />
        </MobileCart>

        <Shop className=" d-flex flex-wrap ">
          {loading ? (
            <div
              style={{ height: "85vh", width: "100%" }}
              className=" d-flex justify-content-center align-items-center "
            >
              <Spinner />
            </div>
          ) : (
            items?.map((item, count) => {
              return (
                <ItemCard
                  name={item.name}
                  price={item.price}
                  key={count}
                  image={item.image}
                  clicked={() => {
                    getItem(item._id);
                  }}
                  addto={() => {
                    addingToCart(item);
                  }}
                />
              );
            })
          )}
        </Shop>
      </Container>
    </Cartstyled>
  );
};
