import React from "react";
import CustomButton from "../button/CustomButton";
import "./Card.css";
import { Book } from "../../../types/booksInterface";

const Card: React.FC<Book> = ({ author, cover, title, year, onRemove }) => {
  return (
    <div className="card">
      <img src={cover} alt={`Cover of ${title}`} className="card-image" />
      <div className="card-container">
        <h2 className="card-title">{title}</h2>
        <p className="card-author">Autor: {author?.name}</p>
        <p className="card-year">Año: {year}</p>
        <CustomButton onClick={onRemove} size="small">
          Eliminar libro
        </CustomButton>
      </div>
    </div>
  );
};

export default Card;
