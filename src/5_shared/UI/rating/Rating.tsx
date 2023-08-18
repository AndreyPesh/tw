import { FC } from 'react';
import StarRating from './StarRating';
import classNames from 'classnames';

const Rating: FC<{ rating: number; empty?: boolean }> = ({ rating, empty }) => {
  return (
    <div className="flex items-center space-x-1">
      <StarRating rating={rating} />
      <b className={classNames({ hidden: empty })}>{rating}</b>
    </div>
  );
};

export default Rating;
