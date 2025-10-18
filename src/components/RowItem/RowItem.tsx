import s from './RowItem.module.css';
import type { Data } from '../../types/data';

export default function RowItem({ id, img, today, date, status, created }: Data) {
  return (
    <li className={s.rowItem} key={id}>
      <picture>
        <source
          srcSet={`${img.table?.webp.small} 1x, ${img.table?.webp.small} 2x`}
          type='image/webp'
        />
        <source
          srcSet={`${img.table?.png.small} 1x, ${img.table?.png.small} 2x`}
          type='image/png'
        />
        <img
          src={img.table?.png.small}
          alt='Stats image'
          width='86'
          height='86'
          className={s.rowImage}
        />
      </picture>

      <div className={s.rowStatsBlock}>
        <div className={s.rowTodayStatsBlockWrapper}>
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

        <div className={s.rowDateStatsBlockWrapper}>
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

        <div className={s.statusCreatedDataBlock}>
          <p className={s.rowStatus}>{status}</p>
          <p className={s.rowCreated}>{created}</p>
        </div>
      </div>
    </li>
  );
}
