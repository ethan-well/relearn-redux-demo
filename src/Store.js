import {createStore} from 'redux';
import {reducer as todoReducer} from './todos';

export default createStore(todoReducer, []);
