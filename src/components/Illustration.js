import loginImage from "../assets/images/login.svg";
import signupImage from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";
export function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}
export function IllustrationLog() {
  return (
    <div className={classes.illustration}>
      <img src={loginImage} alt="Login" />
    </div>
  );
}
