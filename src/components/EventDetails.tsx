import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatDateTime, getChipVariant } from '../helpers';
import { Event } from '../interfaces';
import { deleteEvent } from '../redux/eventsSlice';
import { Button } from './Button';
import { Chip } from './Chip';

interface EventDetailsProps {
  className?: string;
  event: Event;
}

export function EventDetails({
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
}: EventDetailsProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={clsx('rounded-md bg-white shadow-sm', className)}>
      <img
        className="aspect-[16/10] w-full rounded-md object-cover md:aspect-[5/2]"
        src={picture}
        alt={title}
      />
      <div className="px-6 pb-10 pt-6">
        <p className="mb-6 text-sm">{description}</p>
        <div className="mb-10 flex flex-wrap gap-3">
          <Chip>{category}</Chip>
          <Chip variant={getChipVariant(priority)}>{priority}</Chip>
          <Chip>{location}</Chip>
          <Chip>{formatDateTime(datetime)}</Chip>
        </div>
        <div className="flex gap-6 md:justify-end md:gap-4">
          <Button
            className="basis-1/2 text-xs md:basis-auto md:text-sm"
            variant="secondary"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit
          </Button>
          <Button
            className="basis-1/2 text-xs md:basis-auto md:text-sm"
            onClick={() => {
              dispatch(deleteEvent(id));
              navigate('/');
            }}
          >
            Delete event
          </Button>
        </div>
      </div>
    </div>
  );
}
