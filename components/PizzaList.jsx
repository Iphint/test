import styles from "../styles/List.module.css";
import Card from "./Card"

const List = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OUR VALUES</h1>
      <div className={styles.wrapper}>
          <Card/>
      </div>
    </div>
  );
};

export default List;
