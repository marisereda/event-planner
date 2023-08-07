import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import { formatTime, getTimeParts } from '../../helpers';
import { Icon } from '../Icon';
import { Time, TimeParts } from './Time';

interface TimePickerProps {
  className?: string;
  label?: string;
  value: Date;
  onChange?: (value: Date) => void;
}

export function TimePicker({
  className,
  label = 'Select Time',
  value,
  onChange,
}: TimePickerProps) {
  const handleChange = ({ hours, minutes, isPM }: TimeParts) => {
    const newTime = new Date(value);
    let newHours: number;
    if (isPM) {
      newHours = hours < 12 ? hours + 12 : 12;
    } else {
      newHours = hours < 12 ? hours : 0;
    }
    newTime.setHours(newHours);
    newTime.setMinutes(minutes);
    onChange?.(newTime);
  };

  return (
    <Popover className={clsx('relative flex flex-col gap-2', className)}>
      <span className="leading-none text-accent transition-opacity ui-open:opacity-0">
        {label}
      </span>

      <Popover.Button className="flex items-center justify-between gap-2 rounded-md border border-divider px-3 py-4 outline-none transition-colors focus:border-accent ui-open:border-accent ui-open:text-accent">
        {({ open }) => (
          <>
            {open ? label : formatTime(value)}
            <Icon
              className="text-accent transition-transform ui-open:-scale-y-100"
              name="chevron-down"
            />
          </>
        )}
      </Popover.Button>

      <Popover.Panel className="absolute inset-x-0 -bottom-2 z-40 translate-y-full rounded-md bg-white px-4 shadow-sm outline-none">
        <Time timeParts={getTimeParts(value)} onChange={handleChange} />
      </Popover.Panel>
    </Popover>
  );
}
