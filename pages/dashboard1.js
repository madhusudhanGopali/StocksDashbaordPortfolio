import Navbar from "../components/navbar";
import TopBar from "../components/top-bar";
import Dashboarddata from "../components/dashboarddata";
import styles from "./dashboard1.module.css";
const Dashboard1 = () => {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.dashboardcontent}>
        <TopBar />
        <Dashboarddata />
      </div>
    </div>
  );
};

export default Dashboard1;
