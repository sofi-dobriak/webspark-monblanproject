import DateInput from '../DateInput/DateInput';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <a href='/'>
        <picture>
          <source srcSet='/images/logo.webp 1x, /images/logo@2x.webp 2x' type='image/webp' />
          <source srcSet='/images/logo.png 1x, /images/logo@2x.png 2x' type='image/png' />
          <img src='/images/logo.png' alt='Logo' width='138' height='138' />
        </picture>
      </a>

      <div className={s.headerTextBlockWrapper}>
        <div className={s.titleDateContainer}>
          <h1 className={s.title}>monblanproject</h1>
          <p className={s.date}>Start on 17-02-2016</p>
        </div>

        <ul className={s.statsList}>
          <li className={s.statsItem}>
            <p className={s.statsText}>
              <span>870</span> posts
            </p>
          </li>
          <li className={s.statsItem}>
            <p className={s.statsText}>
              <span>11,787</span> followers
            </p>
          </li>
          <li className={s.statsItem}>
            <p className={s.statsText}>
              <span>112</span> following
            </p>
          </li>
        </ul>

        <div className={s.formContainer}>
          <h2 className={s.formTitle}>Date</h2>
          <DateInput />
        </div>
      </div>
    </header>
  );
}
