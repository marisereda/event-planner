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
    id: 'AYFQZtGAeJ9m0DZnps0f2',
    title: 'Tech Startup Showcase',
    description:
      'Witness the future of technology as innovative startups showcase their groundbreaking ideas.',
    datetime: 1697014800000,
    location: 'Kyiv',
    category: 'Art',
    picture: '/images/startup.jpg',
    priority: 'Low',
  },
  {
    id: '4u6GuMsOJkgelI_0_iOOB',
    title: 'Galery Opening',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    datetime: 1694433600000,
    location: 'Kyiv',
    category: 'Art',
    picture: '/images/galery.jpg',
    priority: 'High',
  },
  {
    id: '-FKi8espmw2gvf5NJnj8M',
    title: 'Innovation Summit',
    description:
      'Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit.',
    datetime: 1695018600000,
    location: 'Kyiv',
    category: 'Conference',
    picture: '/images/summit.jpg',
    priority: 'Medium',
  },
  {
    id: 'GO_XXHQfrTqjKPpLbR_B4',
    title: 'Leadership conference',
    description:
      'Unlock the secrets of effective leadership at our transformative Success Leadership Conference..',
    datetime: 1695635100000,
    location: 'Kyiv',
    category: 'Conference',
    picture: '/images/conference.jpg',
    priority: 'Medium',
  },
  {
    id: 'y3SXshrJhJU06D8XHXPP_',
    title: 'Summer soiree',
    description:
      'Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.',
    datetime: 1696515000000,
    location: 'Kyiv',
    category: 'Party',
    picture: '/images/soiree.jpg',
    priority: 'High',
  },
  {
    id: 'JQwY4lPk92BAvGkuMTkMl',
    title: 'Extreme Adventure Race',
    description:
      'Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.',
    datetime: 1697024700000,
    location: 'Kyiv',
    category: 'Sport',
    picture: '/images/race.jpg',
    priority: 'Low',
  },
  {
    id: 'Df7jDqbbSIGKaLX4yIP3N',
    title: 'Empower Your Creativity',
    description:
      'Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop. ',
    datetime: 1697356800000,
    location: 'Kyiv',
    category: 'Workshop',
    picture: '/images/creativity.jpg',
    priority: 'High',
  },
  {
    id: 'cWSjfR14-6G2QtJgGXDjl',
    title: 'Acoustic Garden Concert',
    description:
      'Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.',
    datetime: 1698049200000,
    location: 'Kyiv',
    category: 'Music',
    picture: '/images/concert.jpg',
    priority: 'High',
  },
];
