import React from 'react';

import ImageBook from '~/components/ImageBook';

import {
  Container,
  BookContainer,
  BookInfoContainer,
  BookInfoTitleContainer,
  BookInfoTitle,
  ButtonFavoriteBookContainer,
  ButtonFavoriteBook,
  BookInfoText,
  BookDateContainer,
  BookPageContainer,
  BookCategoryLabel,
  BookDescriptionContainer,
  BookDescriptionLabel,
  BookDescriptionText,
} from './styles';

import * as theme from '~/styles/theme';

import Icon from '~/components/Icon';

export default function BookDetail({book}) {
  console.log('Book: ', book);
  return (
    <Container>
      <BookContainer>
        <ImageBook source={book?.volumeInfo?.imageLinks?.thumbnail} />

        <BookInfoContainer>
          <BookInfoTitleContainer>
            <BookInfoTitle numberOfLines={1}>
              {book?.volumeInfo?.title}
            </BookInfoTitle>

            <ButtonFavoriteBookContainer>
              <ButtonFavoriteBook>
                <Icon name="heart-outline" color={theme.colors.grayLight} />
              </ButtonFavoriteBook>
            </ButtonFavoriteBookContainer>
          </BookInfoTitleContainer>

          {book?.volumeInfo?.authors && (
            <BookInfoText>{book?.volumeInfo?.authors[0]}</BookInfoText>
          )}

          <BookDateContainer>
            <Icon
              name="calendar-outline"
              color={theme.colors.gray}
              width={16}
              height={16}
            />
            <BookInfoText>{book?.volumeInfo?.publishedDate}</BookInfoText>
          </BookDateContainer>

          <BookPageContainer>
            <Icon
              name="book-open-outline"
              color={theme.colors.gray}
              width={16}
              height={16}
            />
            <BookInfoText>{book?.volumeInfo?.pageCount} Paginas</BookInfoText>
          </BookPageContainer>
          {book?.volumeInfo?.categories && (
            <BookCategoryLabel>
              {book?.volumeInfo?.categories[0]}
            </BookCategoryLabel>
          )}
        </BookInfoContainer>
      </BookContainer>

      <BookDescriptionContainer>
        <BookDescriptionLabel>Descriçao</BookDescriptionLabel>

        <BookDescriptionText>
          {book?.volumeInfo?.description}
        </BookDescriptionText>
      </BookDescriptionContainer>
    </Container>
  );
}
