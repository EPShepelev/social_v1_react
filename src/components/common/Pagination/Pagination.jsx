import React, { useState } from "react";
import style from "./Pagination.module.css";
import toLeft from "../../../assets/img/back.png";
import toRight from "../../../assets/img/next.png";

const Paginations = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 5,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginationList}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          <img className={style.arrows} src={toLeft} alt="list users to left" />
        </button>
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <span
              key={page}
              className={currentPage === page ? style.active : ""}
              onClick={(e) => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          <img
            className={style.arrows}
            src={toRight}
            alt="list users to left"
          />
        </button>
      )}
    </div>
  );
};

export default Paginations;
