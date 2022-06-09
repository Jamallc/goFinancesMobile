import React, { useState } from 'react';
import { Button } from '../../components/forms/Button';
import { CategorySelect } from '../../components/forms/CategorySelect';
import { Input } from '../../components/forms/Input';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { Container, Fields, Form, Header, Title, TransactionTypes } from './styles';


export function Register() {
  const [transactionType, setTransactionType] = useState("")

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='Preço'
          />
          <TransactionTypes>
            <TransactionTypeButton
              type='up'
              title="Income"
              onPress={() => handleTransactionTypeSelect("up")}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type='down'
              title="Outcome"
              onPress={() => handleTransactionTypeSelect("down")}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>

          <CategorySelect title='Categoria'/>
        </Fields>

        <Button title='Enviar' />
      </Form>
    </Container>
  )
}