import { Text } from '@nex-ui/core';
import { useDocumentTitle, useDocumentVisibility } from '@nex-ui/hooks';
import { MantineDemo } from '@nex-uix/demo';

const code = `
import { Text } from '@nex-ui/core';
import { useDocumentTitle, useDocumentVisibility } from '@nex-ui/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
