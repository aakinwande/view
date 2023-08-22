import React, { useState } from "react";
import './allcategories.css'
import SPC from "../../../images/blogpics/thoughtofchop/SPC.jpg";
import STBGG from "../../../images/blogpics/thoughtofchop/STBGG.jpg";
import MYLWTA from "../../../images/blogpics/thoughtofchop/MYLWTA.jpg";
import AI from "../../../images/blogpics/marketingsales/AI.jpg";
import CBE from "../../../images/blogpics/marketingsales/CBE.jpg";
import WAH from "../../../images/blogpics/marketingsales/WAH.jpg";
import DNAYP from "../../../images/blogpics/afroprenueship/DNAYP.jpg";
import TFC from "../../../images/blogpics/afroprenueship/TFC.jpg";
import UPTMM from "../../../images/blogpics/afroprenueship/UPTMM.jpg";
const cardsData = [
  { img: SPC, title: "GROW YOUR CONFIDENCE BY 1000%", date: "June 21, 2023", link: "/toc-one" },
  { img: MYLWTA, title: "HOW ORIGINAL IS YOUR LIFE?", date: "June 21, 2023", link: "/toc-two" },
  { img: STBGG, title: "GOING TO THE GYM ISN’T NECESSARY ", date: "June 21, 2023", link: "/toc-three" },
  { img: CBE, title: "HOW TO INCREASE YOUR PERCEIVED VALUE", date: "June 21, 2023", link: "/marketingsales-one" },
  { img: AI, title: "THE COLD OUTREACH STRATEGY MAKING US MONEY", date: "June 21, 2023", link: "/marketingsales-two" },
  { img: WAH, title: "BEING OF UTILITY MAKES YOU A WHORE?", date: "June 21, 2023", link: "/marketingsales-three" },
  { img: DNAYP, title: "BUILD TRACTION IN YOUR BUSINESS BEFORE NICHING DOWN", date: "June 21, 2023", link: "/afro-one" },
  { img: TFC, title: "YOU CAN BILL CLIENTS WHATEVER YOU WANT", date: "June 21, 2023", link: "/afro-two" },
  { img: UPTMM, title: "YOU DON’T NEED TO HAVE TALENT, HAVE LEVERAGE", date: "June 21, 2023", link: "/afro-three" },
  // ... Add other card data
];

const CardsPerPage = 6;
const MaxPaginationButtons = 5;


const AllCategories = () => {
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
  );
};

export default AllCategories;
