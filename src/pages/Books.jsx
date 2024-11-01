import { useState } from "react";
import { books } from "../data/books";
import "./Books.css";

const Books = () => {
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const genres = [
    ...new Set(books.library.map((item) => item.book.genre)),
    "Todos",
  ];

  const filteredBooks =
    selectedGenre === "Todos"
      ? books.library
      : books.library.filter((item) => item.book.genre === selectedGenre);

  const totalBooks = filteredBooks.length;
  const readingListCount = filteredBooks.filter(
    (item) => item.book.inReadingList
  ).length;

  return (
    <div>
      <h1>Books</h1>
      <label htmlFor="genre-select">Filtrar po Género:</label>
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
        <p>Número de libros en la lista de lectura: {readingListCount}</p>
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
            <p>ISBN: {item.book.ISBN}</p>
            <p>Otros libros: {item.book.author.otherBooks.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
