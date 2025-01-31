import classes from './NexTableShowHideColumnsMenuItems.module.css';

import {
  type Dispatch,
  type DragEvent,
  type SetStateAction,
  useRef,
  useState,
} from 'react';

import {
  Box,
  Menu,
  Switch,
  Text,
  Tooltip,
  useNexTheme,
} from '@nex-ui/core';

import {
  type NexTableCellValue,
  type NexTableColumn,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { reorderColumn } from '../../utils/column.utils';
import { dataVariable, getPrimaryColor } from '../../utils/style.utils';
import { NexTableColumnPinningButtons } from '../buttons/NexTableColumnPinningButtons';
import { NexTableGrabHandleButton } from '../buttons/NexTableGrabHandleButton';

interface Props<TData extends NexRowData, TValue = NexTableCellValue> {
  allColumns: NexTableColumn<TData>[];
  column: NexTableColumn<TData, TValue>;
  hoveredColumn: NexTableColumn<TData> | null;
  setHoveredColumn: Dispatch<SetStateAction<NexTableColumn<TData> | null>>;
  table: NexTableTableInstance<TData>;
}

export const NexTableShowHideColumnsMenuItems = <TData extends NexRowData>({
  allColumns,
  column,
  hoveredColumn,
  setHoveredColumn,
  table,
}: Props<TData>) => {
  const theme = useNexTheme();
  const {
    getState,
    options: {
      enableColumnOrdering,
      enableColumnPinning,
      enableHiding,
      localization,
    },
    setColumnOrder,
  } = table;
  const { columnOrder } = getState();
  const { columnDef } = column;
  const { columnDefType } = columnDef;

  const switchChecked =
    (columnDefType !== 'group' && column.getIsVisible()) ||
    (columnDefType === 'group' &&
      column.getLeafColumns().some((col) => col.getIsVisible()));

  const handleToggleColumnHidden = (column: NexTableColumn<TData>) => {
    if (columnDefType === 'group') {
      column?.columns?.forEach?.((childColumn: NexTableColumn<TData>) => {
        childColumn.toggleVisibility(!switchChecked);
      });
    } else {
      column.toggleVisibility();
    }
  };

  const menuItemRef = useRef<HTMLElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: DragEvent<HTMLButtonElement>) => {
    setIsDragging(true);
    e.dataTransfer.setDragImage(menuItemRef.current as HTMLElement, 0, 0);
  };

  const handleDragEnd = (_e: DragEvent<HTMLButtonElement>) => {
    setIsDragging(false);
    setHoveredColumn(null);
    if (hoveredColumn) {
      setColumnOrder(reorderColumn(column, hoveredColumn, columnOrder));
    }
  };

  const handleDragEnter = (_e: DragEvent) => {
    if (!isDragging && columnDef.enableColumnOrdering !== false) {
      setHoveredColumn(column);
    }
  };

  if (!columnDef.header || columnDef.visibleInShowHideMenu === false) {
    return null;
  }

  return (
    <>
      <Menu.Item
        className={classes.root}
        component="span"
        onDragEnter={handleDragEnter}
        ref={menuItemRef as any}
        style={{
          '--_column-depth': `${(column.depth + 0.5) * 2}rem`,
          '--_hover-color': getPrimaryColor(theme),
        }}
        {...dataVariable('dragging', isDragging)}
        {...dataVariable('order-hovered', hoveredColumn?.id === column.id)}
      >
        <Box className={classes.menu}>
          {columnDefType !== 'group' &&
            enableColumnOrdering &&
            !allColumns.some(
              (col) => col.columnDef.columnDefType === 'group',
            ) &&
            (columnDef.enableColumnOrdering !== false ? (
              <NexTableGrabHandleButton
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
                table={table}
              />
            ) : (
              <Box className={classes.grab} />
            ))}
          {enableColumnPinning &&
            (column.getCanPin() ? (
              <NexTableColumnPinningButtons column={column} table={table} />
            ) : (
              <Box className={classes.pin} />
            ))}
          {enableHiding ? (
            <Tooltip
              label={localization.toggleVisibility}
              openDelay={1000}
              withinPortal
            >
              <Switch
                checked={switchChecked}
                className={classes.switch}
                disabled={!column.getCanHide()}
                label={columnDef.header}
                onChange={() => handleToggleColumnHidden(column)}
              />
            </Tooltip>
          ) : (
            <Text className={classes.header}>{columnDef.header}</Text>
          )}
        </Box>
      </Menu.Item>
      {column.columns?.map((c: NexTableColumn<TData>, i) => (
        <NexTableShowHideColumnsMenuItems
          allColumns={allColumns}
          column={c}
          hoveredColumn={hoveredColumn}
          key={`${i}-${c.id}`}
          setHoveredColumn={setHoveredColumn}
          table={table}
        />
      ))}
    </>
  );
};
