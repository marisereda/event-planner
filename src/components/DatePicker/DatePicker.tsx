import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Calendar } from './Calendar';
import { formatDate } from './helpers';

interface DatePickerProps {
  className?: string;
  label?: string;
  value: Date;
  onChange?: (value: Date) => void;
}

export function DatePicker({
  className,
  label = 'Select Date',
  value,
  onChange,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(value);

  return (
    <Popover className={clsx('relative flex flex-col gap-2', className)}>
      <span className="leading-none transition-opacity text-accent ui-open:opacity-0">
        {label}
      </span>

      <Popover.Button className="flex items-center justify-between gap-2 px-3 py-4 transition-colors border rounded-md outline-none border-divider focus:border-accent ui-open:border-accent ui-open:text-accent">
        {({ open }) => (
          <>
            {open ? label : formatDate(value)}
            <Icon
              className="transition-transform text-accent ui-open:-scale-y-100"
              name="chevron-down"
            />
          </>
        )}
      </Popover.Button>

      <Popover.Panel className="absolute inset-x-0 z-40 p-5 space-y-4 translate-y-full bg-white rounded-lg shadow-sm outline-none -bottom-2">
        {({ close }) => (
          <>
            <Calendar selectedDate={selectedDate} onSelect={setSelectedDate} />

            <div className="flex justify-end gap-4">
              <Button variant="secondary" size="sm" onClick={() => close()}>
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  onChange?.(selectedDate);
                  close();
                }}
              >
                Choose date
              </Button>
            </div>
          </>
        )}
      </Popover.Panel>
    </Popover>
  );
}
