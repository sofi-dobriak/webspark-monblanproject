import { useState } from 'react';
import s from './CardList.module.css';
import data from '../../../public/data.json';
import CardItem from '../CardItem/CardItem';
import type { Data } from '../../types/data';

export default function CardList() {
  const [cards, setCards] = useState<Data[]>(data);
  const cardsToDisplay = cards.slice(0, 8);

  return (
    <ul className={s.cardsList}>
      {cardsToDisplay.map(card => (
        <CardItem {...card} />
      ))}
    </ul>
  );
}
