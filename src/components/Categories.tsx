import React from "react";

import Sort from "./Sort";

const categories = [
  "All",
  "Cars",
  "Dolls",
  "Lego",
  "Balls",
  "Animals",
  "Creative Toys",
  "Educational Toys",
];

type CategoriesProps = {
  value: number;
  onClickCategory: (idx: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  return (
    <div className="cat-navbar">
      <ul>
        {categories &&
          categories.map((cat, index) => {
            return (
              <li
                className={value === index ? "active" : ""}
                key={`${cat}_${index}`}
                onClick={() => onClickCategory(index)}
              >
                {cat}
              </li>
            );
          })}
      </ul>
      <Sort />
    </div>
  );
};

export default Categories;
