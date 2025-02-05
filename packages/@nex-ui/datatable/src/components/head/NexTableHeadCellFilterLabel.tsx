import clsx from 'clsx';

import classes from './NexTableHeadCellFilterLabel.module.css';

import { type MouseEvent, useState } from 'react';

import {
  ActionIcon,
  type ActionIconProps,
  Popover,
  Tooltip,
  Transition,
} from '@nex-ui/core';

import { NexTableHeadCellFilterContainer } from './NexTableHeadCellFilterContainer';

import { localizedFilterOption } from '../../fns/filterFns';
import {
  type NexTableHeader,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { dataVariable } from '../../utils/style.utils';

interface Props<TData extends NexRowData> extends ActionIconProps {
  header: NexTableHeader<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableHeadCellFilterLabel = <TData extends NexRowData>({
  header,
  table,
  ...rest
}: Props<TData>) => {
  const {
    options: {
      columnFilterDisplayMode,
      icons: { IconFilter },
      localization,
    },
    refs: { filterInputRefs },
    setShowColumnFilters,
  } = table;
  const { column } = header;
  const { columnDef } = column;

  const filterValue = column.getFilterValue();

  const [popoverOpened, setPopoverOpened] = useState(false);

  const isFilterActive =
    (Array.isArray(filterValue) && filterValue.some(Boolean)) ||
    (!!filterValue && !Array.isArray(filterValue));

  const isRangeFilter =
    columnDef.filterVariant === 'range' ||
    columnDef.filterVariant === 'date-range' ||
    ['between', 'betweenInclusive', 'inNumberRange'].includes(
      columnDef._filterFn,
    );
  const currentFilterOption = columnDef._filterFn;
  const filterValueFn =
    columnDef.filterTooltipValueFn || ((value) => value as string);
  type FilterValueType = Parameters<typeof filterValueFn>[0];
  const filterTooltip =
    columnFilterDisplayMode === 'popover' && !isFilterActive
      ? localization.filterByColumn?.replace(
          '{column}',
          String(columnDef.header),
        )
      : localization.filteringByColumn
          .replace('{column}', String(columnDef.header))
          .replace(
            '{filterType}',
            localizedFilterOption(localization, currentFilterOption),
          )
          .replace(
            '{filterValue}',
            `"${
              Array.isArray(column.getFilterValue())
                ? (
                    column.getFilterValue() as [
                      FilterValueType,
                      FilterValueType,
                    ]
                  )
                    .map((v) => filterValueFn(v))
                    .join(
                      `" ${isRangeFilter ? localization.and : localization.or} "`,
                    )
                : filterValueFn(column.getFilterValue())
            }"`,
          )
          .replace('" "', '');

  return (
    <>
      <Popover
        keepMounted={columnDef.filterVariant === 'range-slider'}
        onClose={() => setPopoverOpened(false)}
        opened={popoverOpened}
        position="top"
        shadow="xl"
        width={360}
        withinPortal
      >
        <Transition
          mounted={
            columnFilterDisplayMode === 'popover' ||
            (!!column.getFilterValue() && !isRangeFilter) ||
            (isRangeFilter &&
              (!!(column.getFilterValue() as [any, any])?.[0] ||
                !!(column.getFilterValue() as [any, any])?.[1]))
          }
          transition="scale"
        >
          {() => (
            <Popover.Target>
              <Tooltip
                disabled={popoverOpened}
                label={filterTooltip}
                multiline
                w={filterTooltip.length > 40 ? 300 : undefined}
                withinPortal
              >
                <ActionIcon
                  className={clsx(
                    'mrt-table-head-cell-filter-label-icon',
                    classes.root,
                  )}
                  size={18}
                  {...dataVariable('active', isFilterActive)}
                  onClick={(event: MouseEvent<HTMLButtonElement>) => {
                    event.stopPropagation();
                    if (columnFilterDisplayMode === 'popover') {
                      setPopoverOpened((opened) => !opened);
                    } else {
                      setShowColumnFilters(true);
                    }
                    setTimeout(() => {
                      const input = filterInputRefs.current[`${column.id}-0`];
                      input?.focus();
                      input?.select();
                    }, 100);
                  }}
                  {...rest}
                >
                  <IconFilter size="100%" />
                </ActionIcon>
              </Tooltip>
            </Popover.Target>
          )}
        </Transition>
        {columnFilterDisplayMode === 'popover' && (
          <Popover.Dropdown
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) =>
              event.key === 'Enter' && setPopoverOpened(false)
            }
            onMouseDown={(event) => event.stopPropagation()}
          >
            <NexTableHeadCellFilterContainer header={header} table={table} />
          </Popover.Dropdown>
        )}
      </Popover>
    </>
  );
};
