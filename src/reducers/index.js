import { combineReducers } from 'redux';
import theme from './theme-reducer';
import renderForm from './email-form-reducer';

const rootReducer = combineReducers({
  theme, 
  renderForm,
});

export default rootReducer;