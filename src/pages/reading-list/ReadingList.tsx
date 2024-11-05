import "./Reading.css";
import Card from "../../components/common/card/Card";
import React from "react";
import useBookStore from "../../store/useBookStore";

const ReadingList: React.FC = () => {
  const { readingList, removeFromReadingList, setReadingList } = useBookStore();

  const handleRemoveBook = (ISBN: string) => {
    removeFromReadingList(ISBN);
  };

  return (
    <>
      <h1 className="title-reading">Lista de lectura</h1>
      <div className="cards-container">
        <div className="cards">
          <ul className="cards-grid">
            {readingList.length > 0 ? (
              readingList.map((book, index) => (
                <Card
                  key={index}
                  title={book.title}
                  author={{ name: book.author?.name }}
                  year={book.year}
                  cover={book.cover}
                  onRemove={() => handleRemoveBook(book.ISBN!)}
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
