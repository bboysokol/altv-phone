import { Flex } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import { actions, selectors } from 'rdx/phone/dialler';
import React from 'react';
import { IoIosBackspace, IoIosCall } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import DiallingButton from '../DiallerCalling/DiallingButton';

const RemoveFiller = styled.div`
  position: absolute;
  margin: 30px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 10px;
  background-color: white;
`;

const DiallRemove = () => {
  const number = useSelector(selectors.selectNumber);
  const dispatch = useDispatch();
  const { popDigit, clearNumber } = actions;

  const handleClick = () => {
    dispatch(popDigit());
  };

  const handleDoubleClick = () => {
    dispatch(clearNumber());
  };

  return (
    <Flex
      flex="1 0 33%"
      justifyContent="center"
      my={3}
      opacity={number.length > 0 ? 1 : 0}
      _hover={{ opacity: '0.8' }}
      _active={{ opacity: '0.6' }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <Flex
        cursor="pointer"
        w="100px"
        h="80px"
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="gray.800"
        position="relative"
      >
        <IoIosBackspace size="55px" style={{ zIndex: 3 }} />
        <RemoveFiller />
      </Flex>
    </Flex>
  );
};

const DiallButton = () => {
  const number = useSelector(selectors.selectNumber);
  const { navigate } = useQueryRouterNav();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (number.length >= 3) {
      navigate('phone~~dialler~calling');
      dispatch(actions.makeCall(parseInt(number)));
    }
  };

  return (
    <Flex
      flex="1 0 33%"
      justifyContent="center"
      my={3}
      _hover={{ opacity: '0.8' }}
      _active={{ opacity: '0.6' }}
    >
      <DiallingButton
        size="75px"
        activeBgColor="brand.green.dark"
        activeColor="white"
        activated
        activeIcon={<IoIosCall size="45px" />}
        onClick={handleClick}
      />
    </Flex>
  );
};

export const PickerControls = () => {
  return (
    <Flex px={4}>
      <Flex flex="1 0 33%" />
      <DiallButton />
      <DiallRemove />
    </Flex>
  );
};
