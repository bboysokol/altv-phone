import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { useQueryRouterNav } from '../../../../routes/QueryRouter/useQueryRouterNav';
import { DateFormat } from '../../elements/DateFormat';
import { Screen } from '../../elements/Screen';
import { Time } from '../../elements/Time';

export const LockedScreen = () => {
  const { navigate } = useQueryRouterNav();

  return (
    <Screen bg="transparent">
      <Flex
        w="100%"
        h="100%"
        direction="column"
        alignItems="center"
        pt={10}
        fontWeight="100"
        fontStyle="normal"
        textShadow="0px 0 20px black"
        onClick={() => navigate('phone~~main')}
      >
        <Text fontSize={94} lineHeight={1} mt={10}>
          <Time />
        </Text>
        <Text fontWeight="200" fontSize={24}>
          <DateFormat />
        </Text>
        <Flex flex={1} />
      </Flex>
    </Screen>
  );
};
