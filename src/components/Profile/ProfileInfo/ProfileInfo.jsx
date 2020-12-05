import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.banner}>
                <img src="https://cf.bstatic.com/images/hotel/max1024x768/468/46842174.jpg" alt="" />
            </div>
            <div className={s.profileInfo}>
                avatar + descr
            </div>
        </div>
    )
}

export default ProfileInfo;