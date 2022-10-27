import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./CheckOut.css";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();
  const { id, title, description, img, price } = course;

  return (
    <>
    <h2 className="text-center text-4xl text-red-500 font-bold mt-3">CHECKOUT PAGE</h2>
      <div className="checkout-main container mx-auto my-12">
        <div className="delivery-man">
          <div className="delivery-title">
            <h2 className="text-2xl font-semibold">1. Delivery Options</h2>
          </div>
          <div className="delivery-options">
            <div className="ship">
              <button>Ship</button>
              <button>Pick Up</button>
            </div>
            <div>
              <label className="ship-radio" htmlFor="home">
                <input type="radio" name="ship" id="" checked /> Home/Office
              </label>
              <label className="ship-radio" htmlFor="home">
                <input type="radio" name="ship" id="" /> APO/FPO
              </label>
            </div>

            <div>
              <form>
                <input
                  className="input input-bordered w-full my-2 text-white"
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user?.displayName}
                  placeholder="Full Name"
                />
                <input
                  className="input input-bordered w-full my-2 text-white"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your shipping address"
                />
                <input
                  className="input input-bordered w-full my-2 text-white"
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                />
                <input
                  className="input input-bordered w-full my-2 text-white"
                  type="text"
                  name="phone"
                  id="phone"
                  defaultValue={user?.phone}
                  placeholder="Phone Number"
                />
              </form>
              <input
                className="save-btn"
                type="submit"
                value="Save & Continue"
              />
            </div>
          </div>
        </div>

        {/* In your Bag */}
        <div className="checkout-calculation">
          <div className="calculation-title">
            <h4>IN YOUR BAG</h4>
          </div>
          <div className="calculation-items">
            <h2 className="text-xl font-semibold my-3">Selected Items</h2>
            <div className="selected-items flex">
              <img src={img} alt="" className="w-36" />
              <div className="ml-4">
                <h2 className="text-xl text-red-500">{title}</h2>
                <h2>Product ID: {id}</h2>
                <p>{description.slice(0, 40)}...</p>
                <p>
                  Quantity: <span>01</span>
                </p>
                <p>
                  Price: <span className="text-[#fb4a00]">${price}</span>
                </p>
              </div>
            </div>
            <hr className="my-5 block" />

            <div>
              <p className="flex justify-between my-1">
                <span className="font-semibold">Subtotal</span>
                <span>
                  $<span>{price}</span>
                </span>
              </p>
              <p className="flex justify-between my-1">
                <span className="font-semibold">Estimated Shipping</span>
                <span>
                  $<span>{(price * 0.05).toFixed(2)}</span>
                </span>
              </p>
              <p className="flex justify-between my-1">
                <span className="font-semibold">Estimated Tax</span>
                <span>
                  $<span>{(price * 0.1).toFixed(2)}</span>
                </span>
              </p>
              <h4 className="flex justify-between my-1">
                <span className="font-bold">Total</span>
                <span className="text-[#fb4a00] font-extrabold">
                  $<span>{(price + price * 0.15).toFixed(2)}</span>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
