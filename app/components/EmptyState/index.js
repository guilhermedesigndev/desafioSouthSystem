import React from 'react';

import {EmptyContainer, ImageEmpty, EmptyText, Loading} from './styles';

export default function EmptyState({image, title, footer, loading}) {
  return (
    <EmptyContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageEmpty source={image} />
          <EmptyText>{title}</EmptyText>

          {footer}
        </>
      )}
    </EmptyContainer>
  );
}
