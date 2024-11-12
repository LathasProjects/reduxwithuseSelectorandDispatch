import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddCart, ApiData } from "../redux/Action";
import { ThreeDots } from "react-loader-spinner";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.cart.itemsList);
  const cartItemsList = useSelector((state) => state.cart.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/products");
        dispatch(ApiData(res.data.products));
        setLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getAPIData();
  }, [dispatch]);

  useEffect(() => {
    const caleculateCartItemsTotalPrice = () => {
      const res =
        cartItemsList &&
        cartItemsList.reduce((acc, item) => {
          return acc + item.price;
        }, 0);
      return res;
    };
    const sum = caleculateCartItemsTotalPrice();
    setTotalPrice(sum > 0 ? sum.toFixed(2) : 0);
  }, [cartItemsList]);

  return (
    <div className="container">
      <h1 className="mainTitle">ShoppingCart</h1>
      <p className="TotalItems">{`Total Items : ${cartItemsList.length}`}</p>
      <p className="TotalPrice">{`Total Items : ${totalPrice}`}</p>
      {loading ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <ul className="ulList">
          {itemsList &&
            itemsList.map((item) => (
              <li className="liList" key={item.id}>
                <div className="item-image-container">
                  <img
                    src={item.images[0]}
                    alt="item-image"
                    className="item_image"
                  />
                </div>
                <div className="item-description-container">
                  <h2 className="image_title">{item.title}</h2>
                  <p className="image_decription">{item.description}</p>
                  <p className="image_price">$ {item.price}</p>
                  <button
                    type="button"
                    onClick={() => dispatch(AddCart(item.id))}
                    className="add_button"
                  >
                    AddCart
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default CartItem;
