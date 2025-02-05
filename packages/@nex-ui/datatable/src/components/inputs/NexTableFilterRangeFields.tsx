import clsx from 'clsx';

import classes from './NexTableFilterRangeFields.module.css';

import { Box, type BoxProps } from '@nex-ui/core';

import { NexTableFilterTextInput } from './NexTableFilterTextInput';

import {
  type NexTableHeader,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';

interface Props<TData extends NexRowData> extends BoxProps {
  header: NexTableHeader<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableFilterRangeFields = <TData extends NexRowData>({
  header,
  table,
  ...rest
}: Props<TData>) => {
  return (
    <Box
      {...rest}
      className={clsx('mrt-filter-range-fields', classes.root, rest.className)}
    >
      <NexTableFilterTextInput header={header} rangeFilterIndex={0} table={table} />
      <NexTableFilterTextInput header={header} rangeFilterIndex={1} table={table} />
    </Box>
  );
};
