import classes from './NexTableHeadCellFilterContainer.module.css';

import {
  ActionIcon,
  Collapse,
  Flex,
  type FlexProps,
  Menu,
  Text,
  Tooltip,
} from '@nex-ui/core';

import { localizedFilterOption } from '../../fns/filterFns';
import {
  type NexTableHeader,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { NexTableFilterCheckbox } from '../inputs/NexTableFilterCheckbox';
import { NexTableFilterRangeFields } from '../inputs/NexTableFilterRangeFields';
import { NexTableFilterRangeSlider } from '../inputs/NexTableFilterRangeSlider';
import { NexTableFilterTextInput } from '../inputs/NexTableFilterTextInput';
import { NexTableFilterOptionMenu } from '../menus/NexTableFilterOptionMenu';

interface Props<TData extends NexRowData> extends FlexProps {
  header: NexTableHeader<TData>;
  table: NexTableTableInstance<TData>;
}

export const NexTableHeadCellFilterContainer = <TData extends NexRowData>({
  header,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      columnFilterDisplayMode,
      columnFilterModeOptions,
      enableColumnFilterModes,
      icons: { IconFilterCog },
      localization,
    },
    refs: { filterInputRefs },
  } = table;
  const { showColumnFilters } = getState();
  const { column } = header;
  const { columnDef } = column;

  const currentFilterOption = columnDef._filterFn;
  const allowedColumnFilterOptions =
    columnDef?.columnFilterModeOptions ?? columnFilterModeOptions;
  const showChangeModeButton =
    enableColumnFilterModes &&
    columnDef.enableColumnFilterModes !== false &&
    (allowedColumnFilterOptions === undefined ||
      !!allowedColumnFilterOptions?.length);

  return (
    <Collapse in={showColumnFilters || columnFilterDisplayMode === 'popover'}>
      <Flex direction="column" {...rest}>
        <Flex align="flex-end">
          {columnDef.filterVariant === 'checkbox' ? (
            <NexTableFilterCheckbox column={column} table={table} />
          ) : columnDef.filterVariant === 'range-slider' ? (
            <NexTableFilterRangeSlider header={header} table={table} />
          ) : ['date-range', 'range'].includes(columnDef.filterVariant ?? '') ||
            ['between', 'betweenInclusive', 'inNumberRange'].includes(
              columnDef._filterFn,
            ) ? (
            <NexTableFilterRangeFields header={header} table={table} />
          ) : (
            <NexTableFilterTextInput header={header} table={table} />
          )}
          {showChangeModeButton && (
            <Menu withinPortal={columnFilterDisplayMode !== 'popover'}>
              <Tooltip
                label={localization.changeFilterMode}
                position="bottom-start"
                withinPortal
              >
                <Menu.Target>
                  <ActionIcon
                    aria-label={localization.changeFilterMode}
                    color="gray"
                    size="md"
                    variant="subtle"
                  >
                    <IconFilterCog />
                  </ActionIcon>
                </Menu.Target>
              </Tooltip>
              <NexTableFilterOptionMenu
                header={header}
                onSelect={() =>
                  setTimeout(
                    () => filterInputRefs.current[`${column.id}-0`]?.focus(),
                    100,
                  )
                }
                table={table}
              />
            </Menu>
          )}
        </Flex>
        {showChangeModeButton ? (
          <Text
            c="dimmed"
            className={classes['filter-mode-label']}
            component="label"
          >
            {localization.filterMode.replace(
              '{filterType}',
              localizedFilterOption(localization, currentFilterOption),
            )}
          </Text>
        ) : null}
      </Flex>
    </Collapse>
  );
};
