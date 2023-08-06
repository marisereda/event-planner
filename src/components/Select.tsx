import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { Icon } from './Icon';

interface SelectProps {
  className?: string;
  label: string;
  value: string;
  options: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function Select({
  className,
  label,
  value,
  options,
  placeholder = 'Select',
  onChange,
}: SelectProps) {
  return (
    <Listbox
      as="div"
      className={clsx('relative flex flex-col gap-2', className)}
      value={value}
      onChange={onChange}
    >
      <span className="text-accent transition-opacity ui-open:opacity-0">
        {label}
      </span>
      <Listbox.Button className="flex items-center justify-between gap-2 rounded-md border border-divider px-3 py-4 outline-none transition-colors focus:border-accent ui-open:border-accent ui-open:text-accent">
        {({ open, value }) => (
          <>
            {open ? `${placeholder} ${label}` : value}
            <Icon
              className="text-accent transition-transform ui-open:-scale-y-100"
              name="chevron-down"
            />
          </>
        )}
      </Listbox.Button>
      <Listbox.Options className="absolute inset-x-0 -bottom-2 z-40 translate-y-full divide-y divide-divider rounded-md bg-white px-3 shadow-sm outline-none ">
        {options.map(option => (
          <Listbox.Option
            className="cursor-pointer py-4 transition-colors ui-selected:text-accent ui-active:text-accent"
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
