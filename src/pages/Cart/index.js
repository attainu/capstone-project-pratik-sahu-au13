import { useState, useEffect, useContext } from 'react';
import "./cart.scss";
import Cartitem from "../../components/Cart_Item";
import { StateContext } from '../../stateHandling/contexts/StateContext';

function Cart() {

    const {
        state: { cartItems },
    } = useContext(StateContext);

    return (
        <div className="cart">
            <div className="cart__section">
                <h2>Please Review Your Cart and Proceed to Buy</h2>
                < div className="cart__section_item" >
                    {
                        cartItems.map((item) => {
                            return <Cartitem item={item} key={item._id}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
