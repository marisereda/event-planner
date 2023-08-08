import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, PRIORITIES } from '../constants';
import { getRandomPicrure } from '../helpers';
import { Event } from '../interfaces';
import { createEvent, updateEvent } from '../redux/eventsSlice';
import { Button } from './Button';
import { DatePicker } from './DatePicker';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { TimePicker } from './TimePicker';

interface EventFormProps {
  className?: string;
  event?: Event;
}

export function EventForm({ className, event }: EventFormProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(event?.title ?? '');
  const [description, setDescription] = useState(event?.description ?? '');
  const [datetime, setDatetime] = useState(event?.datetime ?? Date.now());
  const [location, setLocation] = useState(event?.location ?? '');
  const [category, setCategory] = useState(event?.category ?? CATEGORIES[0]);
  const [priority, setPriority] = useState(event?.priority ?? PRIORITIES[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newEvent: Event;
    if (event) {
      newEvent = {
        id: event.id,
        title,
        description,
        datetime,
        location,
        category,
        picture: event.picture,
        priority,
      };
      dispatch(updateEvent(newEvent));
    } else {
      newEvent = {
        id: nanoid(),
        title,
        description,
        datetime,
        location,
        category,
        picture: getRandomPicrure({ seed: title }),
        priority,
      };
      dispatch(createEvent(newEvent));
    }
    navigate(`/events/${newEvent.id}`);
  };

  return (
    <form
      className={clsx(
        'bg-white px-4 py-10 shadow-md md:px-6 xl:px-10',
        className,
      )}
      onSubmit={handleSubmit}
    >
      <div className="mb-10 grid grid-cols-1 gap-5 md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-x-6 xl:mb-15 xl:grid-cols-3 xl:grid-rows-3 xl:gap-x-10">
        <Input
          label="Title"
          value={title}
          required
          onChange={e => setTitle(e.target.value)}
          onClear={() => setTitle('')}
        />
        <Textarea
          className="row-span-2"
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          onClear={() => setDescription('')}
        />
        <DatePicker value={datetime} onChange={setDatetime} />
        <TimePicker value={datetime} onChange={setDatetime} />
        <Input
          label="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          onClear={() => setLocation('')}
        />
        <Select
          label="Category"
          value={category}
          options={CATEGORIES}
          onChange={setCategory}
        />
        <Input label="Add picture" disabled />
        <Select
          label="Priority"
          value={priority}
          options={PRIORITIES}
          onChange={setPriority}
        />
      </div>
      <Button
        className="w-full md:ml-auto md:w-auto md:min-w-[190px]"
        type="submit"
      >
        {event ? 'Save' : 'Add event'}
      </Button>
    </form>
  );
}
