import React from 'react';

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

import Image from '~/assets/images/home.png';

export default function Home({navigation}) {
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
