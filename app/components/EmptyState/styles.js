import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const EmptyContainer = styled.View`
  align-items: center;
`;

export const ImageEmpty = styled.Image``;

export const EmptyText = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.sizes.h1 - 5}px;
  color: ${theme.colors.gray};
  text-align: center;

  margin-top: 58px;
`;

export const ButtonAction = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: ${theme.sizes.border}px;

  margin-top: 70px;
`;

export const ButtonActionLabel = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${theme.sizes.h2}px;
  color: ${theme.colors.black};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: theme.colors.primary,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
