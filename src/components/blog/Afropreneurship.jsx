import React, { useState } from "react";
import DNAYP from "../../images/blogpics/afroprenueship/DNAYP.jpg";
import TFC from "../../images/blogpics/afroprenueship/TFC.jpg";
import UPTMM from "../../images/blogpics/afroprenueship/UPTMM.jpg";
import IS from "../../images/blogpics/afroprenueship/IS.jpg";
import CGPT from "../../images/blogpics/afroprenueship/CGPT.jpg";
import "./afro.css";

const cardsData = [
  { img: DNAYP, title: "BUILD TRACTION IN YOUR BUSINESS BEFORE NICHING DOWN", date: "June 21, 2023", link: "/afro-one" },
  { img: TFC, title: "YOU CAN BILL CLIENTS WHATEVER YOU WANT", date: "June 21, 2023", link: "/afro-two" },
  { img: UPTMM, title: "YOU DON’T NEED TO HAVE TALENT, HAVE LEVERAGE", date: "June 21, 2023", link: "/afro-three" },
  { img: IS, title: " HOW TO OVEROCOME IMPOSTER SYNDROME IN ANY INDUSTRY", date: "June 21, 2023", link: "/afro-four" },
  { img: CGPT, title: "COLD OUTREACH (HUMAN VS ARTIFICIAL INTELLIGENCE)", date: "June 21, 2023", link: "/afro-five" },

];

const CardsPerPage = 5;
const MaxPaginationButtons = 5;

const Afropreneurship = () => {
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

export default Afropreneurship;
