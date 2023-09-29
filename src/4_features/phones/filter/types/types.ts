import { FilterPhoneQueryParams } from './interfaces';

export type ListParamsFilterPhone = Array<keyof FilterPhoneQueryParams>;

export type ListAppliedFilterOptions = Partial<
  Record<keyof FilterPhoneQueryParams, string>
>;
