import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ImageModal from "./ImageModal";
const Container = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://demo.tech2edge.co/samples/data-sg")
      .then((response) => response.json())
      .then((data) => setData(data.characters))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1 className="text-left display-10">Character Of films</h1>
      <div className="container" id="table">
        <div className="row  " id="heading">
          <div className="col-3  d-flex justify-content-center align-items-center border border-dark">
            NAME
          </div>
          <div className="col-3  d-flex justify-content-center align-items-center border border-dark">
            AGE
          </div>
          <div className="col-3  d-flex justify-content-center align-items-center border border-dark">
            ROLE
          </div>
          <div className="col-3  d-flex justify-content-center align-items-center border border-dark">
            IMAGE
          </div>
        </div>
        {data.map((character ,id) => (
          <div className="row border  border-dark" id="info" key={id}>
            <div className="col-3 border  d-flex justify-content-center align-items-center  border-light">
              {character.name}
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center border border-light">
              {character.age}
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center border border-light">
              {character.profession}
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center border border-light">
              <ImageModal imageSrc="../../img/gaitonde.jpg" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Container;
