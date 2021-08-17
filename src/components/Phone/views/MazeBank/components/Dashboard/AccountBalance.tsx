import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { selectors } from 'rdx/phone/mazeBank';
import React from 'react';
import { useSelector } from 'react-redux';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountBalance = () => {
  const data = useSelector(selectors.selectBankData);

  return (
    <Container>
      <Header>
        <Text fontSize="15pt" fontWeight="bold" m={0}>
          Stan konta
        </Text>
        <Text fontSize="25pt" fontWeight="500" m={0}>
          ${data?.money}
        </Text>
      </Header>
    </Container>
  );
};
