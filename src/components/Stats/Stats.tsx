import { useState } from 'react';
import CardList from '../CardList/CardList';
import Container from '../Container/Container';
import s from './Stats.module.css';
import RowList from '../RowList/RowList';
import clsx from 'clsx';

export default function Stats() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const handleShowTable = () => setCardsVisible(false);
  const handleShowCards = () => setCardsVisible(true);
  const handleLoadMore = () => setLoadMore(true);

  return (
    <main>
      <section className={s.statsSection}>
        <Container>
          <ul className={s.buttonList}>
            <li className={s.buttonItem}>
              <button
                onClick={handleShowCards}
                className={s.buttonButton}
                aria-label='Button for displaying data in the form of cards'
              >
                <svg
                  width='22'
                  height='22'
                  className={clsx(s.buttonIcon, cardsVisible && s.active)}
                >
                  <use href='/images/icons.svg#icon-cards'></use>
                </svg>
              </button>
            </li>

            <li className={s.buttonItem}>
              <button
                onClick={handleShowTable}
                className={s.buttonButton}
                aria-label='Button to display data in rows'
              >
                <svg
                  width='24'
                  height='22'
                  className={clsx(s.buttonIcon, !cardsVisible && s.active)}
                >
                  <use href='/images/icons.svg#icon-rows'></use>
                </svg>
              </button>
            </li>
          </ul>

          {cardsVisible ? <CardList /> : <RowList />}

          {!loadMore && (
            <button
              onClick={handleLoadMore}
              aria-label='Button for loading the next part of data'
              type='button'
              className={s.loadMoreButton}
            >
              LOAD MORE
            </button>
          )}

          {loadMore && <p className={s.loadMoreInfo}>All data loaded 🎉</p>}
        </Container>
      </section>
    </main>
  );
}
