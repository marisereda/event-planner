import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { IconName } from '../interfaces';
import { Icon } from './Icon';

interface FilterProps {
  className?: string;
  value: string;
  noneOption: string;
  options: string[];
  icon: IconName;
  placeholder: string;
  onChange?: (value: string) => void;
}

export function Filter({
  className,
  value,
  noneOption,
  options,
  icon,
  placeholder,
  onChange,
}: FilterProps) {
  return (
    <Listbox
      as="div"
      className={clsx('relative', className)}
      value={value}
      onChange={onChange}
    >
      <Listbox.Button className="w-full rounded-t-md p-4 shadow-sm outline-none transition-colors ui-not-open:rounded-b-md">
        {({ open, value }) => (
          <span
            className={clsx('flex items-center justify-between gap-2', {
              'text-accent': open || value !== noneOption,
            })}
          >
            {open || value === noneOption ? placeholder : value}
            <Icon name={icon} />
          </span>
        )}
      </Listbox.Button>
      <Listbox.Options className="absolute inset-x-0 bottom-0 z-40 translate-y-full rounded-b-md bg-white shadow-sm outline-none ">
        {[noneOption, ...options].map(option => (
          <Listbox.Option
            className="cursor-pointer border-t border-t-divider px-6 py-2 text-sm text-divider transition-colors ui-selected:text-accent ui-active:text-accent"
            key={option}
            value={option}
          >
            {option}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
