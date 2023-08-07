import clsx from 'clsx';
import { useState } from 'react';
import { CATEGORIES, PRIORITIES } from '../constants';
import { Event } from '../interfaces';
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
  const [title, setTitle] = useState(event?.title ?? '');
  const [description, setDescription] = useState(event?.description ?? '');
  const [dateTime, setDateTime] = useState(event?.datetime ?? new Date());
  const [location, setLocation] = useState(event?.location ?? '');
  const [category, setCategory] = useState(event?.category ?? CATEGORIES[0]);
  const [priority, setPriority] = useState(event?.priority ?? PRIORITIES[0]);

  return (
    <form
      className={clsx(
        'bg-white px-4 py-10 shadow-md md:px-6 xl:px-10',
        className,
      )}
    >
      <div className="mb-10 grid grid-cols-1 gap-5 md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-x-6 xl:mb-15 xl:grid-cols-3 xl:grid-rows-3 xl:gap-x-10">
        <Input
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Textarea
          className="row-span-2"
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <DatePicker value={dateTime} onChange={setDateTime} />
        <TimePicker value={dateTime} onChange={setDateTime} />
        <Input
          label="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
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
      <Button className="w-full md:ml-auto md:w-auto md:min-w-[190px]">
        {event ? 'Save' : 'Add event'}
      </Button>
    </form>
  );
}
