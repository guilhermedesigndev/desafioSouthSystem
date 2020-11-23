import React from 'react';

import {EmptyContainer, ImageEmpty, EmptyText} from './styles';

export default function EmptyState({image, title, footer}) {
  return (
    <EmptyContainer>
      <ImageEmpty source={image} />
      <EmptyText>{title}</EmptyText>

      {footer}
    </EmptyContainer>
  );
}
