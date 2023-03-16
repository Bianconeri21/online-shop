import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { cartItem } from "../redux/slices/cartSlice";
import { ItemsType } from "../redux/slices/toysSlice";
import { RootState } from "../redux/store";
import Rate from "./Rate";

type ToyCardProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  onClickAdd: (obj: cartItem) => void;
  items: ItemsType[];
};

const ToyCard: React.FC<ToyCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  onClickAdd,
  items,
}) => {
  const cartItem = useSelector(({ cart }: RootState) =>
    cart.cartItems.find((obj) => obj.id === id)
  );
  const toyCount = cartItem ? cartItem.count : 0;

  const filteredItem = items.filter((obj) => {
    return obj.id === id;
  });

  return (
    <div className="toys__card">
      <Link to={`pizza/${id}`}>
        <img src={imageUrl} alt="Toy car" />
      </Link>
      <div className="toy-name-container">
        <p>{name}</p>
        <div
          className="toy-add"
          onClick={() => onClickAdd({ id, name, price, imageUrl, count: 0 })}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#4CB250"
            ></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#4CB250"
            ></path>
          </svg>
        </div>
      </div>
      <Rate
        rating={filteredItem[0].rating}
      />
      <div className="toy-price-container">
        <span className="price">{price} $</span>
        <span className="count">{toyCount}</span>
      </div>
    </div>
  );
};

export default ToyCard;
