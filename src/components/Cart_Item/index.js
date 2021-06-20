
import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import { coursePayment } from '../../stateHandling/utils/serverRequests';
function Cartitem({item}) {
 
    const { _id, courseName, thumbnail, price, authorName: { firstName, lastName }} = item;
    console.log(process.env.REACT_APP_KEY);
    const paymentToken = async(token) => {
        try {
            const body = {
                token, ...item
            };
            const paymentStatus = coursePayment(_id, body)

            if (paymentStatus.status === 200) {
                console.log("Payment Status: ", paymentStatus);
            } else {
                console.log("Error occured during payment");
            };
        } catch (error) {
            console.log("Error occured during payment");
        };
    };

    const removeFromCart = () => {
        
    }

    return (
        <div className="cart__item_container">
            <div className="course_details">
                <div className="thumbnail">
                    <img src={thumbnail} alt={courseName}/>
                </div>
                <div className="course_title">
                    <h4>{courseName}</h4>
                    <p>{`${firstName} ${lastName}`}</p>
                </div>
            </div>
            <div className="price"><i class='bx bx-dollar'></i><p>{price}</p></div>
            <div className="action_buttons">
                <div className="buy_btn">
                    <StripeCheckout
                        stripeKey={process.env.REACT_APP_KEY}
                        token={paymentToken}
                        name="Cloudversity Payments"
                        amount={item.price * 100}
                        shippingAddress
                        billingAddress
                    >
                        <button type="button">Buy @  $ {price}</button>
                    </StripeCheckout>
                    
                </div>
                <div className="remove_from_cart" onClick={removeFromCart}>
                    <i class='bx bx-trash' ></i>
                </div>
            </div>
        </div>
    )
}

export default Cartitem;
