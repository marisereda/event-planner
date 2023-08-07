export type IconName =
  | 'arrow-up'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'cross'
  | 'filters-2'
  | 'filters-3'
  | 'plus'
  | 'search';

export interface Event {
  id: string;
  title: string;
  description?: string;
  datetime: Date;
  location?: string;
  category: string;
  picture?: string;
  priority: string;
}
