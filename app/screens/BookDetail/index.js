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

import {useDispatch, useSelector} from 'react-redux';
import {Creators as BooksActions} from '~/store/ducks/books';

import dayjs from '~/services/dayjs';

import Icon from '~/components/Icon';

export default function BookDetail() {
  const dispatch = useDispatch();

  const selecionado = useSelector((state) => state.books.bookSelecionado);

  function handleFavoriteOrRemove() {
    if (selecionado?.isFavorite) {
      dispatch(BooksActions.removeBookFavorite({idBook: selecionado?.id}));
    } else {
      dispatch(BooksActions.addBookFavorite({book: selecionado}));
    }
  }

  const book = selecionado?.volumeInfo;

  return (
    <Container>
      <BookContainer>
        <ImageBook source={book?.imageLinks?.thumbnail} />

        <BookInfoContainer>
          <BookInfoTitleContainer>
            <BookInfoTitle numberOfLines={1}>{book?.title}</BookInfoTitle>

            <ButtonFavoriteBookContainer>
              <ButtonFavoriteBook onPress={handleFavoriteOrRemove}>
                <Icon
                  name={selecionado?.isFavorite ? 'heart' : 'heart-outline'}
                  color={
                    selecionado?.isFavorite
                      ? theme.colors.red
                      : theme.colors.grayLight
                  }
                />
              </ButtonFavoriteBook>
            </ButtonFavoriteBookContainer>
          </BookInfoTitleContainer>

          {book?.authors && <BookInfoText>{book?.authors[0]}</BookInfoText>}

          <BookDateContainer>
            <Icon
              name="calendar-outline"
              color={theme.colors.gray}
              width={16}
              height={16}
            />
            <BookInfoText>
              {dayjs(book?.publishedDate).format('YYYY')}
            </BookInfoText>
          </BookDateContainer>

          <BookPageContainer>
            <Icon
              name="book-open-outline"
              color={theme.colors.gray}
              width={16}
              height={16}
            />
            <BookInfoText>{book?.pageCount} Paginas</BookInfoText>
          </BookPageContainer>
          {book?.categories && (
            <BookCategoryLabel>{book?.categories[0]}</BookCategoryLabel>
          )}
        </BookInfoContainer>
      </BookContainer>

      {book?.description && (
        <BookDescriptionContainer>
          <BookDescriptionLabel>Descriçao</BookDescriptionLabel>

          <BookDescriptionText>{book?.description}</BookDescriptionText>
        </BookDescriptionContainer>
      )}
    </Container>
  );
}
