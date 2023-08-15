import styles from "./top-bar.module.css";
const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.dashboard}>Dashboard</div>
      <div className={styles.topBar1}>
        <div className={styles.icons}>
          <img className={styles.search11Icon} alt="" src="/search1-11.svg" />
          <img
            className={styles.search11Icon}
            alt=""
            src="/notificationbing5-1.svg"
          />
        </div>
        <div className={styles.name}>
          <div className={styles.nameavater}>
            <img
              className={styles.nameavaterChild}
              alt=""
              src="/ellipse-11@2x.png"
            />
            <div className={styles.nicolasAguirre}>Nicolas Aguirre</div>
          </div>
          <img className={styles.dropdownIcon} alt="" src="/dropdown1.svg" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
