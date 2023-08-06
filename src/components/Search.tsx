import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IconButton } from './IconButton';

interface SearchProps extends ComponentPropsWithoutRef<'input'> {}

export function Search({
  className,
  placeholder = 'Search by keywords',
  ...props
}: SearchProps) {
  return (
    <label className={clsx('relative', className)}>
      <input
        className="peer w-full rounded-lg bg-white py-4 pl-12 pr-9 text-sm text-accent shadow-sm outline-none transition-colors placeholder:text-sm placeholder:font-light placeholder:text-neutral-light"
        placeholder={placeholder}
        {...props}
      />
      <IconButton
        className="absolute left-3 top-1/2 -translate-y-1/2 text-accent"
        icon="search"
      />
      <IconButton
        className="absolute right-3 top-1/2 -translate-y-1/2 text-accent transition-opacity peer-placeholder-shown:opacity-0"
        icon="cross"
      />
    </label>
  );
}
