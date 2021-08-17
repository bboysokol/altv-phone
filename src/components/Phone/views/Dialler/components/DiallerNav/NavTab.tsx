import { Flex, Text } from '@chakra-ui/layout';
import Tab from 'interfaces/Dialler/Tab';
import React from 'react';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';

export const NavTab = ({ text, icon, redirect }: Tab) => {
  const { navigate } = useQueryRouterNav();
  const Icon = icon;

  const handleClick = () => {
    navigate(redirect);
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      type="button"
      _hover={{ opacity: '0.5' }}
      _active={{ opacity: '0.2' }}
      onClick={handleClick}
    >
      <Icon size="25px" />
      <Text fontSize="xs" my={0}>
        {text}
      </Text>
    </Flex>
  );
};
