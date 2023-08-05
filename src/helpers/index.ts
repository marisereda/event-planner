import { ChipProps } from '../components/Chip';

export const getRandomPicrure = (params: {
  seed: string;
  width: number;
  height: number;
}) => {
  const { seed, width, height } = params;
  return seed
    ? `https://picsum.photos/seed/${params.seed}/${params.width}/${height}`
    : `https://picsum.photos/${width}/${height}`;
};

export const getChipVariant = (priority: string) => {
  let chipVariant: ChipProps['variant'];
  if (priority === 'High') chipVariant = 'high';
  if (priority === 'Medium') chipVariant = 'medium';
  if (priority === 'Low') chipVariant = 'low';
  return chipVariant;
};
