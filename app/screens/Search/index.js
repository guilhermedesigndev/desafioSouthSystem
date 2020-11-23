import React, {useRef, useState, useEffect} from 'react';
import {Modalize} from 'react-native-modalize';

import Icon from '~/components/Icon';
import EmpryState from '~/components/EmptyState';
import ImageBook from '~/components/ImageBook';

import * as theme from '~/styles/theme';

import BookDetail from '~/screens/BookDetail';

import {useDispatch, useSelector} from 'react-redux';
import {Creators as BooksActions} from '~/store/ducks/books';

import {
  Container,
  Wrapper,
  InputContainer,
  Input,
  IconSearch,
  ListBooks,
  SeparatorList,
  ListItemContainer,
  ListItemWrapper,
  ListItemBook,
  ListItemTitle,
  ListItemText,
  ListDateContainer,
} from './styles';

import Image from '~/assets/images/search.png';

export default function Search() {
  const dispatch = useDispatch();

  const modalizeRef = useRef(null);

  const [bookSelected, setBookSelected] = useState(null);
  const [textSearch, setTextSearch] = useState('');

  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.booksLoading);

  useEffect(() => {
    return () => {
      setTextSearch('');
      dispatch(BooksActions.cleanBooks({}));
    };
  }, [dispatch]);

  function openModal() {
    modalizeRef.current?.open();
  }

  function renderItem({item}) {
    return (
      <ListItemContainer
        onPressIn={() => setBookSelected(item)}
        onPress={openModal}>
        <ListItemWrapper>
          <ImageBook source={item?.volumeInfo?.imageLinks?.thumbnail} />

          <ListItemBook>
            <ListItemTitle>{item?.volumeInfo?.title}</ListItemTitle>
            {item?.volumeInfo?.authors && (
              <ListItemText>{item?.volumeInfo?.authors[0]}</ListItemText>
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
      <Wrapper>
        <InputContainer>
          <Input
            placeholder="Digite aqui o nome do livro"
            placeholderTextColor={'#B0B0C3'}
            autoFocus
            onChangeText={(text) => setTextSearch(text)}
            onSubmitEditing={() =>
              dispatch(BooksActions.getBooks({name: textSearch}))
            }
            value={textSearch}
          />

          <IconSearch
            onPress={() => {
              setTextSearch('');
              dispatch(BooksActions.cleanBooks({}));
            }}>
            <Icon name={textSearch ? 'close-outline' : 'search'} />
          </IconSearch>
        </InputContainer>

        {books.length > 0 ? (
          <ListBooks
            data={books}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{margin: 24}}
            ItemSeparatorComponent={() => <SeparatorList />}
          />
        ) : (
          <EmpryState
            loading={loading}
            image={Image}
            title={'Nenhum livro encontrado aqui'}
          />
        )}
      </Wrapper>

      <Modalize ref={modalizeRef} snapPoint={400}>
        <BookDetail book={bookSelected} />
      </Modalize>
    </Container>
  );
}
