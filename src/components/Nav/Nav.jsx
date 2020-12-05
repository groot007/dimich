import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialog" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;