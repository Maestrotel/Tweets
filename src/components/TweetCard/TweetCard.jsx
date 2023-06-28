import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import squares from '../../assets/squares.png';
// import avatar from '../../assets/avatar.jpg';
// import ellipse from '../../assets/ellipse.png';
import css from './TweetCard.module.css';
import 'typeface-montserrat';
import Avatar from '../Avatar/Avatar';

function TweetCard() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [count, setCount] = useState(100500);

  useEffect(() => {
    // Перевірка, чи є збережений стан у localStorage
    const savedIsFollowing = localStorage.getItem('isFollowing');
    const savedCount = localStorage.getItem('count');

    if (savedIsFollowing !== null) {
      setIsFollowing(savedIsFollowing === 'true');
    }

    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  useEffect(() => {
    // Збереження стану в localStorage при зміні
    localStorage.setItem('isFollowing', isFollowing.toString());
    localStorage.setItem('count', count.toString());
  }, [isFollowing, count]);

  const toggleFollow = () => {
    if (isFollowing) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setIsFollowing(!isFollowing);
  };

  const formattedCount = count.toLocaleString('en-US');

  return (
    <ul className={css.cardList}>
      <li className={css.cardStyle}>
        <img className={css.logoStyle} src={logo} alt="logo" />
        <img className={css.squaresStyle} src={squares} alt="squares" />
        <Avatar />
        <div className={css.textStyle}>
          <p
            className={css.tweetsStyle}
            style={{ fontFamily: 'Montserrat, sans-serif', marginBottom: 16 }}
          >
            777 tweets
          </p>
          <p
            className={css.followersStyle}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: 0,
              marginBottom: 26,
            }}
          >
            {formattedCount} followers
          </p>
        </div>
        <button
          id="followButton"
          className={`follow-button ${css.buttonStyle} ${
            isFollowing ? 'following' : ''
          }`}
          style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
          onClick={toggleFollow}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </li>
    </ul>
  );
}

export default TweetCard;
