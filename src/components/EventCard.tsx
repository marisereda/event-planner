import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { formatDateTime, getChipVariant } from '../helpers';
import { Event } from '../interfaces';
import { Button } from './Button';
import { Chip } from './Chip';

interface EventCardProps {
  className?: string;
  event: Event;
}

export function EventCard({
  className,
  event: {
    id,
    title,
    description,
    datetime,
    location,
    category,
    picture,
    priority,
  },
}: EventCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        'group relative overflow-hidden rounded-xl pb-[144px] shadow-sm',
        className,
      )}
    >
      <img
        className="h-[336px] w-full object-cover"
        src={picture}
        alt={title}
      />
      <div className="absolute left-3 top-3 flex gap-3">
        <Chip>{category}</Chip>
        <Chip variant={getChipVariant(priority)}>{priority}</Chip>
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-14 transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex items-center justify-between bg-white/80 px-4 py-2 text-sm text-accent">
          <time>{formatDateTime(datetime)}</time>
          <p>{location}</p>
        </div>
        <div className="h-[200px] bg-white p-4">
          <h3 className="mb-4 font-medium">{title}</h3>
          <p className="line-clamp-3 text-sm">{description}</p>
        </div>
      </div>
      <Button
        className="absolute bottom-4 right-4 ml-auto translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        onClick={() => navigate(`/events/${id}`)}
      >
        More info
      </Button>
    </div>
  );
}
