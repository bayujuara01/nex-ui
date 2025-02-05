import {
  type RankingInfo,
  rankings,
  rankItem,
} from '@tanstack/match-sorter-utils';
import { filterFns, type Row } from '@tanstack/react-table';

import {
  type NexTableFilterOption,
  type MRT_Localization,
  type NexRowData,
} from '../types';

const fuzzy = <TData extends NexRowData>(
  row: Row<TData>,
  columnId: string,
  filterValue: number | string,
  addMeta: (item: RankingInfo) => void,
) => {
  const itemRank = rankItem(row.getValue(columnId), filterValue as string, {
    threshold: rankings.MATCHES,
  });
  addMeta(itemRank);
  return itemRank.passed;
};

fuzzy.autoRemove = (val: any) => !val;

const contains = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) =>
  row
    .getValue<number | string>(id)
    .toString()
    .toLowerCase()
    .trim()
    .includes(filterValue.toString().toLowerCase().trim());

contains.autoRemove = (val: any) => !val;

const startsWith = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) =>
  row
    .getValue<number | string>(id)
    .toString()
    .toLowerCase()
    .trim()
    .startsWith(filterValue.toString().toLowerCase().trim());

startsWith.autoRemove = (val: any) => !val;

const endsWith = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) =>
  row
    .getValue<number | string>(id)
    .toString()
    .toLowerCase()
    .trim()
    .endsWith(filterValue.toString().toLowerCase().trim());

endsWith.autoRemove = (val: any) => !val;

const equals = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) =>
  row.getValue<number | string>(id).toString().toLowerCase().trim() ===
  filterValue?.toString().toLowerCase().trim();

equals.autoRemove = (val: any) => !val;

const notEquals = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) =>
  row.getValue<number | string>(id).toString().toLowerCase().trim() !==
  filterValue.toString().toLowerCase().trim();

notEquals.autoRemove = (val: any) => !val;

const greaterThan = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) =>
  !isNaN(+filterValue) && !isNaN(+row.getValue<number | string>(id))
    ? +row.getValue<number | string>(id) > +filterValue
    : row.getValue<number | string>(id).toString().toLowerCase().trim() >
      filterValue?.toString().toLowerCase().trim();

greaterThan.autoRemove = (val: any) => !val;

const greaterThanOrEqualTo = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) => equals(row, id, filterValue) || greaterThan(row, id, filterValue);

greaterThanOrEqualTo.autoRemove = (val: any) => !val;

const lessThan = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) =>
  !isNaN(+filterValue) && !isNaN(+row.getValue<number | string>(id))
    ? +row.getValue<number | string>(id) < +filterValue
    : row.getValue<number | string>(id).toString().toLowerCase().trim() <
      filterValue?.toString().toLowerCase().trim();

lessThan.autoRemove = (val: any) => !val;

const lessThanOrEqualTo = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValue: number | string,
) => equals(row, id, filterValue) || lessThan(row, id, filterValue);

lessThanOrEqualTo.autoRemove = (val: any) => !val;

const between = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValues: [number | string, number | string],
) =>
  ((['', undefined] as any[]).includes(filterValues[0]) ||
    greaterThan(row, id, filterValues[0])) &&
  ((!isNaN(+filterValues[0]) &&
    !isNaN(+filterValues[1]) &&
    +filterValues[0] > +filterValues[1]) ||
    (['', undefined] as any[]).includes(filterValues[1]) ||
    lessThan(row, id, filterValues[1]));

between.autoRemove = (val: any) => !val;

const betweenInclusive = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  filterValues: [number | string, number | string],
) =>
  ((['', undefined] as any[]).includes(filterValues[0]) ||
    greaterThanOrEqualTo(row, id, filterValues[0])) &&
  ((!isNaN(+filterValues[0]) &&
    !isNaN(+filterValues[1]) &&
    +filterValues[0] > +filterValues[1]) ||
    (['', undefined] as any[]).includes(filterValues[1]) ||
    lessThanOrEqualTo(row, id, filterValues[1]));

betweenInclusive.autoRemove = (val: any) => !val;

const empty = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  _filterValue: number | string,
) => !row.getValue<number | string>(id).toString().trim();

empty.autoRemove = (val: any) => !val;

const notEmpty = <TData extends NexRowData>(
  row: Row<TData>,
  id: string,
  _filterValue: number | string,
) => !!row.getValue<number | string>(id).toString().trim();

notEmpty.autoRemove = (val: any) => !val;

export const NexTableFilterFns = {
  ...filterFns,
  between,
  betweenInclusive,
  contains,
  empty,
  endsWith,
  equals,
  fuzzy,
  greaterThan,
  greaterThanOrEqualTo,
  lessThan,
  lessThanOrEqualTo,
  notEmpty,
  notEquals,
  startsWith,
};

export function localizedFilterOption(
  localization: MRT_Localization,
  option: NexTableFilterOption,
) {
  if (!option) {
    return '';
  }
  const key = `filter${option[0].toUpperCase()}${option.slice(1)}`;
  return localization[key as keyof MRT_Localization] ?? '';
}
