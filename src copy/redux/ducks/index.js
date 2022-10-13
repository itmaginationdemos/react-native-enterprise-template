/* Libraries */
import {combineReducers} from 'redux';
/* Local Files */
import {language} from './language.js';

/* Reducers */
const reducers = combineReducers({
  language,
});

export {reducers};
