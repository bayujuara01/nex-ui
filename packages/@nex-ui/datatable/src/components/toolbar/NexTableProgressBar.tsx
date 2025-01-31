import clsx from 'clsx';

import classes from './NexTableProgressBar.module.css';

import { Collapse, Progress, type ProgressProps } from '@nex-ui/core';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface Props<TData extends NexRowData> extends Partial<ProgressProps> {
  isTopToolbar: boolean;
  table: NexTableTableInstance<TData>;
}

export const NexTableProgressBar = <TData extends NexRowData>({
  isTopToolbar,
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: { mantineProgressProps },
  } = table;
  const { isSaving, showProgressBars } = getState();

  const linearProgressProps = {
    ...parseFromValuesOrFunc(mantineProgressProps, {
      isTopToolbar,
      table,
    }),
    ...rest,
  };

  return (
    <Collapse
      className={clsx(
        classes.collapse,
        isTopToolbar && classes['collapse-top'],
      )}
      in={isSaving || showProgressBars}
    >
      <Progress
        animated
        aria-busy="true"
        aria-label="Loading"
        radius={0}
        value={100}
        {...linearProgressProps}
      />
    </Collapse>
  );
};
