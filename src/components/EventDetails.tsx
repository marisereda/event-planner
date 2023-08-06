import clsx from 'clsx';
import { getChipVariant, getRandomPicrure } from '../helpers';
import { Event } from '../interfaces';
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
  const imgSrc =
    picture || getRandomPicrure({ seed: title, width: 640, height: 640 });
  const chipVariant = getChipVariant(priority);

  const handleEdit = () => {
    console.log('🚧 Edit event:', id);
  };

  const handleDelete = () => {
    console.log('🚧 Delete event:', id);
  };

  return (
    <div className={clsx('rounded-md bg-white shadow-sm', className)}>
      <img
        className="aspect-[16/10] w-full rounded-md object-cover"
        src={imgSrc}
        alt={title}
      />
      <div className="px-6 pb-10 pt-6">
        <p className="mb-6 text-sm">{description}</p>
        <div className="mb-10 flex flex-wrap gap-3">
          <Chip>{category}</Chip>
          <Chip variant={chipVariant}>{priority}</Chip>
          {location && <Chip>{location}</Chip>}
          <Chip>{datetime}</Chip>
        </div>
        <div className="flex gap-6 md:justify-end md:gap-4">
          <Button
            className="basis-1/2 md:basis-auto"
            variant="secondary"
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button className="basis-1/2 md:basis-auto" onClick={handleDelete}>
            Delete event
          </Button>
        </div>
      </div>
    </div>
  );
}
