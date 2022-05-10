import React from 'react';
import { HightLightCard } from '../../components/HightLightCard';
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
  HightLightCards
} from './styles'

export function Dashboard() {
  return(
    <Container>
      <Header>

        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{uri: 'https://avatars.githubusercontent.com/u/76965306?v=4'}}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Weber</UserName>
            </User>
          </UserInfo>
        <Icon name="power"/>
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
    </Container>
  )
}