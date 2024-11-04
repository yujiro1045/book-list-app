import "./Reading.css";
import { Book } from "../../types/booksInterface";
import Card from "../../components/common/card/Card";
import React, { useEffect } from "react";
import useBookStore from "../../store/useBookStore";

const ReadingList: React.FC = () => {
  const { readingList, removeFromReadingList, setReadingList } = useBookStore();

  const handleRemoveBook = (ISBN: string) => {
    removeFromReadingList(ISBN);
  };

  useEffect(() => {
    const storedList = JSON.parse(
      localStorage.getItem("listBooks") || []
    ) as Book[];
    setReadingList(storedList);
  }, [setReadingList]);

  return (
    <>
      <h1>Lista de lectura</h1>
      <div className="cards-container">
        <div className="cards">
          <ul className="cards-grid">
            {readingList.length > 0 ? (
              readingList.map((book, index) => (
                <Card
                  key={index}
                  title={book.title}
                  author={book.author?.name}
                  year={book.year}
                  cover={book.cover}
                  onRemove={() => handleRemoveBook(book.ISBN)}
                />
              ))
            ) : (
              <p>No tienes libros en tu lista de lectura.</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReadingList;
