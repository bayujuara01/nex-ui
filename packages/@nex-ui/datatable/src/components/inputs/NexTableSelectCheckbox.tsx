import { type MouseEvent } from 'react';

import {
  Checkbox,
  type CheckboxProps,
  Radio,
  type RadioProps,
  Switch,
  type SwitchProps,
  Tooltip,
} from '@nex-ui/core';

import {
  type NexTableRow,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import {
  getIsRowSelected,
  getMRT_RowSelectionHandler,
  getMRT_SelectAllHandler,
} from '../../utils/row.utils';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface Props<TData extends NexRowData> extends CheckboxProps {
  renderedRowIndex?: number;
  row?: NexTableRow<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableSelectCheckbox = <TData extends NexRowData>({
  renderedRowIndex = 0,
  row,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableMultiRowSelection,
      localization,
      mantineSelectAllCheckboxProps,
      mantineSelectCheckboxProps,
      selectAllMode,
      selectDisplayMode,
    },
  } = table;
  const { density, isLoading } = getState();

  const selectAll = !row;

  const allRowsSelected = selectAll
    ? selectAllMode === 'page'
      ? table.getIsAllPageRowsSelected()
      : table.getIsAllRowsSelected()
    : undefined;

  const isChecked = selectAll
    ? allRowsSelected
    : getIsRowSelected({ row, table });

  const checkboxProps = {
    ...(selectAll
      ? parseFromValuesOrFunc(mantineSelectAllCheckboxProps, { table })
      : parseFromValuesOrFunc(mantineSelectCheckboxProps, {
          row,
          table,
        })),
    ...rest,
  };

  const onSelectionChange = row
    ? getMRT_RowSelectionHandler({
        renderedRowIndex,
        row,
        table,
      })
    : undefined;

  const onSelectAllChange = getMRT_SelectAllHandler({ table });

  const commonProps = {
    'aria-label': selectAll
      ? localization.toggleSelectAll
      : localization.toggleSelectRow,
    checked: isChecked,
    disabled:
      isLoading || (row && !row.getCanSelect()) || row?.id === 'mrt-row-create',
    onChange: (event) => {
      event.stopPropagation();
      if (selectAll) {
        onSelectAllChange(event);
      } else {
        onSelectionChange!(event);
      }
    },
    size: density === 'xs' ? 'sm' : 'md',
    ...checkboxProps,
    onClick: (e: MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      checkboxProps?.onClick?.(e);
    },
    title: undefined,
  } as CheckboxProps & RadioProps & SwitchProps;

  return (
    <Tooltip
      label={
        checkboxProps?.title ??
        (selectAll
          ? localization.toggleSelectAll
          : localization.toggleSelectRow)
      }
      openDelay={1000}
      withinPortal
    >
      <span>
        {selectDisplayMode === 'switch' ? (
          <Switch {...commonProps} />
        ) : selectDisplayMode === 'radio' ||
          enableMultiRowSelection === false ? (
          <Radio {...commonProps} />
        ) : (
          <Checkbox
            indeterminate={
              !isChecked && selectAll
                ? table.getIsSomeRowsSelected()
                : row?.getIsSomeSelected() && row.getCanSelectSubRows()
            }
            {...commonProps}
          />
        )}
      </span>
    </Tooltip>
  );
};
