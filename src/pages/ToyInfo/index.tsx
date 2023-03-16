import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Rate from "../../components/Rate";

import { ItemsType } from "../../redux/slices/toysSlice";
import styles from "./ToyInfo.module.scss";

const ToyInfo: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [toyInfo, setToyInfo] = React.useState<ItemsType>();

  const fetchToyInfo = async () => {
    try {
      const info = await axios.get(
        `https://63d7a4e45dbd72324429e3e1.mockapi.io/toys/${id}`
      );
      setToyInfo(info.data);
    } catch {
      alert("Something went wrong");
      navigate("/");
    }
  };

  React.useEffect(() => {
    fetchToyInfo();
    // eslint-disable-next-line
  }, []);

  if (!toyInfo) {
    return (
      <div className={styles.root}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{toyInfo.name}</h2>

      <div className={styles.info_container}>
        <div className={styles.image_container}>
          <span>{toyInfo.price} $</span>
          <img src={toyInfo.imageUrl} alt="Toy Info" />
          <Rate rating={toyInfo.rating} />
        </div>

        <p>{toyInfo.description}</p>
      </div>
    </div>
  );
};

export default ToyInfo;