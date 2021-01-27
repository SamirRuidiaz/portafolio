import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { worksReducer } from '../reducers/worksReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
  work: worksReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  )
)