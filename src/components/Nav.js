import { Link } from "react-router-dom";
import logo from "../assets/images/98539031-islamic-mosque-logo-vector-icon-template.webp";
import classes from "../styles/Nav.module.css";
import Account from "./Account.js";
export default function nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt=" Logo" />
            <h3>Learn Yourself</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
