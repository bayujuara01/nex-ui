import type { NexTheme } from '../MantineProvider';

export interface CSSProperties extends React.CSSProperties {
  [key: string]: any;
}

type MantineStyle = CSSProperties | ((theme: NexTheme) => CSSProperties);
export type MantineStyleProp = MantineStyle | MantineStyle[] | MantineStyleProp[] | undefined;

export type CssVariable = `--${string}`;

export type CssVariables<Variable extends string = CssVariable> = Partial<Record<Variable, string>>;

export type CssVars<Variable extends string = CssVariable> =
  | CssVariables<Variable>
  | ((theme: NexTheme) => CssVariables<Variable>)
  | CssVars<Variable>[];

export type CssVarsProp<Variable extends string = CssVariable> =
  | CssVars<Variable>
  | CssVars<Variable>[];
