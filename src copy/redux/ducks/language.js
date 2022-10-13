/* Local Files */
import {languageTag} from '../../utils/I18n.js';

/*  Types */
export const UPDATE_LANGUAGE = 'update_language';

const initialState = {
  language: languageTag, // On fresh start set language to system settings selection
};

/*  Reducers */
const language = (state = initialState, {type, payload}) => {
  switch (type) {
    case UPDATE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };

    default:
      return state;
  }
};

/*  Actions */
const changeLanguage = (payload) => ({type: UPDATE_LANGUAGE, payload});

/*  Selectors */
const getLanguage = (state) => state.language.language;

export {language, changeLanguage, getLanguage};
