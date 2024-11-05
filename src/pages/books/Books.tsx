import React, { useEffect, useState } from "react";
import { books } from "../../data/books";
import CustomButton from "../../components/common/button/CustomButton";
import { Book } from "../../types/booksInterface";
import useBookStore from "../../store/useBookStore";
import "./Books.css";

const Books: React.FC<Book> = () => {
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [filteredBooks, setFilteredBooks] = useState(books.library);
  const { readingList, addToReadingList, removeFromReadingList } =
    useBookStore();

  const genres = [
    ...new Set(books.library.map((item) => item.book.genre || "Desconocido")),
    "Todos",
  ];

  const totalBooks = filteredBooks.length;

  useEffect(() => {
    const updatedFilteredBooks =
      selectedGenre === "Todos"
        ? books.library
        : books.library.filter((item) => item.book.genre === selectedGenre);

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
          Número de libros disponibles: {totalBooks}
        </p>
      </div>

      <ul className="books-grid">
        {filteredBooks.map((item, index) => (
          <li key={index} className="book-item">
            <img src={item.book.cover} alt={`Cover of ${item.book.title}`} />
            <div className="book-details">
              <h2>{item.book.title}</h2>
              <p>Número de páginas: {item.book.pages}</p>
              <p>Género: {item.book.genre}</p>
              <p>Sinopsis: {item.book.synopsis}</p>
              <div className="button-add">
                <CustomButton
                  size="small"
                  onClick={() => toggleFavorite(item.book)}
                >
                  {readingList.find((fav) => fav.ISBN === item.book.ISBN)
                    ? "Quitar"
                    : "Agregar"}
                </CustomButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
