import React, {useEffect, useCallback} from 'react';
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

import Icon from '~/components/Icon';

export default function BookDetail({book}) {
  const dispatch = useDispatch();

  const booksFavorite = useSelector((state) => state.books.booksFavorite);

  useEffect(() => {
    dispatch(BooksActions.checkBookIsFavorite({idBook: book?.id}));
  }, [dispatch, book.id]);

  function isBookFavorite() {
    for (let i = 0; i < booksFavorite.length; i++) {
      if (booksFavorite[i].id === book?.id) {
        return true;
      }

      return false;
    }
  }

  function handleFavoriteOrRemove() {
    dispatch(BooksActions.checkBookIsFavorite({idBook: book?.id}));

    if (book?.isFavorite) {
      dispatch(BooksActions.removeBookFavorite({idBook: book?.id}));
    } else {
      dispatch(BooksActions.addBookFavorite({book}));
    }
  }

  console.log('Books Favorite: ', book);

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
              <ButtonFavoriteBook onPress={handleFavoriteOrRemove}>
                <Icon
                  name={isBookFavorite() ? 'heart' : 'heart-outline'}
                  color={
                    isBookFavorite() ? theme.colors.red : theme.colors.grayLight
                  }
                />
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
