/* Libraries */
import {createStore, applyMiddleware} from 'redux';
import {createContext} from 'react';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
/* Local Files */
import {reducers} from './ducks';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['language'],
  blacklist: [''],
};

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(config, reducers);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

const LocalizationContext = createContext();

export {store, persistor, LocalizationContext};
