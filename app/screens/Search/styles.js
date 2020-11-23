import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

import * as theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.white};
`;

export const Wrapper = styled.View`
  flex: 1;
  margin: 24px 24px 0 20px;
  background: ${theme.colors.white};
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  background: #f7f7f7;
  margin: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 60px;
  font-size: ${theme.sizes.h2}px;
  font-family: ${theme.fonts.regular};
`;

export const IconSearch = styled.TouchableOpacity``;

export const ListBooks = styled.FlatList``;

export const SeparatorList = styled.View`
  width: 100%;
  height: ${StyleSheet.hairlineWidth}px;
  background: ${theme.colors.grayLight};
  margin: 24px 0px;
`;

export const ListItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemWrapper = styled.View`
  flex-direction: row;
`;

export const ListItemBook = styled.View`
  margin-left: 5px;
`;

export const ListItemTitle = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.sizes.h2}px;
  color: ${theme.colors.black};
  margin-bottom: 10px;
`;

export const ListItemText = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.sizes.base}px;
  color: ${theme.colors.gray};
  margin: 3px 0px;
`;

export const ListDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
