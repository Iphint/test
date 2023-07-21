import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.texts}>
          <div className={styles.text}>Company</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#">ABOUT</a>
            <div className={styles.subMenu}>
              <ul className={styles.subList}>
                <li>HISTORY</li>
                <li>MISSION VISION</li>
              </ul>
            </div>
          </li>
          <li className={styles.listItem}><a href="#">OUR WORK</a></li>
          <li className={styles.listItem}><a href="#">OUR TEAM</a></li>
          <li className={styles.listItem}><a href="#">CONTACT</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;