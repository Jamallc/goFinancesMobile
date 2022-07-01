import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native';
import { Button } from '../../components/forms/Button';
import { CategorySelectButton } from '../../components/forms/CategorySelectButton';
import { Input } from '../../components/forms/Input';
import { InputForm } from '../../components/forms/InputForm';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TransactionTypes } from './styles';

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState("")
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit
  } = useForm()

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleCloseSlectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleOpenSlectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    }


    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm
            name='name'
            control={control}
            placeholder='Nome'
            autoCapitalize='words'
          />
          <InputForm
            name='amount'
            control={control}
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

          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSlectCategoryModal}
          />
        </Fields>

        <Button 
          title='Enviar'
          onPress={handleSubmit(handleRegister)}
        />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSlectCategoryModal}
        />
      </Modal>
    </Container>
  )
}