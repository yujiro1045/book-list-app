import React, { ReactNode } from "react";
import CustomButton from "../button/CustomButton";
import "./Card.css";

interface CardProps {
  imageUrl: string;
  altText: string;
  title: string;
  content: ReactNode;
  onButtonClick: () => void;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  altText,
  title,
  content,
  onButtonClick,
  buttonText = "Click",
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={altText} className="card-image" />
      <div className="card-container">
        <h2 className="card-title">{title}</h2>
        <div className="card-content">{content}</div>
        <div className="button-container">
          <CustomButton onClick={onButtonClick} size="small">
            {buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
