import { Box, Flex } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import React from 'react';
import { useQueryRoute } from 'routes/QueryRouter/QueryRouteContext';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 5px;
  left: 0;
  display: flex;
  flex-direction: column-reverse;
  pointer-events: none;
`;

type MainButtonProps = {
  bg?: string;
};

export const MainButton = ({ bg }: MainButtonProps) => {
  const { nested } = useQueryRoute();
  const { navigate } = useQueryRouterNav();

  if (nested === 'main') {
    return null;
  }

  return (
    <Container>
      <Flex
        justifyContent="center"
        alignItems="center"
        pb={1}
        pointerEvents="all"
        paddingBottom="0"
      >
        <Box
          m={2}
          w="200px"
          h="7px"
          bg={bg || 'white'}
          borderRadius="3px"
          onClick={() => navigate('phone~~main')}
        />
      </Flex>
    </Container>
  );
};
