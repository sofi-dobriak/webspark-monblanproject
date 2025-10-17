import s from './RowList.module.css';
import list from '../../../public/data.json';
import type { Data } from '../../types/data';
import RowItem from '../RowItem/RowItem';
import { useState } from 'react';

export default function RowList() {
  const [tableList, setTableList] = useState<Data[]>(list);

  return (
    <ul className={s.rowList}>
      {tableList.map(item => (
        <RowItem {...item} />
      ))}
    </ul>
  );
}
