import { useNexReactTable } from '../hooks/useNexReactTable';
import {
  type NexRowData,
  type NexTableTableInstance,
  type NexTableTableOptions,
  type Xor,
} from '../types';
import { NexTablePaper } from './table/NexTablePaper';

type TableInstanceProp<TData extends NexRowData> = {
  table: NexTableTableInstance<TData>;
};

type Props<TData extends NexRowData> = Xor<
  TableInstanceProp<TData>,
  NexTableTableOptions<TData>
>;

const isTableInstanceProp = <TData extends NexRowData>(
  props: Props<TData>,
): props is TableInstanceProp<TData> =>
  (props as TableInstanceProp<TData>).table !== undefined;

export const NexReactTable = <TData extends NexRowData>(
  props: Props<TData>,
) => {
  let table: NexTableTableInstance<TData>;

  if (isTableInstanceProp(props)) {
    table = props.table;
  } else {
    table = useNexReactTable(props);
  }

  return <NexTablePaper table={table} />;
};
