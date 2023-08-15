import DataCard from "./data-card";
import styles from "./data-cards.module.css";
const DataCards = () => {
  return (
    <div className={styles.cards}>
      <DataCard icon="/icon3.svg" netWorth="Net Worth" prop="$524" />
      <DataCard
        totalBalanceBackgroundColor="#201e34"
        icon="/icon4.svg"
        totalBalanceJustifyContent="center"
        netWorth="Spending"
        prop="$250"
      />
      <DataCard
        totalBalanceBackgroundColor="#201e34"
        icon="/icon5.svg"
        totalBalanceJustifyContent="center"
        netWorth="Saved"
        prop="$550"
      />
    </div>
  );
};

export default DataCards;
