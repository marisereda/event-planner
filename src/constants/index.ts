import { nanoid } from 'nanoid';
import { Event } from '../interfaces';

export const MONTHES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

export const CATEGORY_ALL = 'All';

export const INITIAL_EVENTS: Event[] = [
  {
    id: nanoid(),
    title: 'Tech Startup Showcase',
    description:
      'Witness the future of technology as innovative startups showcase their groundbreaking ideas.',
    datetime: new Date(),
    location: 'Kyiv',
    category: 'Art',
    picture: '/images/startup.jpg',
    priority: 'Low',
  },
  {
    id: nanoid(),
    title: 'Galery Opening',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    datetime: new Date(),
    location: 'Kyiv',
    category: 'Art',
    picture: '/images/galery.jpg',
    priority: 'High',
  },
  {
    id: nanoid(),
    title: 'Innovation Summit',
    description:
      'Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit.',
    datetime: new Date(),
    location: 'Kyiv',
    category: 'Conference',
    picture: '/images/summit.jpg',
    priority: 'Medium',
  },
  {
    id: nanoid(),
    title: 'Leadership conference',
    description:
      'Unlock the secrets of effective leadership at our transformative Success Leadership Conference..',
    datetime: new Date(),
    location: 'Kyiv',
    category: 'Conference',
    picture: '/images/conference.jpg',
    priority: 'Medium',
  },
  {
    id: nanoid(),
    title: 'Summer soiree',
    description:
      'Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.',
    datetime: new Date(),
    location: 'Kyiv',
    category: 'Party',
    picture: '/images/soiree.jpg',
    priority: 'High',
  },
  {
    id: nanoid(),
    title: 'Extreme Adventure Race',
    description:
      'Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.',
    datetime: new Date(),
    location: 'Kyiv',
    category: 'Sport',
    picture: '/images/race.jpg',
    priority: 'Low',
  },
  {
    id: nanoid(),
    title: 'Empower Your Creativity',
    description:
      'Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop. ',
    datetime: new Date(),
    location: 'Kyiv',
    category: 'Workshop',
    picture: '/images/creativity.jpg',
    priority: 'High',
  },
  {
    id: nanoid(),
    title: 'Acoustic Garden Concert',
    description:
      'Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.',
    datetime: new Date(),
    location: 'Kyiv',
    category: 'Music',
    picture: '/images/concert.jpg',
    priority: 'High',
  },
];
