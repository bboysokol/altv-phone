import { Center, Flex } from '@chakra-ui/react';
import { actions, selectors } from 'rdx/phone/dialler';
import { CallState } from 'rdx/phone/dialler/dialler.slice';
import React from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import {
  IoAdd,
  IoApps,
  IoPersonCircleOutline,
  IoVideocam,
  IoVideocamOff,
  IoVolumeHigh,
  IoVolumeMute,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import DiallingButton, { DiallingButtonProps } from './DiallingButton';

type OmittedDiallingProps =
  | 'size'
  | 'activeBgColor'
  | 'inactiveBgColor'
  | 'activeColor'
  | 'inactiveColor';

const CallingButton = (props: Omit<DiallingButtonProps, OmittedDiallingProps>) => {
  return (
    <DiallingButton
      {...props}
      size="75px"
      activeBgColor="white"
      inactiveBgColor="gray.800"
      activeColor="black"
      inactiveColor="white"
    />
  );
};

const SpeakerphoneButton = () => {
  const dispatch = useDispatch();
  const speakerphoneStatus = useSelector(selectors.selectSpeakerphone);

  const onSpeakerClick = () => {
    dispatch(actions.speakerStatusChange(!speakerphoneStatus));
  };

  return (
    <>
      <CallingButton
        ml={2}
        activeIcon={<IoVolumeHigh size="45px" />}
        inactiveIcon={<IoVolumeMute size="45px" />}
        activated={speakerphoneStatus}
        activeText="głośnik"
        inactiveText="głośnik"
        onClick={onSpeakerClick}
      />
    </>
  );
};
export const CallingButtons = () => {
  const callState = useSelector(selectors.selectStatus);

  const buttons = [
    <CallingButton
      key="mute"
      activated={false}
      activeText="podgłoś"
      inactiveText="wycisz"
      disabled
      ml={2}
      activeIcon={<FaMicrophone size="45px" />}
      inactiveIcon={<FaMicrophoneSlash size="45px" />}
    />,
    <CallingButton
      key="apps"
      disabled
      activeText="przyciski"
      inactiveText="przyciski"
      ml={2}
      activated={false}
      activeIcon={<IoApps size="45px" />}
      inactiveIcon={<IoApps size="45px" />}
    />,
    <SpeakerphoneButton key="speaker" />,
    <CallingButton
      key="add"
      disabled
      ml={2}
      mt={6}
      activated={false}
      activeText="dodaj"
      inactiveText="dodaj"
      activeIcon={<IoAdd size="45px" />}
      inactiveIcon={<IoAdd size="45px" />}
    />,
    <CallingButton
      key="cam"
      disabled
      ml={2}
      mt={6}
      activated={false}
      activeText="VibeTime"
      inactiveText="VibeTime"
      activeIcon={<IoVideocam size="45px" />}
      inactiveIcon={<IoVideocamOff size="45px" />}
    />,
    <CallingButton
      key="contacts"
      disabled
      ml={2}
      mt={6}
      activated={false}
      activeText="kontakty"
      inactiveText="kontakty"
      activeIcon={<IoPersonCircleOutline size="45px" />}
      inactiveIcon={<IoPersonCircleOutline size="45px" />}
    />,
  ];

  return (
    <Center flex={1}>
      <Flex flexWrap="wrap">{callState === CallState.active ? buttons : null}</Flex>
    </Center>
  );
};
