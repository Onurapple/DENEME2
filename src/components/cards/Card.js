import React from "react";
import "./Card.css";

function Card({ veri }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {veri.map((item) => {
          const { title, desc, image } = item;
          return (
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="card shadow p-3 mb-5 bg-body rounded myStyle"
            >
              <h5 className="card-title my-4 fs-1 cardHeader">{title}</h5>
              <img
                src={image}
                className="card-img-top"
                alt="resim"
                id="resim"
              />
              <div id="yazi" className="card-body display">
                <p className="card-text">{desc}</p>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
