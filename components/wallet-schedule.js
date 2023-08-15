import styles from "./wallet-schedule.module.css";
const WalletSchedule = () => {
  return (
    <div className={styles.walletSchedule}>
      <img className={styles.image10Icon} alt="" src="/image-101@2x.png" />
      <div className={styles.scheduledTransfers}>
        <div className={styles.titel}>
          <div className={styles.scheduledTransfersWrapper}>
            <div className={styles.scheduledTransfers1}>
              Scheduled Transfers
            </div>
          </div>
          <div className={styles.icExpandMore24px1Parent}>
            <img
              className={styles.icExpandMore24px1Icon}
              alt=""
              src="/icexpandmore24px-13.svg"
            />
            <div className={styles.viewAll}>View All</div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.main1}>
            <div className={styles.groupParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.nameDateWrapper}>
                  <div className={styles.nameDate}>
                    <div className={styles.msft}>MSFT</div>
                    <div className={styles.april282022}>
                      April 28, 2022 at 11:00
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div}>- $435,00</div>
            </div>
          </div>
          <div className={styles.main1}>
            <div className={styles.groupParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.nameDateWrapper}>
                  <div className={styles.nameDate}>
                    <div className={styles.msft}>TSLA</div>
                    <div className={styles.april282022}>
                      April 28, 2022 at 11:00
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div}>- $435,00</div>
            </div>
          </div>
          <div className={styles.main1}>
            <div className={styles.groupParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.nameDateWrapper}>
                  <div className={styles.nameDate}>
                    <div className={styles.msft}>META</div>
                    <div className={styles.april282022}>
                      April 28, 2022 at 11:00
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div}>- $435,00</div>
            </div>
          </div>
          <div className={styles.main1}>
            <div className={styles.groupParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.nameDateWrapper}>
                  <div className={styles.nameDate}>
                    <div className={styles.msft}>MSFT</div>
                    <div className={styles.april282022}>
                      April 28, 2022 at 11:00
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div}>- $435,00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSchedule;
