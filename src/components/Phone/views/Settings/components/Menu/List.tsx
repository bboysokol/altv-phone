import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { FcIphone, FcStackOfPhotos } from 'react-icons/fc';
import { FiChevronRight } from 'react-icons/fi';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { ListItem } from './ListItem';

export const List = () => {
  const { navigate } = useQueryRouterNav();

  return (
    <Flex flex={1} direction="column">
      <Flex direction="column" flex={1} overflow="auto" bg="rgba(255, 255, 255, 0.06)">
        <ListItem onClick={() => navigate('phone~~settings~about')}>
          <Flex alignItems="center" justifyContent="space-between" flexGrow={1}>
            <Flex alignItems="center">
              <FcIphone fontSize="35px" />
              <Text pl="10px" fontSize="10pt" my={0}>
                O telefonie
              </Text>
            </Flex>
            <FiChevronRight fontSize="25px" />
          </Flex>
        </ListItem>
      </Flex>
      <Flex py="10px" />
      <Flex direction="column" flex={1} overflow="auto" bg="rgba(255, 255, 255, 0.06)">
        <ListItem onClick={() => navigate('phone~~settings~wallpaper')}>
          <Flex alignItems="center" justifyContent="space-between" flexGrow={1}>
            <Flex alignItems="center">
              <FcStackOfPhotos fontSize="35px" />
              <Text pl="10px" fontSize="10pt" my={0}>
                Tapeta
              </Text>
            </Flex>
            <FiChevronRight fontSize="25px" />
          </Flex>
        </ListItem>
      </Flex>
    </Flex>
  );
};
