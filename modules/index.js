import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, {counterSaga} from './basic/counter'
import register, { registerSaga } from './auth/register';
import login, { loginSaga } from './auth/login';


const rootReducer = combineReducers({
   register, login, counter
 
});

export function* rootSaga() {
  yield all([registerSaga(), loginSaga(), counterSaga()]);
}

export default rootReducer;