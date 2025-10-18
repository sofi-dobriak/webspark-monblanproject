import s from './CardItem.module.css';
import type { Data } from '../../types/data';

export default function CardItem({ id, img, today, date, status, created }: Data) {
  return (
    <li className={s.cardItem} key={id}>
      <picture>
        <source
          srcSet={`${img.cards?.webp.small} 1x, ${img.cards?.webp.small} 2x`}
          type='image/webp'
        />
        <source
          srcSet={`${img.cards?.png.small} 1x, ${img.cards?.png.small} 2x`}
          type='image/png'
        />
        <img
          src={img.cards?.png.small}
          alt='Stats image'
          width='203'
          height='203'
          className={s.cardImage}
        />
      </picture>

      <div className={s.cardTextBlock}>
        <div className={s.cardStatsBlock}>
          <div className={s.todayStatBlockWrapper}>
            <h2 className={s.todayTitle}>{today.title}</h2>

            <ul className={s.todayList}>
              <li className={s.todayItem}>
                <svg width={18} height={18}>
                  <use href='/images/icons.svg#icon-heart'></use>
                </svg>
                <p className={s.likes}>{today.likes}</p>
              </li>
              <li className={s.todayItem}>
                <svg width={18} height={18}>
                  <use href='/images/icons.svg#icon-comment'></use>
                </svg>
                <p className={s.comments}>{today.comments}</p>
              </li>
            </ul>
          </div>

          <div className={s.dateStatBlockWrapper}>
            <h2 className={s.dateTitle}>{date.title}</h2>

            <ul className={s.dateList}>
              <li className={s.dateItem}>
                <svg width={18} height={18}>
                  <use href='/images/icons.svg#icon-heart'></use>
                </svg>
                <p className={s.likes}>{date.likes}</p>
              </li>
              <li className={s.dateItem}>
                <svg width={18} height={18}>
                  <use href='/images/icons.svg#icon-comment'></use>
                </svg>
                <p className={s.comments}>{date.comments}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.statusCreatedDataBlock}>
          <p className={s.cardStatus}>{status}</p>
          <p className={s.cardCreated}>{created}</p>
        </div>
      </div>
    </li>
  );
}
