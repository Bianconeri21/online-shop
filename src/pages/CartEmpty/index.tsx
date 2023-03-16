import React from "react";

import styles from "./CartEmpty.module.scss";
import emptyCartImg from "../../assets/img/emptyCart.png";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
    return (
        <div className={styles.root}>
            <h2>
                Your Cart is empty
            </h2>

            <div className={styles.imgContainer}>
                <img src={emptyCartImg} alt="Empty Cart" />
            </div>

            <Link to="/">
                <button className={styles.buttonBack}>
                    Home Page
                </button>
            </Link>
        </div>
    )
}

export default CartEmpty;