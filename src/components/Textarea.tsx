import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IconButton } from './IconButton';

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  label: string;
  error?: string;
  onClear?: () => void;
}

export function Textarea({
  className,
  label,
  error,
  placeholder = 'Input',
  disabled,
  required,
  onClear,
  ...props
}: TextareaProps) {
  return (
    <label className={clsx('flex flex-col gap-1', className)}>
      <span
        className={clsx(
          'mb-1 leading-none transition-colors',
          disabled ? 'text-disabled' : 'text-accent',
        )}
      >
        {required ? `${label} *` : label}
      </span>
      <span className="relative grow">
        <textarea
          className={clsx(
            'peer h-full w-full resize-none rounded-md border bg-transparent py-4 pl-3 pr-5 outline-none transition-colors placeholder:text-current disabled:placeholder:text-disabled',
            error ? 'border-error' : 'border-divider focus:border-accent ',
          )}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...props}
        ></textarea>
        <IconButton
          className={clsx(
            'absolute right-3 top-3',
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
