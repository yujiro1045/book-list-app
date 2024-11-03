import { create } from "zustand";
import { Book } from "../types/booksInterface";

interface BookStore {
  readingList: Book[];
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (ISBN: string) => void;
  setReadingList: (books: Book[]) => void;
}

const useBookStore = create<BookStore>((set) => ({
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
