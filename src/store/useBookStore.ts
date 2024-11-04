import { create } from "zustand";
import { Book } from "../types/booksInterface";

interface BookState {
  readingList: Book[];
}

interface BookActions {
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (ISBN: string) => void;
  setReadingList: (books: Book[]) => void;
}

type BookStatement = BookActions & BookState;

const useBookStore = create<BookStatement>((set) => ({
  readingList: JSON.parse(localStorage.getItem("listBooks") || "[]") || [],
  addToReadingList: (book: Book) => {
    set((state) => {
      const updateList = [...state.readingList, book];
      localStorage.setItem("listBooks", JSON.stringify(updateList));
      return { readingList: updateList };
    });
  },
  removeFromReadingList: (ISBN: string) => {
    set((state) => {
      const updatedList = state.readingList.filter(
        (book) => book.ISBN !== ISBN
      );
      localStorage.setItem("listBooks", JSON.stringify(updatedList));
      return { readingList: updatedList };
    });
  },
  setReadingList: (books: Book[]) => {
    set({ readingList: books });
  },
}));

export default useBookStore;
