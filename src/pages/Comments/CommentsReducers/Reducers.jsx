import { combineReducers } from 'redux';
import commentReducer from './CommentsReducers';

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;