import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';

import { pluginConditionState, valueState } from './states';

import Observer from './components/observer';
import Input from './components/input';

type Props = { condition: Plugin.Condition; initialValue: any };

const Component: FC<Props> = ({ condition, initialValue }) => (
  <RecoilRoot
    initializeState={({ set }) => {
      set(pluginConditionState, condition);
      set(valueState, initialValue);
    }}
  >
    <Observer />
    <Input />
  </RecoilRoot>
);

export default Component;
