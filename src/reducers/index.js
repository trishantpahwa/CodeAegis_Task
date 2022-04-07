import { combineReducers } from 'redux';
import template from './template.reducer';
import user from './user.reducer';

export default combineReducers({
    template,
    user
});