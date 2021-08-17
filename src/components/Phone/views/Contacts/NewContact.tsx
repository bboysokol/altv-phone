import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import { Header } from 'components/Phone/elements/Header';
import { actions, selectors } from 'rdx/phone/contacts';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div<{ enabled?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 55px;
  top: ${({ enabled }) => (enabled ? '0' : '105%')};
  transition: top 0.3s ease-in-out, background-color 2s ease-in;
  background-color: ${({ enabled }) => (enabled ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
  display: flex;
`;

type NewContactProps = {
  enabled?: boolean;
  onCancel: () => void;
};

export const NewContact = ({ enabled, onCancel }: NewContactProps) => {
  const inProgress = useSelector(selectors.selectInProgress);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) setName(e.target.value);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) setNumber(e.target.value);
  };

  const handleAddContact = () => {
    setSubmitted(true);
    dispatch(actions.addContact({ id: 0, name, number: parseInt(number) }));
  };

  useEffect(() => {
    if (submitted && !inProgress) {
      onCancel();
      setSubmitted(false);
      setNumber('');
      setName('');
    }
  }, [inProgress]);

  return (
    <Container enabled={enabled}>
      <Flex flex={1} onClick={onCancel} />
      <Content>
        <Flex flex={1} direction="column" justifyContent="center" bg="gray.900" py={2}>
          <Header onBack={onCancel} fontSize="12pt" backLabel="Anuluj">
            <Text> Nowy kontakt</Text>
          </Header>
          <Flex
            alignItems="center"
            fontSize="16px"
            px={5}
            borderColor="gray.600"
            direction="column"
          >
            <Text px={4} py={2} m={0}>
              Nazwa
            </Text>
            <Input
              pt={2}
              pb={1}
              w="80%"
              variant="filled"
              value={name}
              onChange={handleNameChange}
              focusBorderColor="brand.blue.dark"
            />
            <Text px={4} py={2} m={0}>
              Numer
            </Text>
            <Input
              type="number"
              w="80%"
              pt={2}
              pb={1}
              variant="filled"
              value={number}
              onChange={handleNumberChange}
              focusBorderColor="brand.blue.dark"
            />
            <Button
              bg="brand.blue.dark"
              m={6}
              size="md"
              fontSize="12px"
              onClick={handleAddContact}
              color="white"
            >
              Dodaj kontakt
            </Button>
          </Flex>
        </Flex>
      </Content>
    </Container>
  );
};
