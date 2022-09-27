import Answers from "../components/Answers";
import classes from "../styles/Question.module.css";
export default function Question() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <div>
        <Answers />
        <Answers />
        <Answers />
        <Answers />
        <Answers />
      </div>
    </div>
  );
}
