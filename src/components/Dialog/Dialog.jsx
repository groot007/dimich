import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    let path = `/dialog/${props.id}`;

    return <div className={s.user}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.messages}>
        <div className={s.message}>
            <p className={s.messageText}>{props.message}</p>
        </div>
    </div>
}

const Dialog = (props) => {
    console.log(props);
    return (
        <div className={s.dialogsList}>
            <div className={s.userList}>
                {props.users.map(item => {
                    return <User name={item.name} id={item.id} />
                })}
            </div>
            <Message message="Hello" />
        </div>
    )
}

export default Dialog;