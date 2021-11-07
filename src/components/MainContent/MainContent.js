import React from "react";
import styles from "./mainContent.module.css";
const MainContent = () => {
  return (
    <div className={styles.main__content}>
      <h1>
        Welcome to <span>e-INVOICE</span>
      </h1>
      <p>Start creating your invoice now🚀</p>
    </div>
  );
};

export default MainContent;
