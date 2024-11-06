import React, { useEffect, useState } from "react";
import { books } from "../../data/books";
import { Book, BookData } from "../../types/books.type";
import useBookStore from "../../store/useBookStore";
import { BookItem } from "./item/BookItem";
import "./Books.css";

const Books: React.FC<Book> = () => {
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [filteredBooks, setFilteredBooks] = useState<BookData[]>(books);
  const { readingList, addToReadingList, removeFromReadingList } =
    useBookStore();

  const genres = [
    ...new Set(books.map((item) => item.book.genre || "Desconocido")),
    "Todos",
  ];

  const availableBooksCount = filteredBooks.filter(
    (item) => !readingList.some((book) => book.ISBN === item.book.ISBN)
  ).length;

  useEffect(() => {
    const updatedFilteredBooks =
      selectedGenre === "Todos"
        ? books
        : books.filter((item) => item.book.genre === selectedGenre);

    setFilteredBooks(updatedFilteredBooks);
  }, [selectedGenre]);

  const toggleFavorite = (book: Book) => {
    if (!book.ISBN) {
      console.error("No se puede agregar el libro sin un ISBN.");
      return;
    }
    const isFavorite = readingList.find((fav) => fav.ISBN === book.ISBN);
    if (isFavorite) {
      removeFromReadingList(book.ISBN);
    } else {
      addToReadingList(book);
    }
  };

  return (
    <div className="books-container">
      <h1 className="books-title">Líbros disponibles</h1>

      <div className="filter-genre">
        <label htmlFor="genre-select">Filtrar por Género:</label>

        <select
          id="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="books-available">
          Número de libros disponibles: {availableBooksCount}
        </p>
      </div>

      <section className="books-grid">
        {filteredBooks.map((item) => {
          const isFavorite = readingList.some(
            (fav) => fav.ISBN === item.book.ISBN
          );

          return (
            <BookItem
              book={item.book}
              key={item.book.ISBN}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Books;
