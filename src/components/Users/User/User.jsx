import React from 'react';
import s from './User.module.css';

const User = (props) => {
    return (
        <div className={s.content}>
            <img src={props.user.img} alt=""/>
            <span>{props.user.name}</span>
            <span>{props.user.info}</span>
        </div>
    )
}

export default User;