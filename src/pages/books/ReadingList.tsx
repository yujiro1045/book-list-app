import React, { useEffect, useState } from "react";
import { Book } from "../../interfaces/booksInterface";
import Card from "../../components/common/card/Card";

const ReadingList: React.FC = () => {
  const [readingList, setReadingList] = useState<Book[]>([]);

  const handleRemoveBook = (index: number) => {
    const updateList = readingList.filter((_, i) => i !== index);
    setReadingList(updateList);
    localStorage.setItem("listBooks", JSON.stringify(updateList));
  };

  useEffect(() => {
    const storedList = JSON.parse(
      localStorage.getItem("listBooks") || []
    ) as Book[];
    setReadingList(storedList);
  }, []);

  return (
    <div className="card-container">
      <h1>Lista de lectura</h1>
      <ul>
        {readingList.length > 0 ? (
          readingList.map((book, index) => (
            <Card
              key={index}
              title={book.title}
              author={book.author.name}
              year={book.year}
              cover={book.cover}
              onRemove={() => handleRemoveBook(index)}
            />
          ))
        ) : (
          <p>No tienes libros en tu lista de lectura.</p>
        )}
      </ul>
    </div>
  );
};

export default ReadingList;
