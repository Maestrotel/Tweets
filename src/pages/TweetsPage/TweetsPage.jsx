import React from 'react';

// import banner from '../../assets/banner.png';
// import { ReactComponent as Search } from '../../assets/search.svg';
import TweetCard from '../../components/TweetCard/TweetCard';
import css from './TweetsPage.module.css';

function TweetsPage() {
  return (
    <div className={css.container}>
      <TweetCard />
    </div>
  );
}

export default TweetsPage;

// className={css.posterStyle}
