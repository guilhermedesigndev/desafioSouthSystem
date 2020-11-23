import React from 'react';

import {Image} from './styles';

export default function ImageBook({source, width = 100, height = 140}) {
  return (
    <Image
      style={{width, height}}
      resizeMode="contain"
      source={{uri: `${source}`}}
    />
  );
}
