import React from "react";
import { useSelector } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

import { RootState, useAppDispatch } from "../redux/store";

type sortingPopupItem = {
  title: string;
  sort: string;
};

const sortingPopupItems: sortingPopupItem[] = [
  { title: "Rating", sort: "rating" },
  { title: "Alphabet", sort: "name" },
  { title: "Price", sort: "price" },
];

const Sort: React.FC = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const sortPopupRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { sortObj } = useSelector(({ filters }: RootState) => filters);

  const clickOutsidePopup = (e: MouseEvent) => {
    if (
      sortPopupRef.current &&
      !e.composedPath().includes(sortPopupRef.current)
    ) {
      setShowPopup(false);
    }
  };

  document.body.addEventListener("click", clickOutsidePopup);

  const onClickSort = (obj: sortingPopupItem) => {
    setShowPopup(false);
    dispatch(setSort(obj));
  };
  return (
    <div className="sort-container" ref={sortPopupRef}>
      <p className="current-sort" onClick={() => setShowPopup(!showPopup)}>
        <svg
          className={showPopup ? "rotate" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#232323"
          ></path>
        </svg>
        Sort by:<span>{sortObj.title}</span>
      </p>
      {showPopup && (
        <div className="sorting-popup">
          <ul>
            {sortingPopupItems &&
              sortingPopupItems.map((obj, index) => {
                return (
                  <li
                    key={`${obj.title}_${index}`}
                    onClick={() => onClickSort(obj)}
                  >
                    {obj.title}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
