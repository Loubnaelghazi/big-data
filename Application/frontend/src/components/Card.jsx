import React from "react";

export default function Card({ img, title, description, onclick, button }) {
  return (
    
    <div className="card w-96">
      <figure className="h-60">
        <img src={img} alt="img!" className="w-full h-full object-cover" />
      </figure>
      <div className="card-body flex flex-row justify-between">
        <div>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary px-6" onClick={onclick}>
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}
