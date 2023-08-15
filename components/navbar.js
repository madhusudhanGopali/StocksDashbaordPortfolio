import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img className={styles.excludeIcon} alt="" src="/exclude.svg" />
          <b className={styles.maglo}>Maglo.</b>
        </div>
        <div className={styles.main}>
          <div className={styles.option}>
            <div className={styles.bar}>
              <img
                className={styles.dashboardIcon}
                alt=""
                src="/dashboard1.svg"
              />
              <div className={styles.dashboard}>Dashboard</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/transactions1.svg"
              />
              <div className={styles.transactions}>Transactions</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/invoices1.svg"
              />
              <div className={styles.transactions}>Invoices</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/my-wallets1.svg"
              />
              <div className={styles.transactions}>My Wallets</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/settings1.svg"
              />
              <div className={styles.transactions}>Settings</div>
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/help1.svg"
              />
              <div className={styles.transactions}>Help</div>
            </div>
            <div className={styles.bar1}>
              <img
                className={styles.transactionsIcon}
                alt=""
                src="/logout1.svg"
              />
              <div className={styles.transactions}>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
