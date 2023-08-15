import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const SignIn = () => {
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className={styles.signIn}>
      <div className={styles.signIn1}>
        <div className={styles.title}>
          <div className={styles.welcomeBack}>Welcome back</div>
          <div className={styles.welcomeBackPlease}>
            Welcome back! Please enter your details
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.inputsform}>
            <div className={styles.input}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>Email</div>
              </div>
              <input
                className={styles.inputChild}
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.input1}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>Password</div>
              </div>
              <input className={styles.inputItem} type="password" />
            </div>
          </div>
          <div className={styles.reminders}>
            <div className={styles.remember}>
              <div className={styles.rememberChild} />
              <div className={styles.rememberFor30}>Remember for 30 Days</div>
            </div>
            <div className={styles.forgotPassword}>Forgot password</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.signinbuttons}>
            <div className={styles.button}>
              <div className={styles.welcomeBack}>Sign in</div>
            </div>
            <div className={styles.button1} onClick={onButtonContainer1Click}>
              <img className={styles.icongoogle} alt="" src="/icongoogle.svg" />
              <div className={styles.welcomeBack}>Sign in with google</div>
            </div>
          </div>
          <div className={styles.signup}>
            <div className={styles.dontHaveAnContainer}>
              <span>
                <span>Don’t have an account?</span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span className={styles.signUpFor}>Sign up for free</span>
            </div>
            <img className={styles.signupChild} alt="" src="/vector-11.svg" />
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.overlay} />
      </div>
      <div className={styles.logo}>
        <img className={styles.excludeIcon} alt="" src="/exclude.svg" />
        <b className={styles.maglo}>Maglo.</b>
      </div>
    </div>
  );
};

export default SignIn;
