import { TypePriceSort } from '../fields/InputSortPrice';

export interface FilterPhoneQueryParams {
  brand_id: string | null;
  price_min: number | null;
  price_max: number | null;
  rating: number | null;
  price_sort: TypePriceSort | null;
}
