import clsx from 'clsx';
import { useState } from 'react';
import { IconButton } from '../IconButton';
import {
  WEEKDAYS,
  formatMonth,
  getDaysInMonth,
  getFirstWeekday,
  isDatesSame,
} from './helpers';

interface CalendarProps {
  className?: string;
  selectedDate: Date;
  onSelect: (date: Date) => void;
}

export function Calendar({ className, selectedDate, onSelect }: CalendarProps) {
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());

  const skipDays = getFirstWeekday(month, year);
  const daysInMonth = getDaysInMonth(month, year);

  const handlePrevMonth = () => {
    if (month <= 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (month >= 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-4">
        <IconButton
          className="transition-colors hover:text-accent-hover"
          icon="chevron-left"
          size="sm"
          onClick={handlePrevMonth}
        />
        <p className="text-sm font-medium">
          {formatMonth(month)} {year}
        </p>
        <IconButton
          className="transition-colors hover:text-accent-hover"
          icon="chevron-right"
          size="sm"
          onClick={handleNextMonth}
        />
      </div>

      <ul className="grid grid-cols-7 py-2 text-xs text-center gap-y-1">
        {WEEKDAYS.map(weekday => (
          <li key={weekday} className="first:text-high last:text-high">
            {weekday}
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-7 text-xs text-center select-none gap-y-1 text-divider">
        {Array(skipDays)
          .fill(undefined)
          .map((_, i) => (
            <li key={i}></li>
          ))}

        {Array(daysInMonth)
          .fill(undefined)
          .map((_, i) => {
            const day = i + 1;
            const isSelected = isDatesSame(
              new Date(year, month, day),
              selectedDate,
            );
            const isToday = isDatesSame(new Date(year, month, day), new Date());
            return (
              <li
                key={day}
                className={clsx('cursor-pointer p-2 hover:text-accent-hover', {
                  'font-semibold text-accent': isToday,
                  'bg-accent text-white hover:bg-accent-hover hover:text-white':
                    isSelected,
                })}
                onClick={() => onSelect(new Date(year, month, day))}
              >
                {day}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
