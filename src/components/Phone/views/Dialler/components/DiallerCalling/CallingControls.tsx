import { Center } from '@chakra-ui/layout';
import { actions, selectors } from 'rdx/phone/dialler';
import { CallState } from 'rdx/phone/dialler/dialler.slice';
import React, { useEffect } from 'react';
import { IoIosCall } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';
import DiallingButton from './DiallingButton';

const HangUpButton = () => {
  const dispatch = useDispatch();
  const { navigate, close } = useQueryRouterNav();
  const callStatus = useSelector(selectors.selectStatus);

  const handleEndCall = () => {
    dispatch(actions.endCall());
  };

  const handleAcceptCall = () => {
    dispatch(actions.acceptCall());
  };

  useEffect(() => {
    if (callStatus === CallState.ended) {
      setTimeout(() => {
        dispatch(actions.setCallState(CallState.none));
      }, 500);
    }
  }, [callStatus]);

  return (
    <>
      {callStatus === CallState.incomming ? (
        <DiallingButton
          size="75px"
          activeBgColor="brand.green.dark"
          onClick={handleAcceptCall}
          mr={16}
          activeIcon={<IoIosCall size="55px" />}
          activeColor="white"
          activated
        />
      ) : null}
      <DiallingButton
        size="75px"
        activeBgColor="brand.red.dark"
        transform="rotate(135deg)"
        onClick={handleEndCall}
        activeIcon={<IoIosCall size="55px" />}
        activeColor="white"
        activated
      />
    </>
  );
};

export const CallingControls = () => {
  return (
    <Center my={4} mb={20}>
      <HangUpButton />
    </Center>
  );
};
