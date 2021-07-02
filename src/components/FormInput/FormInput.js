import React, { useState } from "react";
import Error from "../Error/Error";
import styles from "./FormInput.module.css";
const FormInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState(false);

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  const closeErrorHandler = () => {
    setIsError(false)
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newData = {
      username: username,
      age: age,
    };

    if(newData.username === '' || newData.age ===  '') {
      setIsError(true);
      return;
    }

    props.onSavehandler(newData);
    setUsername("");
    setAge("");
  };

  return (
    <div>
      {!isError && (
        <form onSubmit={formSubmitHandler}>
          <div className={styles["form-control"]}>
            <div className={styles["form-control__controls"]}>
              <label>Username</label>
              <input
                value={username}
                onChange={usernameInputHandler}
                type="text"
              />
            </div>
            <div className={styles["form-control__controls"]}>
              <label>Age</label>
              <input
                value={age}
                onChange={ageInputHandler}
                type="number"
                min="1"
              />
            </div>
            <div className={styles["form-control__controls"]}>
              <button type="submit" >
                <span>Add User</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {isError && <Error onCloseError={closeErrorHandler} />}
    </div>
  );
};

export default FormInput;
