import { combineReducers } from 'redux';

export function reducer (state = {}, action) {
  switch (action.type) {
    case "dark-mode":
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
    reducer,
})

export default rootReducer;