import React from "react";

import loading from "../../assets/img/loading.gif";
import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
