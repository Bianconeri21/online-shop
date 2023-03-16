import React from "react";
import { useSelector } from "react-redux";

import Categories from "../components/Categories";
import Loading from "../components/Loading";
import ToyCard from "../components/ToyCard";
import { addTocart, cartItem } from "../redux/slices/cartSlice";
import { setCategory } from "../redux/slices/filterSlice";
import { fetchToys, ItemsType } from "../redux/slices/toysSlice";
import { RootState, useAppDispatch } from "../redux/store";
import NotFound from "./NotFound";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(({ toys }: RootState) => toys);
  const { category, sortObj, search } = useSelector(({ filters }: RootState) => filters);

  const getToys = async () => {
    await dispatch(
      fetchToys({
        category,
        forSorting: sortObj.sort,
        search
      })
    );
  };

  const onClickCategory = (catId: number) => {
    dispatch(setCategory(catId));
  };

  const addToyToCart = (obj: cartItem) => {
    dispatch(addTocart(obj));
  }

  React.useEffect(() => {
    getToys();
    // eslint-disable-next-line
  }, [category, sortObj.sort, search]);
  return (
    <div className="container">
      <Categories value={category} onClickCategory={onClickCategory} />
      <div className="toys">
        {status === "error" ? (
          <NotFound />
        ) : status === "pending" ? (
          <Loading />
        ) : (
          items &&
          items.map((obj: ItemsType, ind) => {
            return <ToyCard items={items} key={`${obj.name}_${ind}`} {...obj} onClickAdd={addToyToCart} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
