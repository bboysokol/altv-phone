import styled from '@emotion/styled';
import React from 'react';
import { IoIosLock } from 'react-icons/io';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';

const LockButtonContainer = styled.div`
  width: 50px;
  height: 150px;
  position: absolute;
  top: 115px;
  right: -25px;
  opacity: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: radial-gradient(rgba(255, 0, 0, 0.5) 40%, transparent 65%);
  background-size: 60px 60px;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.1s ease-in-out;
  z-index: 100;
  pointer-events: all;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const LockButton = () => {
  const { navigate } = useQueryRouterNav();

  return (
    <LockButtonContainer onClick={() => navigate('phone~~locked')}>
      <IoIosLock size="40px" />
    </LockButtonContainer>
  );
};
