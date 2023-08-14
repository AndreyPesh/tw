import { FC } from 'react';
import StarRating from './StarRating';

const Rating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      <StarRating rating={rating} />
      <b>{rating}</b>
    </div>
  );
};

export default Rating;
