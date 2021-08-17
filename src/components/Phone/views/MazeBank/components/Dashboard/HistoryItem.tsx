import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import BankTransactionData from 'interfaces/Bank/BankTransactionData';
import React from 'react';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Details = styled.div`
  padding: 0 20px 0 10px;
  flex: 1;
  flex-direction: column;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
  color: green;
`;

export const HistoryItem = (transaction: BankTransactionData) => {
  return (
    <Container>
      <Details>
        <Text fontWeight="600" my={0} fontSize="11pt">
          {transaction.title}{' '}
        </Text>
        <Text fontSize="10pt" my={0}>
          {dayjs(transaction.date).calendar('', {
            sameDay: '[Dzisiaj o] HH:mm',
            nextDay: '[Jutro o] HH:mm',
            nextWeek: 'dddd [o] HH:mm',
            lastDay: '[Wczoraj o] HH:mm',
            lastWeek: 'dddd [o] HH:mm',
            sameElse: 'DD/MM/YYYY',
          })}
        </Text>
      </Details>
      <Content>
        <Text
          fontSize="11pt"
          fontWeight="600"
          my={0}
          style={{ color: transaction.transactionType > 0 ? 'red' : 'green' }}
        >
          {`${transaction.transactionType > 0 ? '-$' : '$'}${transaction.amount}`}
        </Text>
      </Content>
    </Container>
  );
};
