import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoApp from './reducers';

const reducer = combineReducers({
  svg: todoApp,
  form: formReducer
});

export default reducer;