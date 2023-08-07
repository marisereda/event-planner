import clsx from 'clsx';

interface TitleProps {
  children: string;
  className?: string;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={clsx(
        'text-lg font-semibold text-neutral md:text-xl',
        className,
      )}
    >
      {children}
    </h1>
  );
};
