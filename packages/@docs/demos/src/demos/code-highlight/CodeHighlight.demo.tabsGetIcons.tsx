import { CodeHighlightTabs } from '@nex-ui/code-highlight';
import { MantineDemo } from '@nex-uix/demo';
import { CssIcon, TypeScriptIcon } from '@nex-uix/dev-icons';

const tsxCode = `
function Button() {
  return <button>Click me</button>;
}
`;

const cssCode = `
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;

const code = `
import { CodeHighlightTabs } from '@nex-ui/code-highlight';
import { TypeScriptIcon, CssIcon } from '@nex-uix/dev-icons';

const tsxCode = \`${tsxCode}\`;

const cssCode = \`${cssCode}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}

export const tabsGetIcons: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
