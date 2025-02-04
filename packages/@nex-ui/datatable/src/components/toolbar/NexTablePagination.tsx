import clsx from 'clsx';

import classes from './NexTablePagination.module.css';

import {
  ActionIcon,
  Box,
  Group,
  Pagination,
  type PaginationProps,
  Select,
  Text,
} from '@nex-ui/core';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

const defaultRowsPerPage = [5, 10, 15, 20, 25, 30, 50, 100].map((x) =>
  x.toString(),
);

interface Props<TData extends NexRowData> extends Partial<PaginationProps> {
  position?: 'bottom' | 'top';
  table: NexTableTableInstance<TData>;
}

export const NexTablePagination = <TData extends NexRowData>({
  position = 'bottom',
  table,
  ...props
}: Props<TData>) => {
  const {
    getPrePaginationRowModel,
    getState,
    options: {
      enableToolbarInternalActions,
      icons: {
        IconChevronLeft,
        IconChevronLeftPipe,
        IconChevronRight,
        IconChevronRightPipe,
      },
      localization,
      mantinePaginationProps,
      paginationDisplayMode,
      rowCount,
    },
    setPageIndex,
    setPageSize,
  } = table;
  const {
    pagination: { pageIndex = 0, pageSize = 10 },
    showGlobalFilter,
  } = getState();

  const paginationProps = {
    ...parseFromValuesOrFunc(mantinePaginationProps, {
      table,
    }),
    ...props,
  };

  const totalRowCount = rowCount ?? getPrePaginationRowModel().rows.length;
  const numberOfPages = Math.ceil(totalRowCount / pageSize);
  const showFirstLastPageButtons = numberOfPages > 2;
  const firstRowIndex = pageIndex * pageSize;
  const lastRowIndex = Math.min(pageIndex * pageSize + pageSize, totalRowCount);

  const {
    rowsPerPageOptions = defaultRowsPerPage,
    showRowsPerPage = true,
    withEdges = showFirstLastPageButtons,
    ...rest
  } = paginationProps ?? {};

  const needsTopMargin =
    position === 'top' && enableToolbarInternalActions && !showGlobalFilter;

  return (
    <Box
      className={clsx(
        'mrt-table-pagination',
        classes.root,
        needsTopMargin && classes['with-top-margin'],
      )}
    >
      {paginationProps?.showRowsPerPage !== false && (
        <Group gap="xs">
          <Text id="rpp-label">{localization.rowsPerPage}</Text>
          <Select
            allowDeselect={false}
            aria-labelledby="rpp-label"
            className={classes.pagesize}
            data={paginationProps?.rowsPerPageOptions ?? defaultRowsPerPage}
            onChange={(value: null | string) => setPageSize(+(value as string))}
            value={pageSize.toString()}
          />
        </Group>
      )}
      {paginationDisplayMode === 'pages' ? (
        <Pagination
          firstIcon={IconChevronLeftPipe}
          lastIcon={IconChevronRightPipe}
          nextIcon={IconChevronRight}
          onChange={(newPageIndex) => setPageIndex(newPageIndex - 1)}
          previousIcon={IconChevronLeft}
          total={numberOfPages}
          value={pageIndex + 1}
          withEdges={withEdges}
          {...rest}
        />
      ) : paginationDisplayMode === 'default' ? (
        <>
          <Text>{`${
            lastRowIndex === 0 ? 0 : (firstRowIndex + 1).toLocaleString()
          }-${lastRowIndex.toLocaleString()} ${
            localization.of
          } ${totalRowCount.toLocaleString()}`}</Text>
          <Group gap={6}>
            {withEdges && (
              <ActionIcon
                aria-label={localization.goToFirstPage}
                color="gray"
                disabled={pageIndex <= 0}
                onClick={() => setPageIndex(0)}
                variant="subtle"
                size="input-sm"
              >
                <IconChevronLeftPipe />
              </ActionIcon>
            )}
            <ActionIcon
              aria-label={localization.goToPreviousPage}
              color="gray"
              disabled={pageIndex <= 0}
              onClick={() => setPageIndex(pageIndex - 1)}
              variant="subtle"
              size="input-sm"
            >
              <IconChevronLeft />
            </ActionIcon>
            <ActionIcon
              aria-label={localization.goToNextPage}
              color="gray"
              disabled={lastRowIndex >= totalRowCount}
              onClick={() => setPageIndex(pageIndex + 1)}
              variant="subtle"
              size="input-sm"
            >
              <IconChevronRight />
            </ActionIcon>
            {withEdges && (
              <ActionIcon
                aria-label={localization.goToLastPage}
                color="gray"
                disabled={lastRowIndex >= totalRowCount}
                onClick={() => setPageIndex(numberOfPages - 1)}
                variant="subtle"
                size="input-sm"
              >
                <IconChevronRightPipe />
              </ActionIcon>
            )}
          </Group>
        </>
      ) : null}
    </Box>
  );
};
