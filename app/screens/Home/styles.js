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

export const ListBooksFavorites = styled.FlatList``;

export const SeparatorList = styled.View`
  margin-left: 10px;
`;

export const TitleListFavoritesContainer = styled.View`
  flex-direction: row;
  margin-top: 34px;
  margin-bottom: 20px;
`;

export const TitleListFavorites = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: ${theme.sizes.h2}px;
  color: ${theme.colors.black};
  margin-left: 10px;
`;

export const ListItemContainer = styled.View`
  width: 100px;
`;

export const BookInfoTitle = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.sizes.h2}px;
  color: ${theme.colors.black};
`;

export const BookInfoText = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.sizes.h2}px;
  color: ${theme.colors.gray};
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
