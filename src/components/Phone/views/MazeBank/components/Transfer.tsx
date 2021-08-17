import { Flex, FormControl, IconButton } from '@chakra-ui/react';
import { FormButton } from 'form/FormButton';
import { FormInput } from 'form/FormInput';
import { FormSelect } from 'form/FormSelect';
import { actions, selectors } from 'rdx/phone/mazeBank';
import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { Header } from './Dashboard/Header';

const initialState = { target: '', amount: '', title: '', transferType: 0 };

export const Transfer = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const inProgress = useSelector(selectors.selectInProgress);
  const data = useSelector(selectors.selectBankData);

  const transferStatus = useSelector(selectors.selectTransferStatus);
  const { navigate } = useQueryRouterNav();

  const handleChange = (data: any) => {
    setFormData((prevState) => ({ ...prevState, ...data }));
  };

  const onSubmit = () => {
    dispatch(actions.sendBankTransfer(formData));
    setFormData(initialState);
  };

  useEffect(() => {
    if (transferStatus) navigate('phone~~mazebank');
  }, [transferStatus]);

  const options = [
    { name: 'Nadaj danymi osobowymi', value: 0 },
    { name: 'Nadaj numerem konta', value: 1 },
    { name: 'Przelew anonimowy', value: 2 },
  ];

  return (
    <Flex direction="column" px="10px">
      <Header>
        <IconButton
          onClick={() => navigate('phone~~mazebank~dashboard')}
          fontSize="20px"
          aria-label="Wróć"
          icon={<FiArrowLeft />}
        />
      </Header>
      <Flex w="100%" h="100%" direction="column" justifyContent="space-between">
        <FormControl onSubmit={(e) => e.preventDefault()}>
          <FormInput
            id="target"
            type="number"
            label="Odbiorca"
            labelColor="brand.mazebank"
            variant="flushed"
            isRequired
            hint="Ciag o dlugosci 10 znaków"
            value={formData.target}
            color="black"
            isDisabled={inProgress}
            onChange={(data) => handleChange({ target: data })}
          />
          <FormInput
            id="amount"
            type="number"
            label="Wartość"
            labelColor="brand.mazebank"
            isRequired
            color="black"
            hint={`Dostępne środki: $${data?.money}`}
            value={formData.amount}
            isDisabled={inProgress}
            onChange={(data) => handleChange({ amount: data })}
          />
          <FormInput
            id="title"
            label="Tytuł przelewu"
            labelColor="brand.mazebank"
            isRequired
            color="black"
            value={formData.title}
            isDisabled={inProgress}
            onChange={(data) => handleChange({ title: data })}
          />
          <FormSelect
            id="transferType"
            label="Typ przelewu"
            options={options}
            labelColor="brand.mazebank"
            isRequired
            value={formData.transferType}
            color="black"
            isDisabled={inProgress}
            onChange={(data) => handleChange({ transferType: data })}
          />
          <FormButton
            fontSize="10pt"
            isLoading={inProgress}
            backgroundColor="brand.mazebank"
            onClick={onSubmit}
          >
            WYŚLIJ PRZELEW
          </FormButton>
        </FormControl>
      </Flex>
    </Flex>
  );
};
