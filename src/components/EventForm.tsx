import clsx from 'clsx';
import { CATEGORIES, PRIORITIES } from '../constants';
import { Button } from './Button';
import { DatePicker } from './DatePicker';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';

interface EventFormProps {
  className?: string;
}

export function EventForm({ className }: EventFormProps) {
  return (
    <form
      className={clsx(
        'bg-white px-4 py-10 shadow-md md:px-6 xl:px-10',
        className,
      )}
    >
      <div className="grid grid-cols-1 gap-5 mb-10 md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-x-6 xl:mb-15 xl:grid-cols-3 xl:grid-rows-3 xl:gap-x-10">
        <Input className="" label="Title" />
        <Textarea className="row-span-2" label="Description" />
        <DatePicker className="" label="Select date" value={new Date()} />
        <Input className="" label="Select time" />
        <Input className="" label="Location" />
        <Select
          className=""
          label="Category"
          value={CATEGORIES[0]}
          options={CATEGORIES}
        />
        <Input className="" label="Add picture" disabled />
        <Select
          className=""
          label="Priority"
          value={PRIORITIES[0]}
          options={PRIORITIES}
        />
      </div>
      <Button className="w-full md:ml-auto md:w-auto">Add event</Button>
    </form>
  );
}
