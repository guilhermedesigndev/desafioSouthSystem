import React, {useRef} from 'react';
import {Modalize} from 'react-native-modalize';

import {
  HomeContainer,
  Header,
  ContainerLogo,
  ContainerLogoText,
  Content,
  ListBooksFavorites,
  SeparatorList,
  TitleListFavoritesContainer,
  TitleListFavorites,
  ListItemContainer,
  BookInfoTitle,
  BookInfoText,
  ButtonSearch,
  ButtonSearchLabel,
} from './styles';

import EmpryState from '~/components/EmptyState';
import ImageBook from '~/components/ImageBook';
import Icon from '~/components/Icon';

import * as theme from '~/styles/theme';

import Image from '~/assets/images/home.png';

import BookDetail from '~/screens/BookDetail';

import {useDispatch, useSelector} from 'react-redux';
import {Creators as BooksActions} from '~/store/ducks/books';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const booksFavorite = useSelector((state) => state.books.booksFavorite);

  const modalizeRef = useRef(null);

  function openModal() {
    modalizeRef.current?.open();
  }

  function renderItem({item}) {
    return (
      <ListItemContainer
        onPressIn={() => dispatch(BooksActions.bookSelecionado({book: item}))}
        onPress={openModal}>
        <ImageBook source={item?.volumeInfo?.imageLinks?.thumbnail} />

        <BookInfoTitle numberOfLines={1}>
          {item?.volumeInfo?.title}
        </BookInfoTitle>

        {item?.volumeInfo?.authors && (
          <BookInfoText numberOfLines={1}>
            {item?.volumeInfo?.authors[0]}
          </BookInfoText>
        )}
      </ListItemContainer>
    );
  }

  return (
    <HomeContainer>
      <Header>
        <ContainerLogo>
          <ContainerLogoText>My</ContainerLogoText>
          <ContainerLogoText bold>Books</ContainerLogoText>
        </ContainerLogo>
      </Header>

      <Content>
        {booksFavorite.length > 0 ? (
          <>
            <TitleListFavoritesContainer>
              <Icon name={'heart'} color={theme.colors.red} />
              <TitleListFavorites>Meus Favoritos</TitleListFavorites>
            </TitleListFavoritesContainer>

            <ListBooksFavorites
              data={booksFavorite}
              horizontal={true}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <SeparatorList />}
            />
          </>
        ) : (
          <EmpryState
            image={Image}
            title={'Você ainda não salvou nenhum livro por aqui'}
            footer={
              <ButtonSearch onPress={() => navigation.navigate('Search')}>
                <ButtonSearchLabel>Procurar livros</ButtonSearchLabel>
              </ButtonSearch>
            }
          />
        )}
      </Content>

      <Modalize ref={modalizeRef} snapPoint={400}>
        <BookDetail />
      </Modalize>
    </HomeContainer>
  );
}
