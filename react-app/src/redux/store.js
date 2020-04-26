import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
// import {applyMiddleware} from 'redux';  
// import thunkMiddleware from 'redux-thunk';
// import { GET_DETAILS } from './Types';


const store= createStore(reducer,applyMiddleware(thunk));
// store.dispatch(GET_DETAILS)
 export default store