import { useRef, useState } from "react";

import classes from "./Pagination.module.css";

const Pagination = ({
  totalCountries,
  countriesPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const [userInput, setUserInput] = useState("");
  const pageInput = useRef(null);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      pageInput.current.value = "";
    } else return;
  };

  let lastPage = Math.ceil(totalCountries / countriesPerPage);

  const handleNextClick = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
      pageInput.current.value = "";
    } else return;
  };

  const handleGoTo = () => {
    if (pageInput.current.value > 0 && pageInput.current.value <= lastPage) {
      setCurrentPage(Number(pageInput.current.value));
      pageInput.current.value = "";
    } else return;
  };

  let pages = [];
  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className={classes.buttons}>
        <button
          className={`${classes["page-button"]} ${
            currentPage === 1 ? classes.dissabled : classes["page-button"]
          }`}
          onClick={handlePrevClick}
        >
          Prev
        </button>
        {pages.map((page, index) => {
          return (
            <button
              className={`${classes["hidden-buttons"]} ${
                classes["page-button"]
              } ${
                page === currentPage ? classes.active : classes["page-button"]
              }`}
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
        <div className={classes["page-input-box"]}>
          <input
            type="number"
            placeholder={currentPage}
            ref={pageInput}
            max="99"
            min="1"
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
        </div>
        <p className={classes["last-page"]}>/ {lastPage}</p>
        <button
          className={`${classes["page-button"]} ${
            currentPage === lastPage
              ? classes.dissabled
              : classes["page-button"]
          }`}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      <p className={classes.error}>
        {userInput < 0 || userInput > lastPage
          ? `Number has to be between 1 and ${lastPage}`
          : ""}
      </p>
      <button className={classes.goto} onClick={handleGoTo}>
        Go to
      </button>
    </>
  );
};

export default Pagination;
