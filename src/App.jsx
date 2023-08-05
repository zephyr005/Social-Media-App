import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import { useSelector } from "react-redux";

const App = () => {
  const data = useSelector((state) => state.clickedData);
  console.log(data);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path={`/item/${data.id}`} element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
