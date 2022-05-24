import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HightLightCard } from '../../components/HightLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '13/04/2020'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Desenvolvimento de site',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '10/04/2020'
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '10/04/2020'
    }
  ]
  
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>  <TransactionCard data={item}/>}
        />
      </Transections>

    </Container>
  )
}