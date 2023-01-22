import React from "react";
import styles from "./Property.module.css";

function Property(props) {
  return (
    <div className={styles.grid_container}>
      <div className={styles.item1}>
        <div className={styles.glass}>
          <input type="text" value={props.room} />{" "}
          <button onClick={props.setroom}>สร้างห้อง</button>
        </div>
      </div>
      <div className={styles.item2}>
        <div className={styles.glass}>22222222222</div>
      </div>
    </div>
  );
}

export default Property;
