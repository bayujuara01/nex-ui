import { DEFAULT_THEME } from '@nex-ui/core';
import { MdxCodeHighlight } from '../MdxProvider';

export function DefaultThemeData() {
  return <MdxCodeHighlight code={JSON.stringify(DEFAULT_THEME, null, 2)} language="json" />;
}
