import "./Reading.css";
import Card from "../../components/common/card/Card";
import React from "react";
import useBookStore from "../../store/useBookStore";

const ReadingList: React.FC = () => {
  const { readingList, removeFromReadingList } = useBookStore();

  const booksInReadingList = readingList.length;

  const handleRemoveBook = (ISBN: string) => {
    removeFromReadingList(ISBN);
  };

  return (
    <>
      <h1 className="title-reading">Lista de lectura</h1>

      <div className="reading-list-counter">
        <p>Libros en lista de lectura: {booksInReadingList}</p>
      </div>

      <div className="cards-container">
        <div className="cards">
          <ul className="cards-grid">
            {readingList.length > 0 ? (
              readingList.map((book) => (
                <Card
                  key={book.ISBN}
                  imageUrl={book.cover || ""}
                  altText={`Cover of ${book.title}`}
                  title={book.title || ""}
                  content={
                    <>
                      <p>Autor: {book.author?.name}</p>
                      <p>Año: {book.year}</p>
                    </>
                  }
                  onButtonClick={() => handleRemoveBook(book.ISBN!)}
                  buttonText="Eliminar libro"
                />
              ))
            ) : (
              <p className="empty-message">
                No tienes libros en tu lista de lectura...
              </p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReadingList;
