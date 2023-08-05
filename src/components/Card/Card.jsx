import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clickedIdData } from "../../redux/action/actionFetch";
import Dp from "../../assets/dp.jpg";
import ReadMore from "../../assets/ReadMore.svg";
import "./Card.css";

const Card = ({ id, title, body }) => {
  const dispatch = useDispatch();

  const getSliceDes = () => {
    if (body.length > 70) {
      return body.substring(0, 70) + ",";
    } else {
      return body;
    }
  };

  function update() {
    console.log({ id });
    dispatch(clickedIdData({ id, title, body }));
  }

  return (
    <Link to={`/item/${id}`} onClick={update}>
      <div key={id} className="Card">
        <img
          src={`https://picsum.photos/200?random=${id}`}
          alt={`Image ${id}`}
        />
        <h1>{title}</h1>
        <div className="container">
          <div className="left-container">
            <p>
              {getSliceDes()} <span className="more">Read more...</span>
            </p>
          </div>
          <div className="right-container">
            <img src={ReadMore} alt="read more" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
