import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const HomeContainer = styled.View`
  flex: 1;
  padding: 24px 24px 0 20px;
  background: ${theme.colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLogo = styled.View`
  flex-direction: column;
`;

export const ContainerLogoText = styled.Text`
  font-family: ${(props) =>
    props.bold ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${(props) =>
    props.bold ? theme.sizes.monster : theme.sizes.h1}px;
  color: ${theme.colors.black};
`;

export const Content = styled.View`
  flex: 9;
  justify-content: center;
`;

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

export const ButtonSearch = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: ${theme.sizes.border}px;

  margin-top: 70px;
`;

export const ButtonSearchLabel = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${theme.sizes.h2}px;
  color: ${theme.colors.black};
`;
