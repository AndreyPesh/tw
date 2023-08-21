import { TypePriceSort } from '../fields/InputSortPrice';

export interface FilterFormState {
  brand_id: string;
  price_min: number | null;
  price_max: number | null;
  rating: number;
  price_sort: TypePriceSort | null;
}
