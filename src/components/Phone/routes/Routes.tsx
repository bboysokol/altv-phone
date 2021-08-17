import { Flex } from '@chakra-ui/layout';
import { selectors } from 'rdx/phone/dialler';
import { CallState } from 'rdx/phone/dialler/dialler.slice';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { PhoneRoutes } from './PhoneRoutes';

export const Routes = () => {
  const { navigate } = useQueryRouterNav();
  const status = useSelector(selectors.selectStatus);

  useEffect(() => {
    if (status !== CallState.none) {
      navigate('phone~~dialler~calling');
    }
  }, []);

  return (
    <Flex flex={1} minH="100%" minW="100%" direction="column">
      <PhoneRoutes />
    </Flex>
  );
};
