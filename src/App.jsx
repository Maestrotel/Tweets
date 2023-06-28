import { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './App.module.css';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);
// const DetailsMoviePage = lazy(() =>
//   import('pages/DetailsMoviePage/DetailsMoviePage')
// );

const App = () => {
  return (
    <>
      <header className={css.Header}>
        <nav className={css.NavPart}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/tweets"
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
          >
            Tweets
          </NavLink>
        </nav>
      </header>
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tweets" element={<TweetsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/movies/:movieId/*" element={<DetailsMoviePage />} /> */}
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
