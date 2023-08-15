import styles from "./watch-list.module.css";
const WatchList = () => {
  return (
    <div className={styles.recentTransaction}>
      <div className={styles.top}>
        <div className={styles.watchList}>Watch List</div>
        <div className={styles.topInner}>
          <div className={styles.viewAllParent}>
            <div className={styles.watchList}>View All</div>
            <img
              className={styles.icExpandMore24px1Icon}
              alt=""
              src="/icexpandmore24px-13.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.index1}>
        <div className={styles.tickername}>Ticker/Name</div>
        <div className={styles.typeParent}>
          <div className={styles.type}>TYPE</div>
          <div className={styles.type}>AMOUNT</div>
          <div className={styles.type}>DATE</div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.image8Icon}
                alt=""
                src="/image-81@2x.png"
              />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.aaplParent}>
                <div className={styles.aapl}>AAPL</div>
                <div className={styles.appleInc}>Apple. Inc</div>
              </div>
            </div>
          </div>
          <div className={styles.stockParent}>
            <div className={styles.stock}>Stock</div>
            <div className={styles.div}>$420.84</div>
            <div className={styles.apr2022}>14 Apr 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
