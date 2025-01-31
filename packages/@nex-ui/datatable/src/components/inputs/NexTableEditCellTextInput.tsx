import { type FocusEvent, type KeyboardEvent, useState } from 'react';

import {
  MultiSelect,
  type MultiSelectProps,
  Select,
  type SelectProps,
  TextInput,
  type TextInputProps,
} from '@nex-ui/core';

import {
  type HTMLPropsRef,
  type NexTableCell,
  type NexTableCellValue,
  type NexRowData,
  type NexTableTableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';

interface PropsTextInput<TData extends NexRowData, TValue = NexTableCellValue>
  extends TextInputProps {
  cell: NexTableCell<TData, TValue>;
  table: NexTableTableInstance<TData>;
}

interface PropsSelect<TData extends NexRowData, TValue = NexTableCellValue>
  extends SelectProps {
  cell: NexTableCell<TData, TValue>;
  table: NexTableTableInstance<TData>;
}

interface PropsMultiSelect<TData extends NexRowData, TValue = NexTableCellValue>
  extends MultiSelectProps {
  cell: NexTableCell<TData, TValue>;
  table: NexTableTableInstance<TData>;
}

type MRT_TextInputProps = HTMLPropsRef<HTMLInputElement> & TextInputProps;
type MRT_SelectProps = HTMLPropsRef<HTMLInputElement> & SelectProps;
type MRT_MultiSelectProps = HTMLPropsRef<HTMLInputElement> & MultiSelectProps;

export const NexTableEditCellTextInput = <TData extends NexRowData>({
  cell,
  table,
  ...rest
}: PropsMultiSelect<TData> | PropsSelect<TData> | PropsTextInput<TData>) => {
  const {
    getState,
    options: {
      createDisplayMode,
      editDisplayMode,
      mantineEditSelectProps,
      mantineEditTextInputProps,
    },
    refs: { editInputRefs },
    setCreatingRow,
    setEditingCell,
    setEditingRow,
  } = table;
  const { column, row } = cell;
  const { columnDef } = column;
  const { creatingRow, editingRow } = getState();

  const isCreating = creatingRow?.id === row.id;
  const isEditing = editingRow?.id === row.id;
  const isSelectEdit = columnDef.editVariant === 'select';
  const isMultiSelectEdit = columnDef.editVariant === 'multi-select';

  const [value, setValue] = useState(() => cell.getValue<any>());

  const arg = { cell, column, row, table };
  const textInputProps = {
    ...parseFromValuesOrFunc(mantineEditTextInputProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineEditTextInputProps, arg),
    ...rest,
  } as MRT_TextInputProps;

  const selectProps = {
    ...parseFromValuesOrFunc(mantineEditSelectProps, arg),
    ...parseFromValuesOrFunc(columnDef.mantineEditSelectProps, arg),
    ...rest,
  };

  const saveInputValueToRowCache = (newValue: null | string) => {
    //@ts-ignore
    row._valuesCache[column.id] = newValue;
    if (isCreating) {
      setCreatingRow(row);
    } else if (isEditing) {
      setEditingRow(row);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    textInputProps.onBlur?.(event);
    saveInputValueToRowCache(value);
    setEditingCell(null);
  };

  const handleEnterKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    textInputProps.onKeyDown?.(event);
    if (event.key === 'Enter') {
      editInputRefs.current[cell.id]?.blur();
    }
  };

  if (columnDef.Edit) {
    return columnDef.Edit?.({ cell, column, row, table });
  }

  const commonProps = {
    disabled: parseFromValuesOrFunc(columnDef.enableEditing, row) === false,
    label: ['custom', 'modal'].includes(
      (isCreating ? createDisplayMode : editDisplayMode) as string,
    )
      ? column.columnDef.header
      : undefined,
    name: cell.id,
    onClick: (e: any) => {
      e.stopPropagation();
      textInputProps?.onClick?.(e);
    },
    placeholder: !['custom', 'modal'].includes(
      (isCreating ? createDisplayMode : editDisplayMode) as string,
    )
      ? columnDef.header
      : undefined,
    value,
    variant: editDisplayMode === 'table' ? 'unstyled' : 'default',
  } as const;

  if (isSelectEdit) {
    return (
      <Select
        {...commonProps}
        searchable
        value={value as any}
        {...(selectProps as MRT_SelectProps)}
        onBlur={handleBlur}
        onChange={(value, option) => {
          (selectProps as MRT_SelectProps).onChange?.(value as any, option);
          setValue(value);
        }}
        onClick={(e) => {
          e.stopPropagation();
          selectProps?.onClick?.(e);
        }}
        ref={(node) => {
          if (node) {
            editInputRefs.current[cell.id] = node;
            if (selectProps.ref) {
              selectProps.ref.current = node;
            }
          }
        }}
      />
    );
  }

  if (isMultiSelectEdit) {
    return (
      <MultiSelect
        {...commonProps}
        searchable
        value={value}
        {...(selectProps as MRT_MultiSelectProps)}
        onBlur={handleBlur}
        onChange={(newValue) => {
          (selectProps as MRT_MultiSelectProps).onChange?.(value as any);
          setValue(newValue);
          // Save if not in focus, otherwise it will be handled by onBlur
          if (document.activeElement === editInputRefs.current[cell.id]) return;
          saveInputValueToRowCache(newValue as any);
        }}
        onClick={(e) => {
          e.stopPropagation();
          selectProps?.onClick?.(e);
        }}
        ref={(node) => {
          if (node) {
            editInputRefs.current[cell.id] = node;
            if (selectProps.ref) {
              selectProps.ref.current = node;
            }
          }
        }}
      />
    );
  }

  return (
    <TextInput
      {...commonProps}
      onKeyDown={handleEnterKeyDown}
      value={value ?? ''}
      {...textInputProps}
      onBlur={handleBlur}
      onChange={(event) => {
        textInputProps.onChange?.(event);
        setValue(event.target.value);
      }}
      onClick={(event) => {
        event.stopPropagation();
        textInputProps?.onClick?.(event);
      }}
      ref={(node) => {
        if (node) {
          editInputRefs.current[cell.id] = node;
          if (textInputProps.ref) {
            textInputProps.ref.current = node;
          }
        }
      }}
    />
  );
};
