import { Flex, IconButton, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FormButton } from 'form/FormButton';
import { actions, selectors } from 'rdx/phone/settings';
import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import { Header } from '../Header';

const Container = styled.div<{ background?: string }>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url(${({ background }) => background});
`;

export const Wallpaper = () => {
  const { navigate } = useQueryRouterNav();
  const dispatch = useDispatch();
  const wallpapers = useSelector(selectors.selectWallpapers);
  const [counter, setCounter] = useState(0);
  const customUrl = '';

  useEffect(() => {
    dispatch(actions.getPhoneInfo());
  }, []);

  const onWallpaperChange = (shift: number) => {
    if (counter + shift < wallpapers.length && counter + shift >= 0) {
      setCounter((prevState) => (prevState += shift));
    }
  };

  const onWallpaperUpdate = () => {
    dispatch(actions.setWallpaper(wallpapers[counter]));
    navigate('phone~~settings');
  };

  return (
    <Container background={customUrl || wallpapers[counter].url || wallpapers[0].url}>
      <Header>
        <IconButton
          onClick={() => navigate('phone~~settings')}
          fontSize="20px"
          zIndex="10"
          ml="10px"
          mr="-18px"
          color="white"
          borderColor="transparent"
          aria-label="Wróć"
          icon={<FiArrowLeft />}
        />
      </Header>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="10px"
        position="absolute"
        height="100%"
        width="100%"
      >
        <IconButton
          onClick={() => onWallpaperChange(-1)}
          fontSize="28px"
          aria-label="Poprzedni"
          mx="8px"
          disabled={counter <= 0}
          color="white"
          borderColor="transparent"
          bg="black"
          icon={<FiArrowLeft />}
        />
        <IconButton
          onClick={() => onWallpaperChange(1)}
          fontSize="28px"
          mx="8px"
          aria-label="Kolejny"
          disabled={counter >= wallpapers.length - 1}
          bg="black"
          borderColor="transparent"
          color="white"
          icon={<FiArrowRight />}
        />
      </Flex>
      <Flex position="absolute" direction="column" bottom="80px">
        <Flex>
          <FormButton
            onClick={() => onWallpaperUpdate()}
            backgroundColor="brand.blue.dark"
            mx="10px"
          >
            <Text letterSpacing="1px" fontSize="11pt" my={0}>
              Ustaw
            </Text>
          </FormButton>
          {/* <FormButton
            onClick={() => navigate('phone~~mazebank~transfer')}
            backgroundColor="brand.green.dark"
            mx="10px"
          >
            <Text letterSpacing="1px">Wgraj</Text>
          </FormButton> */}
        </Flex>
        {/* <InputGroup px="10px" my="20px">
          <InputLeftElement ml="20px" pointerEvents="none">
            <LinkIcon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Phone number" bg="brand.black" color="black"/>
        </InputGroup> */}
      </Flex>
    </Container>
  );
};
