import clsx from 'clsx';

import classes from './NexTableGlobalFilterTextInput.module.css';

import { useEffect, useRef, useState } from 'react';

import {
  ActionIcon,
  Collapse,
  Menu,
  TextInput,
  type TextInputProps,
  Tooltip,
} from '@nex-ui/core';
import { useDebouncedValue } from '@nex-ui/hooks';

import { type NexRowData, type NexTableTableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { NexTableFilterOptionMenu } from '../menus/NexTableFilterOptionMenu';

interface Props<TData extends NexRowData> extends TextInputProps {
  table: NexTableTableInstance<TData>;
}

export const NexTableGlobalFilterTextInput = <TData extends NexRowData>({
  table,
  ...rest
}: Props<TData>) => {
  const {
    getState,
    options: {
      enableGlobalFilterModes,
      icons: { IconSearch, IconX },
      localization,
      mantineSearchTextInputProps,
      manualFiltering,
      positionGlobalFilter,
    },
    refs: { searchInputRef },
    setGlobalFilter,
  } = table;
  const { globalFilter, showGlobalFilter } = getState();

  const textFieldProps = {
    ...parseFromValuesOrFunc(mantineSearchTextInputProps, {
      table,
    }),
    ...rest,
  };

  const isMounted = useRef(false);
  const [searchValue, setSearchValue] = useState(globalFilter ?? '');

  const [debouncedSearchValue] = useDebouncedValue(
    searchValue,
    manualFiltering ? 500 : 250,
  );

  useEffect(() => {
    setGlobalFilter(debouncedSearchValue || undefined);
  }, [debouncedSearchValue]);

  const handleClear = () => {
    setSearchValue('');
    setGlobalFilter(undefined);
  };

  useEffect(() => {
    if (isMounted.current) {
      if (globalFilter === undefined) {
        handleClear();
      } else {
        setSearchValue(globalFilter);
      }
    }
    isMounted.current = true;
  }, [globalFilter]);

  return (
    <Collapse className={classes.collapse} in={showGlobalFilter}>
      {enableGlobalFilterModes && (
        <Menu withinPortal>
          <Menu.Target>
            <ActionIcon
              aria-label={localization.changeSearchMode}
              color="gray"
              size="sm"
              variant="transparent"
            >
              <IconSearch />
            </ActionIcon>
          </Menu.Target>
          <NexTableFilterOptionMenu onSelect={handleClear} table={table} />
        </Menu>
      )}
      <TextInput
        leftSection={!enableGlobalFilterModes && <IconSearch />}
        mt={0}
        mx={positionGlobalFilter !== 'left' ? 'mx' : undefined}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder={localization.search}
        rightSection={
          searchValue ? (
            <ActionIcon
              aria-label={localization.clearSearch}
              color="gray"
              disabled={!searchValue?.length}
              onClick={handleClear}
              size="sm"
              variant="transparent"
            >
              <Tooltip label={localization.clearSearch} withinPortal>
                <IconX />
              </Tooltip>
            </ActionIcon>
          ) : null
        }
        value={searchValue ?? ''}
        variant="filled"
        {...textFieldProps}
        className={clsx(
          'mrt-global-filter-text-input',
          classes.root,
          textFieldProps?.className,
        )}
        ref={(node) => {
          if (node) {
            searchInputRef.current = node;
            if (textFieldProps?.ref) {
              // @ts-ignore
              textFieldProps.ref = node;
            }
          }
        }}
      />
    </Collapse>
  );
};
