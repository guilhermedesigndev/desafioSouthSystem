import React from 'react';

import {
  HomeContainer,
  Header,
  ContainerLogo,
  ContainerLogoText,
  Content,
  ButtonSearch,
  ButtonSearchLabel,
} from './styles';

import EmpryState from '~/components/EmptyState';

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
        <EmpryState
          image={Image}
          title={'Você ainda não salvou nenhum livro por aqui'}
          footer={
            <ButtonSearch onPress={() => navigation.navigate('Search')}>
              <ButtonSearchLabel>Procurar livros</ButtonSearchLabel>
            </ButtonSearch>
          }
        />
      </Content>
    </HomeContainer>
  );
}
