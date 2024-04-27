import React from "react";
import "./Card.css";

export default function CardPokemon({ name, types, image }) {
  return (
    <div className="card">
      <h3 className="name">{name}</h3>
      <img src={image} alt={name} className="image" />
      <ul className="types">
        {types.map((type, index) => (
          <li key={index} className="type">
                {typeof type === 'string' ? 
      type.charAt(0).toUpperCase() + type.slice(1) :
      (type.name.charAt(0).toUpperCase() + type.name.slice(1))
    }
          </li>
        ))}
      </ul>
    </div>
  );
}