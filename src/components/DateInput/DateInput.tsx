import { useId, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './DateInput.module.css';
import { uk } from 'date-fns/locale/uk';
import './overWriteStyles.css';

registerLocale('uk', uk);

export default function DateInput() {
  const [selectedDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const fromInputID = useId();
  const toInputID = useId();

  return (
    <>
      <label htmlFor={fromInputID} className={s.dateInputLabel}>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setStartDate(date)}
          selectsStart
          startDate={selectedDate}
          placeholderText='from'
          id={fromInputID}
          dateFormat='dd_MM_yyyy'
          locale='ua'
          className={s.dateInput}
          calendarClassName={s.customCalendar}
        />
      </label>

      <label htmlFor={toInputID} className={s.dateInputLabel}>
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          selectsEnd
          endDate={endDate}
          placeholderText='to'
          id={toInputID}
          dateFormat='dd_MM_yyyy'
          locale='ua'
          className={s.dateInput}
          calendarClassName={s.customCalendar}
        />
      </label>
    </>
  );
}
