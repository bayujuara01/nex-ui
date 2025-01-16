import { CssVariable } from '../../Box';
import { FactoryPayload } from '../../factory';
import { NexTheme } from '../../MantineProvider';

export type TransformVars<V> = {
  [Key in keyof V]: V[Key] extends CssVariable ? Record<V[Key], string | undefined> : never;
};

export type PartialTransformVars<V> = {
  [Key in keyof V]: V[Key] extends CssVariable
    ? Partial<Record<V[Key], string | undefined>>
    : never;
};

export type VarsResolver<Payload extends FactoryPayload> = (
  theme: NexTheme,
  props: Payload['props'],
  ctx: Payload['ctx']
) => TransformVars<Payload['vars']>;

export type PartialVarsResolver<Payload extends FactoryPayload> = (
  theme: NexTheme,
  props: Payload['props'],
  ctx: Payload['ctx']
) => PartialTransformVars<Payload['vars']>;

export function createVarsResolver<Payload extends FactoryPayload>(
  resolver: VarsResolver<Payload>
) {
  return resolver;
}
