import type { InputBaseFactory } from '@nex-ui/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const InputBaseStylesApi: StylesApiData<InputBaseFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};
