import { useState } from 'react';
import { Button } from './components/Button';
import { Chip } from './components/Chip';
import { EventCard } from './components/EventCard';
import { EventDetails } from './components/EventDetails';
import { Filter } from './components/Filter';
import { Input } from './components/Input';
import { Search } from './components/Search';
import { Select } from './components/Select';
import { Textarea } from './components/Textarea';
import {
  CATEGORIES,
  CATEGORY_ALL,
  INITIAL_EVENTS,
  PRIORITIES,
} from './constants';

export function App() {
  const [priority, setPriority] = useState(PRIORITIES[0]);
  const [category, setCategory] = useState(CATEGORY_ALL);

  return (
    <main>
      <div className="container my-10 space-y-10 rounded-xl bg-white p-10 shadow-md">
        <div className="flex items-center gap-6">
          <Button variant="primary" size="sm">
            Primary Sm
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Sm
          </Button>
          <Button variant="primary" size="md">
            Primary Md
          </Button>
          <Button variant="primary" size="lg" icon="plus">
            Primary Lg Icon
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <Chip>Default</Chip>
          <Chip variant="high">High</Chip>
          <Chip variant="medium">Medium</Chip>
          <Chip variant="low">Low</Chip>
          <Search className="w-1/2" />
        </div>

        <div className="flex items-center gap-6">
          <Select
            className="w-1/4"
            label="Priority"
            value={priority}
            options={PRIORITIES}
            onChange={setPriority}
          />
          <Filter
            className="w-1/6"
            value={category}
            noneOption={CATEGORY_ALL}
            options={CATEGORIES}
            icon="filters-3"
            placeholder="Category"
            onChange={setCategory}
          />
        </div>

        <div className="flex gap-6">
          <div className="flex w-1/4 flex-col gap-6">
            <Input label="Normal" />
            <Input label="Disabled" disabled />
            <Input label="With error" error="Invalid input" />
          </div>
          <Textarea className="w-1/4" label="Normal" />
          <Textarea className="w-1/4" label="Disabled" disabled />
          <Textarea
            className="w-1/4"
            label="With error"
            error="Invalid input"
          />
        </div>

        <div className="flex items-center gap-6">
          {INITIAL_EVENTS.map(event => (
            <EventCard key={event.id} className="w-[332px]" event={event} />
          ))}
        </div>

        <div className="flex items-center gap-6">
          <EventDetails className="w-1/2" event={INITIAL_EVENTS[0]} />
        </div>
      </div>
    </main>
  );
}
