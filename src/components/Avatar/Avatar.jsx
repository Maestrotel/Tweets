import React from 'react';
import avatar from '../../assets/avatar.jpg';
import ellipse from '../../assets/ellipse.png';
import css from './Avatar.module.css';

function Avatar() {
  return (
    <>
      <img className={css.avatarStyle} src={avatar} alt="avatar" />
      <img className={css.ellipseStyle} src={ellipse} alt="ellipse" />
      <div className={css.stripeStyle}></div>
    </>
  );
}

export default Avatar;
