import { create } from "zustand";
import { Book } from "../types/books.type";
import { createJSONStorage, persist } from "zustand/middleware";

interface BookState {
  readingList: Book[];
}

interface BookActions {
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (ISBN: string) => void;
  setReadingList: (books: Book[]) => void;
}

type BookStatement = BookActions & BookState;

const useBookStore = create(
  persist<BookStatement>(
    (set) => ({
      readingList: [],
      addToReadingList: (book: Book) => {
        set((state) => {
          const updatedList = [...state.readingList, book];
          return { readingList: updatedList };
        });
      },
      removeFromReadingList: (ISBN: string) => {
        set((state) => {
          const updatedList = state.readingList.filter(
            (book) => book.ISBN !== ISBN
          );
          return { readingList: updatedList };
        });
      },
      setReadingList: (books: Book[]) => {
        set({ readingList: books });
      },
    }),
    { name: "book-state", storage: createJSONStorage(() => localStorage) }
  )
);

export default useBookStore;
