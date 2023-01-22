import React from "react";
import styles from "./Heading.module.css";

function Heading() {
  return (
    <li>
      <input className={styles.input} type="text" />
    </li>
  );
}

export default Heading;
