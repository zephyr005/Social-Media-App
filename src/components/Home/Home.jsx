import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";
import "./Home.css";
import { findData } from "../../redux/action/actionFetch";
import Card from "../Card/Card";

const Home = () => {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  console.log(data);
  console.log(value);
  console.log(searched);

  useEffect(() => {
    dispatch(findData());
  }, []);

  useEffect(() => {
    if (value !== "") {
      let filteredData = data.filter((ele) => ele.title.includes(value));
      setSearched(filteredData);
    } else {
      return;
    }
  }, [value]);

  function read() {
    if (value === "" && data) {
      let ans = data.map((ele) => (
        <Card id={ele.id} title={ele.title} body={ele.body} />
      ));
      return ans;
    } else if (value !== "") {
      let ansValue = searched.map((ele) => (
        <Card id={ele.id} title={ele.title} body={ele.body} />
      ));
      return ansValue;
    }
  }

  return (
    <div className="Home">
      <Search setValue={setValue} />

      <div className="datas">
        {
          read()
          // searched ? searched.map((ele) => <Card id={ele.id} title={ele.title} body={ele.body} />)
          //  data && data.map((ele) => <Card id={ele.id} title={ele.title} body={ele.body} />)
        }
      </div>
    </div>
  );
};

export default Home;
