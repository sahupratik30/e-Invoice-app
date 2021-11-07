import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const history = useHistory();
  return (
    <nav className={styles.navbar} id="navbar">
      <h1 onClick={() => history.push("/")}>e-INVOICE</h1>
      <div className={styles.navbar__buttons}>
        <Link to="/new-invoice" className={styles.navbar__button}>
          Create New Invoice
        </Link>
        <Link to="/all-invoices" className={styles.navbar__button}>
          View Invoices
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
