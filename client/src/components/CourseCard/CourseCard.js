import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartFill } from "../../assets/icons/heartFill.svg";
import {
  addToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
} from "../../stateHandling/utils/serverRequests";
import images from "../../assets/images";
import "./CourseCard.scss";

export function CourseCard({
  course,
  user,
  dispatch,
  isItCartItem,
  isItWishlistItem,
  isItEnrolledItem,
}) {
  const {
    _id,
    courseName,
    thumbnail,
    authorName: { firstName, lastName },
    courseDuration,
    description,
    enrolledStudents,
    price,
    rating,
    level,
  } = course;

  const { star } = images;

  const [fav, setFav] = useState(isItWishlistItem);
  const [cart, setCart] = useState(isItCartItem);
  const history = useHistory();

  let ratingColor = "#000";
  if (rating >= 3) {
    ratingColor = "#10B981";
  } else {
    ratingColor = "#F59E0B";
  }

  useEffect(() => {
    if (isItWishlistItem) {
      setFav(true);
    } else {
      setFav(false);
    }
  }, [isItWishlistItem, setFav]);

  useEffect(() => {
    if (isItCartItem) {
      setCart(true);
    } else {
      setCart(false);
    }
  }, [isItCartItem, setCart]);

  const handleFavorites = () => {
    if (user) {
      if (!isItWishlistItem) {
        addToWishList(_id, user, dispatch);
        setFav(true);
      } else {
        removeFromWishList(_id, user, dispatch);
        setFav(false);
      }
    } else {
      history.push("/usertype");
    }
  };

  const handleCart = () => {
    if (user) {
      if (!isItCartItem) {
        addToCart(_id, user, dispatch);
        setCart(true);
      } else {
        removeFromCart(_id, user, dispatch);
        setCart(false);
      }
    } else {
      history.push("/usertype");
    }
  };

  return (
    <div className="course">
      <img className="course__img" src={thumbnail} alt="course-pic" />
      <div className="course__contents">
        <div className="course__contents-details">
          <p>{enrolledStudents.length} students</p>
          <p>{courseDuration ? courseDuration.toFixed(2) : "00"} min.</p>
        </div>
        <div className="course__contents-name">
          {courseName.length > 15
            ? courseName.substring(0, 15) + "..."
            : courseName}
        </div>
        <div className="course__contents-author">
          <p>
            by <span>{`${firstName} ${lastName}`}</span>
          </p>
          <h4 style={{ borderBottom: "1px solid #000" }}>${price}</h4>
        </div>
      </div>
      <div className="course__hover">
        <Link className="removeStyle" to={`/details/${_id}`}>
          <div className="course__hover-description">
            <div className="course__hover-description--header">
              {courseName}
            </div>
            <div className="course__hover-description--content">
              {description}
            </div>
            <div className="course__hover-description--content">
              <strong>{level}</strong>
            </div>
            <div
              style={{ backgroundColor: `${ratingColor}` }}
              className="course__hover-description--rating"
            >
              {rating ? rating : 0}
              <img src={star.src} alt={star.alt} />
            </div>
          </div>
        </Link>
        {user?.user.role === "student" ? (
          <div className="course__hover-btns">
            {!isItEnrolledItem ? (
              <button onClick={handleCart}>
                {cart ? "Remove from Cart" : "Add to Cart"}
              </button>
            ) : (
              <button
                style={{
                  color: "white",
                  fontWeight: "600",
                  backgroundColor: "limegreen",
                }}
              >
                Enrolled
              </button>
            )}
            {!isItEnrolledItem &&
              (fav ? (
                <HeartFill
                  onClick={handleFavorites}
                  className="course__hover-btns--icon"
                />
              ) : (
                <Heart
                  onClick={handleFavorites}
                  className="course__hover-btns--icon"
                />
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
