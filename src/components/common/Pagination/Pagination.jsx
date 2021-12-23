import React from "react";
import style from "./Pagination.module.css";
import toLeft from "../../../assets/img/back.png";
import toRight from "../../../assets/img/next.png";

const Paginations = ({
  pageSize,
  totalUsersCount,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if (pages.length > 5) {
    return (
        <div className={style.paginationList}>
          <span
            onClick={(e) => {
              if (currentPage === 1) return null;
              onPageChanged(currentPage - 1);
            }}
          >
            <img
              className={style.arrows}
              src={toLeft}
              alt="list users to left"
            />
          </span>
          <span
            onClick={(e) => {
              onPageChanged(currentPage);
            }}
            className={style.active}
          >
            {currentPage}
          </span>
          <span
            onClick={(e) => {
              if (currentPage === pages.length - 1) return null;
              onPageChanged(currentPage + 1);
            }}
          >
            <img
              className={style.arrows}
              src={toRight}
              alt="list users to right"
            />
          </span>
        </div>

    );
  } else {
    return (
        <div className={style.paginationList}>
          {pages.map((page) => {
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
        </div>
    );
  }
};

export default Paginations;
