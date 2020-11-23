import React, {useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';

import Icon from '~/components/Icon';
import EmpryState from '~/components/EmptyState';

import * as theme from '~/styles/theme';

import BookDetail from '~/screens/BookDetail';

import {useDispatch, useSelector} from 'react-redux';
import {Creators as BooksActions} from '~/store/ducks/books';

import {
  Container,
  InputContainer,
  Input,
  ListBooks,
  SeparatorList,
  ListItemContainer,
  ListItemWrapper,
  ListItemBook,
  ListItemImage,
  ListItemTitle,
  ListItemText,
  ListDateContainer,
} from './styles';

import Image from '~/assets/images/home.png';

export default function Search() {
  const dispatch = useDispatch();

  const modalizeRef = useRef(null);

  const [bookSelected, setBookSelected] = useState(null);

  const books = useSelector((state) => state.books.books);

  function getBook(event) {
    const {text} = event.nativeEvent;

    if (text.trim().length > 2) {
      dispatch(BooksActions.getBooks({name: text}));
    }
  }

  function openModal() {
    modalizeRef.current?.open();
  }

  function renderItem({item}) {
    return (
      <ListItemContainer
        onPressIn={() => setBookSelected(item)}
        onPress={openModal}>
        <ListItemWrapper>
          <ListItemImage
            style={{width: 90, height: 120}}
            resizeMode="contain"
            source={{uri: `${item?.volumeInfo?.imageLinks?.thumbnail}`}}
          />

          <ListItemBook>
            <ListItemTitle>{item?.volumeInfo?.title}</ListItemTitle>
            {item?.volumeInfo?.authors && (
              <ListItemText margin>{item?.volumeInfo?.authors[0]}</ListItemText>
            )}

            <ListDateContainer>
              <Icon name="calendar-outline" color={theme.colors.gray} />
              <ListItemText>{item?.volumeInfo?.publishedDate}</ListItemText>
            </ListDateContainer>
          </ListItemBook>
        </ListItemWrapper>

        <Icon name="chevron-right-outline" />
      </ListItemContainer>
    );
  }

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Digite aqui o nome do livro"
          placeholderTextColor={'#B0B0C3'}
          autoFocus
          onChange={getBook}
        />

        <Icon name={'search'} />
      </InputContainer>

      {books.length > 0 ? (
        <ListBooks
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <SeparatorList />}
        />
      ) : (
        <EmpryState image={Image} title={'Nenhum livro encontrado aqui'} />
      )}

      <Modalize ref={modalizeRef} snapPoint={500}>
        <BookDetail book={bookSelected} />
      </Modalize>
    </Container>
  );
}
