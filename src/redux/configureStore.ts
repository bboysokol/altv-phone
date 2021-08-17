import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureAppStore(preloadedState = {}) {
  const history = createBrowserHistory();

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: [routerMiddleware(history), sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  if (import.meta.hot) {
    import.meta.hot.accept(['./rootReducer'], () => store.replaceReducer(rootReducer));
  }

  return store;
}

export const store = configureAppStore();
