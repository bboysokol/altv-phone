import { ChakraProvider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureAxios } from './helpers/axiosHelper';
import { store } from './redux/configureStore';
import { Routes } from './routes/Routes';
import { Fonts } from './theme/Fonts';
import { theme } from './theme/theme';

dayjs.extend(relativeTime);
dayjs.locale('pl');

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const App = () => {
  const setConfig = (data: any) => {
    const parsedData = JSON.parse(data.detail);
    configureAxios(parsedData.sessionId, parsedData.listenerUrl);
  };

  useEffect(() => {
    if (import.meta.env.NODE_ENV !== 'development')
      document.addEventListener('server.cef.guid', setConfig);
    else
      setConfig({ detail: JSON.stringify({ sessionId: 1, listenerUrl: 'http://localhost:3000' }) });

    return () => {
      document.removeEventListener('server.cef.guid', setConfig);
    };
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme} resetCSS={false}>
        <Fonts />
        <Container>
          <Routes />
        </Container>
      </ChakraProvider>
    </Provider>
  );
};
