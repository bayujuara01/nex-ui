import clsx from 'clsx';

import classes from './NexTableToolbarDropZone.module.css';

import { type DragEvent, useEffect } from 'react';

import { Flex, type FlexProps, Text, Transition } from '@nex-ui/core';

import { type NexRowData, type NexTableTableInstance } from '../../types';

interface Props<TData extends NexRowData> extends FlexProps {
  table: NexTableTableInstance<TData>;
}

export const NexTableToolbarDropZone = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { enableGrouping, localization },
    setHoveredColumn,
    setShowToolbarDropZone,
  } = table;

  const { draggingColumn, grouping, hoveredColumn, showToolbarDropZone } =
    getState();

  const handleDragEnter = (_event: DragEvent<HTMLDivElement>) => {
    setHoveredColumn({ id: 'drop-zone' });
  };

  useEffect(() => {
    if (table.options.state?.showToolbarDropZone !== undefined) {
      setShowToolbarDropZone(
        !!enableGrouping &&
          !!draggingColumn &&
          draggingColumn.columnDef.enableGrouping !== false &&
          !grouping.includes(draggingColumn.id),
      );
    }
  }, [enableGrouping, draggingColumn, grouping]);

  return (
    <Transition mounted={showToolbarDropZone} transition="fade">
      {() => (
        <Flex
          className={clsx(
            'mrt-toolbar-dropzone',
            classes.root,
            hoveredColumn?.id === 'drop-zone' && classes.hovered,
          )}
          onDragEnter={handleDragEnter}
          {...rest}
        >
          <Text>
            {localization.dropToGroupBy.replace(
              '{column}',
              draggingColumn?.columnDef?.header ?? '',
            )}
          </Text>
        </Flex>
      )}
    </Transition>
  );
};
