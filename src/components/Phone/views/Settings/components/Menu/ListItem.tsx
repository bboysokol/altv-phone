import { Flex } from '@chakra-ui/layout';
import React from 'react';

export type ListItemProps = {
  onClick?: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({ children, onClick }) => {
  return (
    <Flex
      onClick={onClick}
      px="30px"
      py="8px"
      justifyContent="space-between"
      transition="0.15s ease-in-out"
      _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
    >
      {children}
    </Flex>
  );
};
