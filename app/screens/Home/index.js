import React, {useEffect} from 'react';

import {
  HomeContainer,
  Header,
  ContainerLogo,
  ContainerLogoText,
  Content,
  EmptyContainer,
  ImageEmpty,
  EmptyText,
  ButtonSearch,
  ButtonSearchLabel,
} from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {Creators as BooksActions} from '~/store/ducks/books';

import Image from '~/assets/images/home.png';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(BooksActions.getBooks({name: 'sprint'}));
  }, [dispatch]);

  console.log('Books: ', books);

  return (
    <HomeContainer>
      <Header>
        <ContainerLogo>
          <ContainerLogoText>My</ContainerLogoText>
          <ContainerLogoText bold>Books</ContainerLogoText>
        </ContainerLogo>
      </Header>

      <Content>
        <EmptyContainer>
          <ImageEmpty source={Image} />
          <EmptyText>Você ainda não salvou nenhum livro por aqui</EmptyText>

          <ButtonSearch>
            <ButtonSearchLabel>Procurar livros</ButtonSearchLabel>
          </ButtonSearch>
        </EmptyContainer>
      </Content>
    </HomeContainer>
  );
}
