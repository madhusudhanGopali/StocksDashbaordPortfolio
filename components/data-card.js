import { useMemo } from "react";
import styles from "./data-card.module.css";
const DataCard = ({
  totalBalanceBackgroundColor,
  icon,
  totalBalanceJustifyContent,
  netWorth,
  prop,
}) => {
  const totalBalanceStyle = useMemo(() => {
    return {
      backgroundColor: totalBalanceBackgroundColor,
    };
  }, [totalBalanceBackgroundColor]);

  const totalBalance1Style = useMemo(() => {
    return {
      justifyContent: totalBalanceJustifyContent,
    };
  }, [totalBalanceJustifyContent]);

  return (
    <div className={styles.totalBalance} style={totalBalanceStyle}>
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.totalBalance1} style={totalBalance1Style}>
        <div className={styles.netWorth}>{netWorth}</div>
        <b className={styles.b}>{prop}</b>
      </div>
    </div>
  );
};

export default DataCard;
