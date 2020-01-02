import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import createRootReducer from '../reducers';

export const history = createBrowserHistory({ basename: '/dashboard' });

const composeEnhancers = composeWithDevTools;

export default function configureStore(preloadedState = {}) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        logger,
      ),
    ),
  );

  return store;
}
