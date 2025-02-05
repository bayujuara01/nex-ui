import clsx from 'clsx';

import classes from './NexTableBodyCell.module.css';

import {
  type CSSProperties,
  type DragEvent,
  memo,
  type MouseEvent,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Skeleton,
  TableTd,
  type TableTdProps,
  useDirection,
} from '@nex-ui/core';

import { NexTableBodyCellValue } from './NexTableBodyCellValue';

import {
  type NexTableCell,
  type NexTableCellValue,
  type NexRowData,
  type NexTableTableInstance,
  type NexTableVirtualItem,
} from '../../types';
import { parseCSSVarId } from '../../utils/style.utils';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableCopyButton } from '../buttons/NexTableCopyButton';
import { NexTableEditCellTextInput } from '../inputs/NexTableEditCellTextInput';

interface Props<TData extends NexRowData, TValue = NexTableCellValue>
  extends TableTdProps {
  cell: NexTableCell<TData, TValue>;
  numRows?: number;
  renderedColumnIndex?: number;
  renderedRowIndex?: number;
  rowRef: RefObject<HTMLTableRowElement | null>;
  table: NexTableTableInstance<TData>;
  virtualCell?: NexTableVirtualItem;
}

export const NexTableBodyCell = <TData extends NexRowData>({
  cell,
  numRows = 1,
  renderedColumnIndex = 0,
  renderedRowIndex = 0,
  rowRef,
  table,
  virtualCell,
  ...rest
}: Props<TData>) => {
  const direction = useDirection();

  const {
    getState,
    options: {
      columnResizeDirection,
      columnResizeMode,
      createDisplayMode,
      editDisplayMode,
      enableClickToCopy,
      enableColumnOrdering,
      enableColumnPinning,
      enableEditing,
      enableGrouping,
      layoutMode,
      mantineSkeletonProps,
      mantineTableBodyCellProps,
    },
    refs: { editInputRefs },
    setEditingCell,
    setHoveredColumn,
  } = table;
  const {
    columnSizingInfo,
    creatingRow,
    density,
    draggingColumn,
    editingCell,
    editingRow,
    hoveredColumn,
    isLoading,
    showSkeletons,
  } = getState();
  const { column, row } = cell;
  const { columnDef } = column;
  const { columnDefType } = columnDef;

  const args = {
    cell,
    column,
    renderedColumnIndex,
    renderedRowIndex,
    row,
    table,
  };
  const tableCellProps = {
    ...parseFromValuesOrFunc(mantineTableBodyCellProps, args),
    ...parseFromValuesOrFunc(columnDef.mantineTableBodyCellProps, args),
    ...rest,
  };

  const skeletonProps = parseFromValuesOrFunc(mantineSkeletonProps, args);

  const [skeletonWidth, setSkeletonWidth] = useState(100);
  useEffect(() => {
    if ((!isLoading && !showSkeletons) || skeletonWidth !== 100) {return;}
    const size = column.getSize();
    setSkeletonWidth(
      columnDefType === 'display'
        ? size / 2
        : Math.round(Math.random() * (size - size / 3) + size / 3),
    );
  }, [isLoading, showSkeletons]);

  const widthStyles: CSSProperties = {
    minWidth: `max(calc(var(--col-${parseCSSVarId(
      column?.id,
    )}-size) * 1px), ${columnDef.minSize ?? 30}px)`,
    width: `calc(var(--col-${parseCSSVarId(column.id)}-size) * 1px)`,
  };
  if (layoutMode === 'grid') {
    widthStyles.flex = `${
      [0, false].includes(columnDef.grow!)
        ? 0
        : `var(--col-${parseCSSVarId(column.id)}-size)`
    } 0 auto`;
  } else if (layoutMode === 'grid-no-grow') {
    widthStyles.flex = `${+(columnDef.grow || 0)} 0 auto`;
  }
  const isDraggingColumn = draggingColumn?.id === column.id;
  const isHoveredColumn = hoveredColumn?.id === column.id;
  const isColumnPinned =
    enableColumnPinning &&
    columnDef.columnDefType !== 'group' &&
    column.getIsPinned();

  const isEditable =
    !cell.getIsPlaceholder() &&
    parseFromValuesOrFunc(enableEditing, row) &&
    parseFromValuesOrFunc(columnDef.enableEditing, row) !== false;

  const isEditing =
    isEditable &&
    !['custom', 'modal'].includes(editDisplayMode as string) &&
    (editDisplayMode === 'table' ||
      editingRow?.id === row.id ||
      editingCell?.id === cell.id) &&
    !row.getIsGrouped();

  const isCreating =
    isEditable && createDisplayMode === 'row' && creatingRow?.id === row.id;

  const showClickToCopyButton =
    parseFromValuesOrFunc(enableClickToCopy, cell) ||
    (parseFromValuesOrFunc(columnDef.enableClickToCopy, cell) &&
      parseFromValuesOrFunc(columnDef.enableClickToCopy, cell) !== false);

  const handleDoubleClick = (event: MouseEvent<HTMLTableCellElement>) => {
    tableCellProps?.onDoubleClick?.(event);
    if (isEditable && editDisplayMode === 'cell') {
      setEditingCell(cell);
      setTimeout(() => {
        const textField = editInputRefs.current[cell.id];
        if (textField) {
          textField.focus();
          textField.select?.();
        }
      }, 100);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLTableCellElement>) => {
    tableCellProps?.onDragEnter?.(e);
    if (enableGrouping && hoveredColumn?.id === 'drop-zone') {
      setHoveredColumn(null);
    }
    if (enableColumnOrdering && draggingColumn) {
      setHoveredColumn(
        columnDef.enableColumnOrdering !== false ? column : null,
      );
    }
  };

  const cellValueProps = {
    cell,
    renderedColumnIndex,
    renderedRowIndex,
    table,
  };

  const cellHoverRevealDivRef = useRef<any>(null);
  const [isCellContentOverflowing, setIsCellContentOverflowing] =
    useState(false);

  const onMouseEnter = () => {
    if (!columnDef.enableCellHoverReveal) {return;}
    const div = cellHoverRevealDivRef.current;
    if (div) {
      const isOverflow = div.scrollWidth > div.clientWidth;
      setIsCellContentOverflowing(isOverflow);
    }
  };

  const onMouseLeave = () => {
    if (!columnDef.enableCellHoverReveal) {return;}
    setIsCellContentOverflowing(false);
  };

  const renderCellContent = () => {
    if (cell.getIsPlaceholder()) {
      return columnDef.PlaceholderCell?.({ cell, column, row, table }) ?? null;
    }

    if (showSkeletons !== false && (isLoading || showSkeletons)) {
      return <Skeleton height={20} width={skeletonWidth} {...skeletonProps} />;
    }

    if (
      columnDefType === 'display' &&
      (['mrt-row-expand', 'mrt-row-numbers', 'mrt-row-select'].includes(
        column.id,
      ) ||
        !row.getIsGrouped())
    ) {
      return columnDef.Cell?.({
        column,
        renderedCellValue: cell.renderValue() as any,
        row,
        rowRef,
        ...cellValueProps,
      });
    }

    if (isCreating || isEditing) {
      return <NexTableEditCellTextInput cell={cell} table={table} />;
    }

    if (showClickToCopyButton && columnDef.enableClickToCopy !== false) {
      return (
        <NexTableCopyButton cell={cell} table={table}>
          <NexTableBodyCellValue {...cellValueProps} />
        </NexTableCopyButton>
      );
    }

    return <NexTableBodyCellValue {...cellValueProps} />;
  };

  return (
    <TableTd
      data-column-pinned={isColumnPinned || undefined}
      data-dragging-column={isDraggingColumn || undefined}
      data-first-right-pinned={
        (isColumnPinned === 'right' &&
          column.getIsFirstColumn(isColumnPinned)) ||
        undefined
      }
      data-hovered-column-target={isHoveredColumn || undefined}
      data-index={renderedColumnIndex}
      data-last-left-pinned={
        (isColumnPinned === 'left' && column.getIsLastColumn(isColumnPinned)) ||
        undefined
      }
      data-last-row={renderedRowIndex === numRows - 1 || undefined}
      data-resizing={
        (columnResizeMode === 'onChange' &&
          columnSizingInfo?.isResizingColumn === column.id &&
          columnResizeDirection) ||
        undefined
      }
      {...tableCellProps}
      __vars={{
        '--mrt-cell-align':
          tableCellProps.align ?? (direction.dir === 'rtl' ? 'right' : 'left'),
        '--mrt-table-cell-left':
          isColumnPinned === 'left'
            ? `${column.getStart(isColumnPinned)}`
            : undefined,
        '--mrt-table-cell-right':
          isColumnPinned === 'right'
            ? `${column.getAfter(isColumnPinned)}`
            : undefined,
        ...tableCellProps.__vars,
      }}
      className={clsx(
        classes.root,
        layoutMode?.startsWith('grid') && classes['root-grid'],
        virtualCell && classes['root-virtualized'],
        isEditable &&
          editDisplayMode === 'cell' &&
          classes['root-cursor-pointer'],
        isEditable &&
          ['cell', 'table'].includes(editDisplayMode ?? '') &&
          columnDefType !== 'display' &&
          classes['root-editable-hover'],
        columnDefType === 'data' && classes['root-data-col'],
        density === 'xs' && classes['root-nowrap'],
        columnDef.enableCellHoverReveal && classes['root-cell-hover-reveal'],
        tableCellProps?.className,
      )}
      onDoubleClick={handleDoubleClick}
      onDragEnter={handleDragEnter}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={(theme) => ({
        ...widthStyles,
        ...parseFromValuesOrFunc(tableCellProps.style, theme),
      })}
    >
      <>
        {tableCellProps.children ??
          (columnDef.enableCellHoverReveal ? (
            <div
              className={clsx(
                columnDef.enableCellHoverReveal &&
                  !(isCreating || isEditing) &&
                  classes['cell-hover-reveal'],
                isCellContentOverflowing && classes.overflowing,
              )}
              ref={cellHoverRevealDivRef}
            >
              {renderCellContent()}
              {cell.getIsGrouped() && !columnDef.GroupedCell && (
                <> ({row.subRows?.length})</>
              )}
            </div>
          ) : (
            <>
              {renderCellContent()}
              {cell.getIsGrouped() && !columnDef.GroupedCell && (
                <> ({row.subRows?.length})</>
              )}
            </>
          ))}
      </>
    </TableTd>
  );
};

export const Memo_MRT_TableBodyCell = memo(
  NexTableBodyCell,
  (prev, next) => next.cell === prev.cell,
) as typeof NexTableBodyCell;
