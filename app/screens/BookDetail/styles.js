import styled from 'styled-components/native';

import * as theme from '~/styles/theme';

export const Container = styled.View`
  margin: 24px 24px 0 20px;
  background: ${theme.colors.white};
`;

export const BookContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const BookInfoContainer = styled.View`
  justify-content: space-between;
  margin-left: 10px;
`;

export const BookInfoTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BookInfoTitle = styled.Text`
  flex: 1;
  font-family: ${theme.fonts.bold};
  font-size: ${theme.sizes.h1}px;
  color: ${theme.colors.black};
  margin-right: 10px;
`;

export const ButtonFavoriteBookContainer = styled.View`
  flex: 0;
`;

export const ButtonFavoriteBook = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: ${50 / 2}px;
  border: 1px solid #f0f0f0;
  justify-content: center;
  align-items: center;
`;

export const BookInfoText = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.sizes.base}px;
  color: ${theme.colors.gray};
  margin: 3px 2px;
`;

export const BookDateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BookPageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BookCategoryLabel = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.sizes.base}px;
  color: ${theme.colors.black};
  border: 1px solid #f0f0f0;
  padding: 6px 20px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const BookDescriptionContainer = styled.View`
  margin-top: 30px;
`;

export const BookDescriptionLabel = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: ${theme.sizes.h1}px;
  color: ${theme.colors.black};
  margin-bottom: 10px;
`;

export const BookDescriptionText = styled.Text`
  font-family: ${theme.fonts.light};
  font-size: ${theme.sizes.h2}px;
  color: ${theme.colors.black};
`;
