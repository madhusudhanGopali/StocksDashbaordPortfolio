import styles from "./sign-in-container.module.css";
const SignInContainer = () => {
  return (
    <div className={styles.signincontainer}>
      <div className={styles.signinform}>
        <div className={styles.logo}>
          <img className={styles.excludeIcon} alt="" src="/exclude1.svg" />
          <b className={styles.maglo}>Maglo.</b>
        </div>
        <div className={styles.signIn}>
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
              <button className={styles.button1}>
                <img
                  className={styles.icongoogle}
                  alt=""
                  src="/icongoogle1.svg"
                />
                <div className={styles.signInWith}>Sign in with google</div>
              </button>
            </div>
            <div className={styles.signup}>
              <div className={styles.dontHaveAnContainer}>
                <span>
                  <span>Don’t have an account?</span>
                  <span className={styles.span}>{` `}</span>
                </span>
                <span className={styles.signUpFor}>Sign up for free</span>
              </div>
              <img
                className={styles.signupChild}
                alt=""
                src="/vector-111.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInContainer;
