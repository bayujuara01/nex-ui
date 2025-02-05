import {
  type NexRowData,
  type NexTableTableInstance,
  type NexTableTableOptions,
} from '../types';
import { useNexTableInstance } from './useNexTableInstance';
import { useNexTableOptions } from './useNexTableOptions';

export const useNexReactTable = <TData extends NexRowData>(
  tableOptions: NexTableTableOptions<TData>,
): NexTableTableInstance<TData> =>
  useNexTableInstance(useNexTableOptions(tableOptions));
