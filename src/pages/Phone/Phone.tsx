import { Flex } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import { LockButton } from 'components/Phone/elements/LockButton';
import { PhoneComponent } from 'components/Phone/PhoneComponent';
import React from 'react';

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
`;

const PhoneBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: url('assets/images/phone/ifruitborder.png');
  background-size: 97% 97%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Phone = ({ visible }: { visible?: boolean }) => {
  return (
    <Container>
      <Flex position="relative" mr={5}>
        <LockButton />
        <PhoneComponent />
        <PhoneBorder />
      </Flex>
    </Container>
  );
};
