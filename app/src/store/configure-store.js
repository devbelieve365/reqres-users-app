import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root.saga';
import {navReducer} from '../reducers/nav.reducer';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {usersReducer} from '../reducers/users.reducer';

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, middleware));

const configureStore = () => {
  const appReducers = combineReducers({
    nav: navReducer,
    users: usersReducer,
  });
  const store = createStore(appReducers, enhancer);

  sagaMiddleware.run(rootSaga);

  return {store};
};

export default configureStore;
