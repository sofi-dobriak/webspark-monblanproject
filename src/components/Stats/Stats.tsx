import CardList from '../CardList/CardList';
import Container from '../Container/Container';
import s from './Stats.module.css';

export default function Stats() {
  return (
    <main>
      <section className={s.statsSection}>
        <Container>
          <ul className={s.buttonList}>
            <li className={s.buttonItem}>
              <button
                className={s.buttonButton}
                aria-label='Button for displaying data in the form of cards'
              >
                <svg width='22' height='22' className={s.buttonIcon}>
                  <use href='/images/icons.svg#icon-cards'></use>
                </svg>
              </button>
            </li>
            <li className={s.buttonItem}>
              <button className={s.buttonButton} aria-label='Button to display data in rows'>
                <svg width='24' height='22' className={s.buttonIcon}>
                  <use href='/images/icons.svg#icon-rows'></use>
                </svg>
              </button>
            </li>
          </ul>

          <CardList />

          <button
            aria-label='Button for loading the next part of data'
            type='button'
            className={s.loadMoreButton}
          >
            LOAD MORE
          </button>
        </Container>
      </section>
    </main>
  );
}
