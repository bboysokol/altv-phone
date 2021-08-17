import styled from '@emotion/styled';
import { actions as contactActions } from 'rdx/phone/contacts';
import { actions, selectors } from 'rdx/phone/settings';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div<{ backgroundImage?: string }>`
  width: 330px;
  height: 660px;
  margin: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  border-radius: 50px;

  pointer-events: all;
  user-select: none;

  font-family: 'Inter';
  background-color: black;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;

  & ::-webkit-scrollbar {
    width: 14px;
    height: 18px;
    background-color: transparent;
  }

  & ::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-color: rgba(255, 255, 255, 0.6);
    background-clip: padding-box;
    border-radius: 7px;
  }

  & ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  & ::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }

  & ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export const Main: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const wallpaper = useSelector(selectors.selectWallpaper);

  useEffect(() => {
    dispatch(actions.getWallpaper());
    dispatch(contactActions.getContacts());
  }, []);

  return <Container backgroundImage={wallpaper?.url}>{children}</Container>;
};
