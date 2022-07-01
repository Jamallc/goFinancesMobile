import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/forms/Button';
import { CategorySelectButton } from '../../components/forms/CategorySelectButton';
import { Input } from '../../components/forms/Input';
import { InputForm } from '../../components/forms/InputForm';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import { Container, Fields, Form, Header, Title, TransactionTypes } from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { number } from 'yup/lib/locale';


interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string()
  .required('Nome é obrigatório'),
  amount: Yup.number()
  .typeError("Informe um valor numérico")
  .positive("O valor não pode ser negativo")
  .required("O valor é obrigatório")
})

export function Register() {
  const [transactionType, setTransactionType] = useState("")
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

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
    if (!transactionType)
      return Alert.alert("Selecione o tipo da transação")

    if (category.key === 'category')
      return Alert.alert("Selecione a categoria")

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    }


    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              autoCapitalize='sentences'
              autoCorrect={false}
              error={!!errors.name && errors.name.message}
            />
            <InputForm
              name='amount'
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              error={!!errors.amount && errors.amount.message}
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
    </TouchableWithoutFeedback>
  )
}