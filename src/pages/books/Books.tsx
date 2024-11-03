import React, { useEffect, useState } from "react";
import { books } from "../../data/books";
import "./Books.css";
import CustomButton from "../../components/common/button/CustomButton";
import { Book } from "../../types/booksInterface";
import useBookStore from "../../store/useBookStore";

const Books: React.FC<Book> = () => {
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [filteredBooks, setFilteredBooks] = useState(books.library);
  const { readingList, addToReadingList, removeFromReadingList } =
    useBookStore();

  const genres = [
    ...new Set(books.library.map((item) => item.book.genre)),
    "Todos",
  ];

  const totalBooks = filteredBooks.length;

  useEffect(() => {
    const updatedFilteredBooks =
      selectedGenre === "Todos"
        ? books.library
        : books.library.filter((item) => item.book.genre === selectedGenre);

    setFilteredBooks(updatedFilteredBooks);
  }, [selectedGenre, books.library]);

  const toggleFavorite = (book: Book) => {
    const isFavorite = readingList.find((fav) => fav.ISBN === book.ISBN);
    if (isFavorite) {
      removeFromReadingList(book.ISBN);
    } else {
      addToReadingList(book);
    }
  };

  return (
    <div>
      <h1>Books</h1>
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

      <div>
        <p>Número de libros disponibles: {totalBooks}</p>
      </div>

      <ul>
        {filteredBooks.map((item, index) => (
          <li key={index}>
            <h2>{item.book.title}</h2>
            <p>Número de páginas: {item.book.pages}</p>
            <p>Género: {item.book.genre}</p>
            <img src={item.book.cover} alt={`Cover of ${item.book.title}`} />
            <p>Autor: {item.book.author.name}</p>
            <p>Sinopsis: {item.book.synopsis}</p>
            <p>Año: {item.book.year}</p>
            <p>Otros libros: {item.book.author.otherBooks.join(", ")}</p>
            <CustomButton
              size="small"
              onClick={() => toggleFavorite(item.book)}
            >
              {readingList.find((fav) => fav.ISBN === item.book.ISBN)
                ? "Quitar de Lista de lectura"
                : "Agregar a Lista de lectura"}
            </CustomButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;