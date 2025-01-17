import { CodeHighlightTabs } from '@nex-ui/code-highlight';
import { MantineDemo } from '@nex-uix/demo';

const tsxCode = `
import { Group, Button, NexProvider, createTheme } from '@nex-ui/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <NexProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </NexProvider>
  );
}
`;

const cssCode = `
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`;

const code = `
import { CodeHighlightTabs } from '@nex-ui/code-highlight';

const tsxCode = \`${tsxCode}\`;

const cssCode = \`${cssCode}\`;

function Demo() {
  return (
    <CodeHighlightTabs
      withExpandButton
      defaultExpanded={false}
      expandCodeLabel="Show full code"
      collapseCodeLabel="Show less"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <CodeHighlightTabs
      withExpandButton
      defaultExpanded={false}
      expandCodeLabel="Show full code"
      collapseCodeLabel="Show less"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}

export const expand: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
