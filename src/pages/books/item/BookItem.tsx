import React, { FC } from "react";
import { Book } from "../../../types";
import CustomButton from "../../../components/common/button/CustomButton";

interface Props {
  book: Book;
  toggleFavorite: (book: Book) => void;
  isFavorite: boolean;
}

export const BookItem: FC<Props> = ({ book, toggleFavorite, isFavorite }) => {
  return (
    <article className={`book-item ${isFavorite ? "book-item-favorite" : ""}`}>
      <img src={book.cover} alt={`Cover of ${book.title}`} />

      <div className="book-details">
        <h2>{book.title}</h2>

        <p>Número de páginas: {book.pages}</p>

        <p>Género: {book.genre}</p>

        <p>Sinopsis: {book.synopsis}</p>

        {!isFavorite && (
          <div className="button-add">
            <CustomButton size="small" onClick={() => toggleFavorite(book)}>
              Agregar
            </CustomButton>
          </div>
        )}
      </div>
    </article>
  );
};
