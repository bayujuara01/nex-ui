import {JSX, type ReactNode} from 'react';

import {
  createRow as _createRow,
  flexRender as _flexRender,
  type Renderable,
} from '@tanstack/react-table';

import {
  type NexTableColumnHelper,
  type NexTableDisplayColumnDef,
  type NexTableGroupColumnDef,
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../types';
import { getAllLeafColumnDefs, getColumnId } from './column.utils';

export const flexRender = _flexRender as (
  Comp: Renderable<any>,
  props: any,
) => JSX.Element | ReactNode;

export function createMRTColumnHelper<
  TData extends NexRowData,
>(): NexTableColumnHelper<TData> {
  return {
    accessor: (accessor, column) => {
      return typeof accessor === 'function'
        ? ({
            ...column,
            accessorFn: accessor,
          } as any)
        : {
            ...column,
            accessorKey: accessor,
          };
    },
    display: (column) => column as NexTableDisplayColumnDef<TData>,
    group: (column) => column as NexTableGroupColumnDef<TData>,
  };
}

export const createRow = <TData extends NexRowData>(
  table: NexTableTableInstance<TData>,
  originalRow?: TData,
  rowIndex = -1,
  depth = 0,
  subRows?: NexTableRow<TData>[],
  parentId?: string,
): NexTableRow<TData> =>
  _createRow(
    table as any,
    'mrt-row-create',
    originalRow ??
      Object.assign(
        {},
        ...getAllLeafColumnDefs(table.options.columns).map((col) => ({
          [getColumnId(col)]: '',
        })),
      ),
    rowIndex,
    depth,
    subRows as any,
    parentId,
  ) as NexTableRow<TData>;
