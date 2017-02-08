import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gelements from './gelements';

const reducer = combineReducers({
  svg: gelements,
  form: formReducer
});

export default reducer;