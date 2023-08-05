import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import arrow from "../../assets/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Heart from "../../assets/heart.svg";
import "./Details.css";
import { Link } from "react-router-dom";

const Details = () => {
  const [clickedData, setClickedData] = useState([]);
  const [readMore, setReadMore] = useState(true);
  const clickdata = useSelector((state) => state.clickedData);
  const data = useSelector((state) => state.data.data);

  console.log(clickdata);

  useEffect(() => {
    setClickedData(clickdata);
  }, [clickdata]);

  function update() {
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  }

  function sinkTitle(title) {
    if (!title) {
      return;
    }
    if (title.length > 20) {
      return title.substring(0, 20);
    } else {
      return title;
    }
  }

  return (
    <div className="Details">
      <div className="title">
        <Link to="/">
          <div className="arrow-container">
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
        <h1>Post Number {clickedData.id}</h1>
      </div>
      <div className="display">
        <div className="img">
          <img
            img
            src={`https://picsum.photos/200?random=${clickedData.id}`}
            alt={`Image ${clickedData.id}`}
          />
          <div className="like-class">
            <div className="photo-title">
              <h3>{sinkTitle(clickdata.title)}</h3>
            </div>
            <div className="like-logo">
              <FontAwesomeIcon
                icon={faShareNodes}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
              <img src={Heart} alt="heart" className="heart" />
            </div>
          </div>
        </div>
        <div className="display-details">
          <div className="display-btn">
            <button
              onClick={update}
              className={readMore ? "btn-active" : "btn"}
            >
              Detail
            </button>
            <button
              onClick={update}
              className={readMore ? "btn" : "btn-active"}
            >
              User Info
            </button>
          </div>
          <div className="display-data">
            {readMore ? (
              <p>{clickedData.body}</p>
            ) : (
              <p>Post Was Posted By {clickedData.id}.</p>
            )}
          </div>
        </div>
      </div>
      <div className="more-post">
        <h1>More Posts</h1>
      </div>
      <div className="datas">
        {data &&
          data.map((ele) => (
            <Card id={ele.id} title={ele.title} body={ele.body} />
          ))}
      </div>
    </div>
  );
};

export default Details;
