import { Flex, IconButton, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { actions, selectors } from 'rdx/phone/settings';
import React, { useEffect } from 'react';
import { FcIphone } from 'react-icons/fc';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { Header } from '../Header';

const Container = styled.div`
  height: 100%;
`;

export const About = () => {
  const { navigate } = useQueryRouterNav();
  const dispatch = useDispatch();
  const data = useSelector(selectors.selectPhoneInfo);

  const phoneNumber = data?.number || 'Niedostępny';

  useEffect(() => {
    dispatch(actions.getPhoneInfo());
  }, []);

  return (
    <Container>
      <Header>
        <IconButton
          onClick={() => navigate('phone~~settings')}
          fontSize="20px"
          aria-label="Wróć"
          ml={2}
          mr="-18px"
          borderColor="transparent"
          bg="black"
          color="white"
          icon={<FiArrowLeft />}
        />
      </Header>
      <Flex direction="column">
        <Flex alignItems="center" px="20px" py="10px">
          <FcIphone fontSize="35px" />
          <Text fontSize="10pt" m={0}>{`Numer telefonu: ${phoneNumber}`}</Text>
        </Flex>
      </Flex>
    </Container>
  );
};
