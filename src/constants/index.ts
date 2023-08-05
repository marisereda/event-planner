import { nanoid } from 'nanoid';
import { Event } from '../interfaces';

export const PRIORITIES = ['High', 'Medium', 'Low'];

export const CATEGORIES = [
  'Art',
  'Music',
  'Business',
  'Conference',
  'Workshops',
  'Party',
  'Sport',
];

export const CATEGORY_ALL = 'All categories';

export const INITIAL_EVENTS: Event[] = [
  {
    id: nanoid(),
    title: 'Tech Startup Showcase',
    description:
      'Witness the future of technology as innovative startups showcase their groundbreaking ideas.',
    datetime: '12.07 at 12:00',
    location: 'Kyiv',
    category: 'Art',
    picture: '',
    priority: 'Low',
  },
  {
    id: nanoid(),
    title: 'Galery Opening',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    datetime: '12.07 at 12:00',
    location: 'Kyiv',
    category: 'Art',
    picture: '',
    priority: 'High',
  },
  {
    id: nanoid(),
    title: 'Innovation Summit',
    description:
      'Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit.',
    datetime: '12.07 at 12:00',
    location: 'Kyiv',
    category: 'Conference',
    picture: '',
    priority: 'Medium',
  },
];
