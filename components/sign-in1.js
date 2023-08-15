import SignInContainer from "./sign-in-container";
import styles from "./sign-in1.module.css";
const SignIn1 = () => {
  return (
    <main className={styles.signIn}>
      <SignInContainer />
      <img className={styles.timeimageIcon} alt="" src="/timeimage@2x.png" />
    </main>
  );
};

export default SignIn1;
