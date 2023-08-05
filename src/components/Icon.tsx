import clsx from 'clsx';
import sprite from '../assets/icons.svg';
import { IconName } from '../interfaces';

interface IconProps {
  className?: string;
  name: IconName;
}

export function Icon({ className, name }: IconProps) {
  return (
    <svg
      className={clsx(
        'inline-block h-6 w-6 fill-current stroke-current',
        className,
      )}
    >
      <use href={sprite + '#' + name}></use>
    </svg>
  );
}
