import { books } from "../data/books";
import "./Books.css";

const Books = () => {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.library.map((item, index) => (
          <li key={index}>
            <h2>{item.book.title}</h2>
            <p>Número de páginas: {item.book.pages}</p>
            <p>Género: {item.book.genre}</p>
            <img src={item.book.cover} alt={`Cover of ${item.book.title}`} />
            <p>Autor: {item.book.author.name}</p>{" "}
            <p>Synopsis: {item.book.synopsis}</p>
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
