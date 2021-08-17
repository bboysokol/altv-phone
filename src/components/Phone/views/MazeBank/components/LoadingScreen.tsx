import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { actions, selectors } from 'rdx/phone/mazeBank';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';

const pulse = keyframes`
    0% {
      transform: scale(0.95);
    }

    50%,
    60% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(0.95);
    }
  `;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-image: no-repeat;
`;

const Logo = styled.div`
  width: 160px;
  height: 160px;
  background-image: url('assets/images/mazebank.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${pulse} 2s infinite ease-in-out;
`;

export const LoadingScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useQueryRouterNav();
  const data = useSelector(selectors.selectBankData);
  const error = useSelector(selectors.selectError);

  useEffect(() => {
    dispatch(actions.getBankAccount(-1));
  }, []);

  useEffect(() => {
    if (error) navigate('phone~~mazebank~noaccount');
    if (data?.accountNumber) navigate('phone~~mazebank~dashboard');
  }, [error, data]);

  return (
    <Container>
      <Logo />
    </Container>
  );
};
