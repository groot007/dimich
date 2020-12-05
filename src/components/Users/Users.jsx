import React from 'react';
import s from './Users.module.css';
import User from './User/User';

const Users = (props) => {
    return (
        <div className={s.content}>
            {props.users.map(user => {
                return <User user={user} />
            })}
        </div>
    )
}

export default Users;