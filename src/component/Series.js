import React from "react";
import Card from "./Card";
const Series = ({ data }) => {
  const { series } = data;
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center">
        <h1 className="fw-bolder ">MOVIE LISTING APP</h1>
        <button className="btn">KNOW MORE</button>
      </div>
      <div className="container ">
        <h1 className="text-center mt-5 fs-1 fw-bolder  text-dark ">
          MOVIE LIST
        </h1>
        <div className="row ">
          {!series ? <div>loading</div> : <Card series={series} />}
        </div>
      </div>
    </>
  );
};

export default Series;
