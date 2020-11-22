import React from 'react';
import {Icon} from 'react-native-eva-icons';

import * as theme from '~/styles/theme';

export default function Icons({
  name,
  width = 24,
  height = 24,
  color = theme.colors.black,
}) {
  return <Icon name={name} width={width} height={height} fill={color} />;
}
