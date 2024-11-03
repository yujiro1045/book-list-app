export interface Book {
  title?: string;
  author?: {
    name?: string;
    otherBooks?: string[];
  };
  year?: number;
  cover?: string;
  synopsis?: string;
  ISBN?: string;
  genre?: string;
  pages?: string;
  onRemove?: () => void;
}
