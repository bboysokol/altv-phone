import { Center, Flex, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { nanoid } from '@reduxjs/toolkit';
import { FormButton } from 'form/FormButton';
import { actions, selectors } from 'rdx/phone/mazeBank';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { AccountBalance } from './AccountBalance';
import { Header } from './Header';
import { HistoryItem } from './HistoryItem';

const History = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 0 10px;
  overflow-y: auto;
`;

const HistoryContainer = styled.div`
  height: 80%;
  margin-top: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px !important;
    border-radius: 10px !important;
    background: rgba(0, 0, 0, 0.2) !important;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px !important;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2) !important;
    border-radius: 5px !important;
  }
`;

export const Dashboard = () => {
  const data = useSelector(selectors.selectBankData);
  const dispatch = useDispatch();
  const { navigate } = useQueryRouterNav();

  useEffect(() => {
    dispatch(actions.setTransferStatus(undefined));
    dispatch(actions.getBankAccount(-1));
  }, []);

  return (
    <Flex direction="column" px="10px" height="100%">
      <Header />
      <AccountBalance />
      <Center>
        <Stack>
          <Text fontSize="12pt" pb={1} m={0}>{`Numer konta: ${data?.accountNumber}`}</Text>
          <FormButton
            onClick={() => navigate('phone~~mazebank~transfer')}
            backgroundColor="brand.mazebank"
          >
            <Text letterSpacing="1px" fontSize="10pt" my={0}>
              Wykonaj przelew
            </Text>
          </FormButton>
        </Stack>
      </Center>
      <History>
        <Text fontSize="14pt" fontWeight="bold" m={0}>
          Historia
        </Text>
        <HistoryContainer>
          {data?.transactions?.map((item) => (
            <HistoryItem key={nanoid(5)} {...item} />
          ))}
        </HistoryContainer>
      </History>
    </Flex>
  );
};
