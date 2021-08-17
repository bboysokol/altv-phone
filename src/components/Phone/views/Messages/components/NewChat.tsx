import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import styled from '@emotion/styled';
import { Header } from 'components/Phone/elements/Header';
import React, { useState } from 'react';
import { useQueryRouterNav } from 'routes/QueryRouter/useQueryRouterNav';

const Container = styled.div<{ enabled?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  top: ${({ enabled }) => (enabled ? '0' : '105%')};
  transition: top 0.3s ease-in-out, background-color 2s ease-in;
  background-color: ${({ enabled }) => (enabled ? 'rgba(0, 0, 0, 0.3)' : 'transparent')};
`;

const Content = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  height: 70%;
  display: flex;
`;

type NewChatProps = {
  enabled?: boolean;
  onCancel: () => void;
};

export const NewChat = ({ enabled, onCancel }: NewChatProps) => {
  const { navigate } = useQueryRouterNav();
  const [target, setTarget] = useState('');

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) setTarget(e.target.value);
  };

  const handleCreate = () => {
    navigate('phone~~messages~message', { from: target });
  };

  return (
    <Container enabled={enabled}>
      <Flex flex={1} onClick={onCancel} />
      <Content>
        <Flex flex={1} direction="column" bg="gray.800" py={2}>
          <Header fontSize="12pt" onBack={onCancel} backLabel="Anuluj" bg="gray.800">
            Nowa wiadomość
          </Header>
          <Flex
            alignItems="center"
            fontSize="16px"
            px={5}
            borderBottom="1px solid"
            borderColor="gray.600"
          >
            <Text px={4} py={2}>
              Do:
            </Text>
            <Input
              type="number"
              pt={2}
              pb={1}
              variant="unstyled"
              value={target}
              onChange={handleTargetChange}
            />
          </Flex>
          <Flex w="100%" py={10} justifyContent="center" alignItems="center">
            {target ? (
              <Flex
                direction="column"
                alignItems="center"
                border="3px solid"
                borderColor="brand.blue.dark"
                py={4}
                borderRadius="18px"
                onClick={handleCreate}
              >
                <Text m={22}>Wyślij wiadomość do:</Text>
                <Text fontSize="17pt" color="brand.blue.dark">
                  {target}
                </Text>
              </Flex>
            ) : null}
          </Flex>
        </Flex>
      </Content>
    </Container>
  );
};
