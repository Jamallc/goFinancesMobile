import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HightLightCard } from '../../components/HightLightCard';
import { TransactionCard } from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HightLightCards,
  Transections,
  Title,
  TransectionList
} from './styles'

export function Dashboard() {
  const data = [{
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2020'
  },
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2020'
  },
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2020'
  }]
  return (
    <Container>
      <Header>

        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/76965306?v=4' }}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Weber</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HightLightCards
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 24 }}
      >
        <HightLightCard
          type='up'
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HightLightCard
          type='down'
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HightLightCard
          type='total'
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HightLightCards>

      <Transections>
        <Title>Listagem</Title>
        <TransectionList
          data={data}
          renderItem={({ item }) =>  <TransactionCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />
      </Transections>

    </Container>
  )
}