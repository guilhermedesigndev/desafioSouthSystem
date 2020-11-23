import React from 'react';

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

import {useSelector} from 'react-redux';

export default function Home({navigation}) {
  const booksFavorite = useSelector((state) => state.books.booksFavorite);

  function renderItem({item}) {
    return (
      <ListItemContainer>
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
              //contentContainerStyle={{marginRight: 24}}
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
    </HomeContainer>
  );
}
