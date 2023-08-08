import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IconButton } from './IconButton';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  error?: string;
  onClear?: () => void;
}

export function Input({
  className,
  label,
  error,
  placeholder = 'Input',
  disabled,
  required,
  onClear,
  ...props
}: InputProps) {
  return (
    <label className={clsx('flex flex-col gap-2', className)}>
      <span
        className={clsx(
          'leading-none transition-colors',
          disabled ? 'text-disabled' : 'text-accent',
        )}
      >
        {required ? `${label} *` : label}
      </span>
      <span className="relative">
        <input
          className={clsx(
            'peer w-full rounded-md border bg-transparent px-3 py-4 outline-none transition-colors placeholder:text-current disabled:placeholder:text-disabled',
            error ? 'border-error' : 'border-divider focus:border-accent ',
          )}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...props}
        />
        <IconButton
          className={clsx(
            'absolute right-3 top-1/2 -translate-y-1/2',
            error ? 'text-error' : 'text-accent',
          )}
          icon="cross"
          disabled={disabled}
          onClick={onClear}
        />
        {error && (
          <span className="absolute -bottom-1 right-0 translate-y-full text-xs text-error">
            {error}
          </span>
        )}
      </span>
    </label>
  );
}
