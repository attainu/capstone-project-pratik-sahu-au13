import { useState, useEffect, useContext } from 'react';
import "./wishlist.scss";
import Wishlistitem from "../../components/Wishlist_Item";
import { StateContext } from '../../stateHandling/contexts/StateContext';
import { enrollCourse, removeFromWishList } from '../../stateHandling/utils/serverRequests';
import { AuthContext } from '../../stateHandling/contexts/AuthContext';
function Wishlist() {
    const {
        dispatch, state: { wishListItems },
    } = useContext(StateContext);

    const { user } = useContext(AuthContext)

    const deleteFromWishlist = (id) => {
        console.log("Delete from wishlist function called")
        removeFromWishList(id, user, dispatch);
    };

    const enroll = (id) => {
        enrollCourse(id, user.user.token);
    }

    return (
        <div className="wishlist">
            <div className="wishlist__section">
                <h2>Wishlisted Courses</h2>
                < div className="wishlist__section_item" >
                    {
                        wishListItems.map((item) => {
                            return <Wishlistitem item={item} key={item._id} deleteFromWishlist={deleteFromWishlist} enroll={enroll} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
