import { Flex, Image, Spacer, useTheme } from '@chakra-ui/react';
import { AppIcon } from 'components/Phone/elements/AppIcon/AppIcon';
import React from 'react';
import { IoIosCall, IoIosCamera, IoIosChatbubbles, IoIosCog, IoIosContacts } from 'react-icons/io';
import { Screen } from '../../elements/Screen';

export const MainScrreen = () => {
  const theme = useTheme();

  return (
    <Screen bg="transparent">
      <Flex w="100%" h="100%" direction="column">
        <Flex alignItems="center" justifyContent="center" flexWrap="wrap" py={2} px={4} pt={6}>
          <AppIcon
            gradient="linear(to-b, rgb(44, 175, 87), rgb(44, 175, 87) )"
            label="Bleeter"
            pb={5}
            to="phone~~bleeter"
          >
            <Image boxSize="40px" src="assets/images/bleeter.png" />
          </AppIcon>
          <AppIcon gradient="white" label="MazeBank" pb={5} to="phone~~mazebank">
            <Image boxSize="40px" src="assets/images/mazebank.png" />
          </AppIcon>
          <AppIcon
            gradient="linear(to-b, white 30%, purple.700 )"
            label="Darknet"
            pb={5}
            to="phone~~darknet"
          >
            <Image boxSize="40px" src="assets/images/tor-icon.png" />
          </AppIcon>
          <AppIcon
            gradient="linear(to-b, red.500, red.600 )"
            label="Life Invader"
            pb={5}
            to="phone~~lifeinvader"
          >
            <Image boxSize="40px" src="assets/images/lifeinvader.png" />
          </AppIcon>
          <AppIcon
            gradient="linear(to-b, gray.900, gray.700)"
            label="Ustawienia"
            pb={5}
            to="phone~~settings"
          >
            <IoIosCog size="40px" />
          </AppIcon>
          <Flex flex="1 0 25%" />
          <Flex flex="1 0 25%" />
          <Flex flex="1 0 25%" />
        </Flex>
        <Spacer />
        <Flex position="relative" justifyContent="center" alignItems="center" mb={2} py={3} px={5}>
          <Flex
            bg="rgba(0, 0, 0, 0.15)"
            w="100%"
            justifyContent="center"
            alignItems="center"
            px={6}
            py={4}
            borderRadius="25pt"
          >
            <AppIcon
              gradient="linear(to-b, brand.green.dark, brand.green.light)"
              to="phone~~dialler"
            >
              <IoIosCall size="40px" />
            </AppIcon>
            <AppIcon
              gradient="linear(to-b, brand.blue.dark, brand.blue.light)"
              to="phone~~messages"
            >
              <IoIosChatbubbles size="40px" />
            </AppIcon>
            <AppIcon
              gradient="linear(to-b, brand.yellow.dark, brand.yellow.light)"
              to="phone~~contacts"
            >
              <IoIosContacts size="40px" />
            </AppIcon>
            <AppIcon gradient="linear(to-b, gray.200, gray.500)">
              <IoIosCamera size="40px" color={theme.colors.gray[900]} />
            </AppIcon>
          </Flex>
        </Flex>
      </Flex>
    </Screen>
  );
};
