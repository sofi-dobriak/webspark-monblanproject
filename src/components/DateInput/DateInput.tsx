import { useId, useRef, useState } from 'react';
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

  const fromDatePickerRef = useRef<DatePicker>(null);
  const toDatePickerRef = useRef<DatePicker>(null);

  return (
    <form className={s.form}>
      <label htmlFor={fromInputID} className={s.dateInputLabel}>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setStartDate(date)}
          selectsStart
          ref={fromDatePickerRef}
          startDate={selectedDate}
          placeholderText='from'
          id={fromInputID}
          dateFormat='dd_MM_yyyy'
          locale='ua'
          className={s.dateInput}
          calendarClassName={s.customCalendar}
        />

        <button
          onClick={() => setStartDate(null)}
          className={s.clearDateButton}
          type='button'
          aria-label='Button for clear date input'
        >
          <svg width='24' height='24' className={s.clearDateIcon}>
            <use href='/images/icons.svg#icon-plus'></use>
          </svg>
        </button>

        <button
          onClick={() => fromDatePickerRef.current?.setOpen(true)}
          type='button'
          aria-label='Button for open calendar'
          className={s.calendarButton}
        >
          <svg width='24' height='24' className={s.calendarIcon}>
            <use href='/images/icons.svg#icon-calendar'></use>
          </svg>
        </button>
      </label>

      <label htmlFor={toInputID} className={s.dateInputLabel}>
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          selectsEnd
          ref={toDatePickerRef}
          endDate={endDate}
          placeholderText='to'
          id={toInputID}
          dateFormat='dd_MM_yyyy'
          locale='ua'
          className={s.dateInput}
          calendarClassName={s.customCalendar}
        />

        <button
          onClick={() => setEndDate(null)}
          className={s.clearDateButton}
          type='button'
          aria-label='Button for clear date input'
        >
          <svg width='24' height='24' className={s.clearDateIcon}>
            <use href='/images/icons.svg#icon-plus'></use>
          </svg>
        </button>

        <button
          onClick={() => toDatePickerRef.current?.setOpen(true)}
          type='button'
          aria-label='Button for open calendar'
          className={s.calendarButton}
        >
          <svg width='24' height='24' className={s.calendarIcon}>
            <use href='/images/icons.svg#icon-calendar'></use>
          </svg>
        </button>
      </label>
    </form>
  );
}
