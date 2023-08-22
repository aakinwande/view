import React, { useState } from "react";
import SPC from "../../images/blogpics/thoughtofchop/SPC.jpg";
import STBGG from "../../images/blogpics/thoughtofchop/STBGG.jpg";
import TAT from "../../images/blogpics/thoughtofchop/TAT.jpg";
import LEOD from "../../images/blogpics/thoughtofchop/LEOD.jpg";
import MYLWTA from "../../images/blogpics/thoughtofchop/MYLWTA.jpg";
import "./thoughtstochop.css";

const cardsData = [
  { img: SPC, title: "GROW YOUR CONFIDENCE BY 1000%", date: "June 21, 2023", link: "/toc-one" },
  { img: MYLWTA, title: "HOW ORIGINAL IS YOUR LIFE?", date: "June 21, 2023", link: "/toc-two" },
  { img: STBGG, title: "GOING TO THE GYM ISN’T NECESSARY ", date: "June 21, 2023", link: "/toc-three" },
  { img: TAT, title: "MEDITATION OR INSOMNIA?", date: "June 21, 2023", link: "/toc-four" },
  { img: LEOD, title: "PARENTS DON’T HATE CHILDREN, THEY SPEAK DIFFERENT LANGUAGES", date: "June 21, 2023", link: "/toc-five" },
];

const CardsPerPage = 5
;
const MaxPaginationButtons = 5;


const ThoughtsToChop = () => {
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

export default ThoughtsToChop;
