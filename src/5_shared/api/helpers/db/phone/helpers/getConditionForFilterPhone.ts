import { TypePriceSort } from '@/src/3_features/phones/filter/fields/InputSortPrice';
import { FIELD_NOT_SPECIFIED } from '@/src/3_features/phones/filter/types/constants';
import { ListAppliedFilterOptions } from '@/src/3_features/phones/filter/types/types';

export const getConditionForFilterPhone = (
  optionsFilter: ListAppliedFilterOptions
) => {
  if (Object.keys(optionsFilter).length === 0) {
    return;
  }
  return {
    where: {
      brand: {
        some: {
          brandId: optionsFilter.brand_id,
        },
      },
      price: {
        lte: optionsFilter.price_max
          ? Number(optionsFilter.price_max)
          : FIELD_NOT_SPECIFIED,
        gte: optionsFilter.price_min
          ? Number(optionsFilter.price_min)
          : FIELD_NOT_SPECIFIED,
      },
      rating: {
        lte: optionsFilter.rating
          ? Number(optionsFilter.rating)
          : FIELD_NOT_SPECIFIED,
      },
    },
    orderBy: {
      price: optionsFilter.price_sort
        ? (optionsFilter.price_sort as TypePriceSort)
        : FIELD_NOT_SPECIFIED,
    },
  };
};
