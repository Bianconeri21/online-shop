import React from "react";

import styles from "./NotFound.module.scss"

const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>Nothing was found</h2>
      <p>Something went wrong. Try again later</p>
    </div>
  );
};

export default NotFound;
