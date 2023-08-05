import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { Icon, IconName } from './Icon';

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: IconName;
}

export function IconButton({ className, icon, ...props }: IconButtonProps) {
  return (
    <button
      className={clsx(
        'rounded rounded-full p-1 active:scale-95 disabled:text-disabled',
        className,
      )}
      {...props}
    >
      <Icon name={icon} />
    </button>
  );
}
