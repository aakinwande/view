import React, { useState } from "react";
import "./marketingsales.css";
import AI from '../../images/blogpics/marketingsales/AI.jpg'
import CBE from '../../images/blogpics/marketingsales/CBE.jpg'
import WAH from '../../images/blogpics/marketingsales/WAH.jpg'
import LRAC from '../../images/blogpics/marketingsales/LRAC.jpg'
import NCSA from '../../images/blogpics/marketingsales/NCSA.jpg'

const cardsData = [
  { img: CBE, title: "HOW TO INCREASE YOUR PERCEIVED VALUE", date: "June 21, 2023", link: "/marketingsales-one" },
  { img: AI, title: "THE COLD OUTREACH STRATEGY MAKING US MONEY", date: "June 21, 2023", link: "/marketingsales-two" },
  { img: WAH, title: "BEING OF UTILITY MAKES YOU A WHORE?", date: "June 21, 2023", link: "/marketingsales-three" },
  { img: LRAC, title: "HOW TO LAND AND RETAIN ALL CLIENTS ", date: "June 21, 2023", link: "/marketingsales-four" },
  { img: NCSA, title: "IF YOU HATE THE FEELING OF SELLING READ THIS", date: "June 21, 2023", link: "/marketingsales-five" },
  // ... Add other card data
];
const CardsPerPage = 5;
const MaxPaginationButtons = 5;

const  MarketingSales = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardsData.length / CardsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
       <div className="all-categories-container">
      <div className="card-container">
        {currentCards.map((card, index) => (
          <div key={index} className="card">
          <img src={card.img} className="card-img-top blog-img-bb" alt="..." />
        <div className="card-body">
          <p className="card-text">Date: {card.date}</p>
          <h5 className="card-title">{card.title}</h5>
          <a href={card.link} className="btn btn-allcategories">
            Read more
          </a>
        </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.min(MaxPaginationButtons, totalPages) }).map((_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    </>
  )
}

export default MarketingSales
