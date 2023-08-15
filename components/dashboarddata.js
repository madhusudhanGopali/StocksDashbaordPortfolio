import DataCards from "./data-cards";
import PortfolioValue from "./portfolio-value";
import WatchList from "./watch-list";
import WalletSchedule from "./wallet-schedule";
import styles from "./Frame 412.module.css";
const Dashboarddata = () => {
  return (
    <div className={styles.dashboarddataParent}>
      <div className={styles.dashboarddata}>
        <div className={styles.cardsGraphTransaction}>
          <DataCards />
          <PortfolioValue />
        </div>
        <WatchList />
      </div>
      <WalletSchedule />
    </div>
  );
};

export default Dashboarddata;
