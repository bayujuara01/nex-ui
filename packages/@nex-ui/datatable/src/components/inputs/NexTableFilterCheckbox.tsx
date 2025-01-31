import clsx from 'clsx';

import classes from './NexTableFilterCheckBox.module.css';

import { Checkbox, type CheckboxProps, Tooltip } from '@nex-ui/core';

import {
  type NexTableCellValue,
  type NexTableColumn,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface Props<TData extends NexRowData, TValue = NexTableCellValue>
  extends CheckboxProps {
  column: NexTableColumn<TData, TValue>;
  table: NexTableTableInstance<TData>;
}

export const NexTableFilterCheckbox = <TData extends NexRowData>({
  column,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { localization, mantineFilterCheckboxProps },
  } = table;
  const { density } = getState();
  const { columnDef } = column;

  const arg = { column, table };
  const checkboxProps = {
    ...parseFromValuesOrFunc(mantineFilterCheckboxProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineFilterCheckboxProps, arg),
    ...rest,
  } as CheckboxProps;

  const filterLabel = localization.filterByColumn?.replace(
    '{column}',
    columnDef.header,
  );

  const value = column.getFilterValue();

  return (
    <Tooltip
      label={checkboxProps?.title ?? filterLabel}
      openDelay={1000}
      withinPortal
    >
      <Checkbox
        checked={value === 'true'}
        className={clsx('mrt-filter-checkbox', classes.root)}
        indeterminate={value === undefined}
        label={checkboxProps.title ?? filterLabel}
        size={density === 'xs' ? 'sm' : 'md'}
        {...checkboxProps}
        onChange={(e) => {
          column.setFilterValue(
            column.getFilterValue() === undefined
              ? 'true'
              : column.getFilterValue() === 'true'
                ? 'false'
                : undefined,
          );
          checkboxProps?.onChange?.(e);
        }}
        onClick={(e) => {
          e.stopPropagation();
          checkboxProps?.onClick?.(e);
        }}
        title={undefined}
      />
    </Tooltip>
  );
};
