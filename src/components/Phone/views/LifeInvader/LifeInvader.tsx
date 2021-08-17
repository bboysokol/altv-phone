import styled from '@emotion/styled';
import React from 'react';
import { Screen } from '../../elements/Screen';

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const LifeInvader = () => {
  return (
    <Screen bg="white" color="black">
      <Container>
        <iframe
          id="liveInvader"
          width="100%"
          height="100%"
          src="https://li.v-rp.pl/"
          name="liveInvader"
          frameBorder="0"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          target="_blank"
        />
      </Container>
    </Screen>
  );
};
