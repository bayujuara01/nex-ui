import { useTextSelection } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { useTextSelection } from '@nex-ui/hooks';

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>Selected text: {selection?.toString()}</div>
    </>
  );
}
`;

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>
        Selected text: <b>{selection?.toString()}</b>
      </div>
    </>
  );
}

export const useTextSelectionUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
