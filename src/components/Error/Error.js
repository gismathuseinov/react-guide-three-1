import React from "react";
import styles from "./Error.module.css";
const Error = (props) => {
  const back = () =>{
    props.onCloseError();
  }
  return (
    <div className={styles.error}>
      <div className={styles.title}>
        <span>Invalid input</span>
      </div>
      <div>
        <div className={styles.msg}>
          <span>Fields are required</span>
        </div>
        <div className={styles.btn}>
          <button onClick={back}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Error;
