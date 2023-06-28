import React from 'react';

// import banner from '../../assets/banner.png';
// import { ReactComponent as Search } from '../../assets/search.svg';
// import TweetCard from '../../components/TweetCard/TweetCard';
import css from './HomePage.module.css';

function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.theme}>
        {/* <div></div>
      <div>
        <form className={css.searchPanel}> */}
        {/* <Search className={css.searchStyle} /> */}
        {/* </form>
      </div> */}
        <p>Hello, User</p>
      </div>
      {/* <TweetCard /> */}
    </div>
  );
}

export default HomePage;

// className={css.posterStyle}
