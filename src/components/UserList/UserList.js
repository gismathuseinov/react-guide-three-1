import React from "react"

import styles from "./UserList.module.css"

const UserList = (props) => {

    return <div className={styles['user-list']}>
        <ul>
            {props.users.map(user=>(
                <li key={user.id}> {user.username}  ({user.age} age years old)</li>
            ))}
        </ul>
    </div>
};

export default UserList;
