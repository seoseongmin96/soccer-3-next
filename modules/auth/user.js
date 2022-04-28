//import { createAction, handleActions } from 'redux-actions';
import { call, delay, put, takeLatest, select, throttle } from 'redux-saga/effects';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';
import { initial } from 'lodash';
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}

export const initialState = {
    user : { 
    isloggingIn: false,
    data: null
}
}

const USER_REGISTER_REQUEST = 'auth/USER_REGISTER_REQUEST';
const USER_REGISTER_SUCCESS = 'auth/USER_REGISTER_SUCCESS'
const USER_REGISTER_FAIL = 'auth/USER_REGISTER_FAIL'

export const userRegister = user => (
    {type: USER_REGISTER_REQUEST, payload: user}
)
export function* watchUserRegister() {
    yield takeLatest(USER_REGISTER_REQUEST, userRegisterSaga);
}
function* userRegisterSaga() {
    try {
        const response = yield call(userRegisterAPI)
        console.log(" 회원가입 서버다녀옴: "+ JSON.stringify(response.data))
        yield put ({type: USER_REGISTER_SUCCESS, payload: response.data})
    } catch (error) {
        yield put({type: USER_REGISTER_FAILURE, payload: error.message})
    }
}

const userRegisterAPI = payload => axios.post(
    `${SERVER}/user/join`,
    payload,
    {headers}
)

const auth = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log(' ### HYDRATE Issue 발생 ### ')
            return {
                ...state,
                ...action.payload
            }
        case USER_REGISTER_SUCCESS:
            console.log( '### 회원가입 성공 ### '+ action.payload)
            return {
                ...state,
                user: action.payload
            }
        case USER_REGISTER_FAILURE:
            console.log(' ### 회원가입 실패 ### ' + action.payload)
            return {
                ...state,
                user: action.payload
            }  
        default:
            return state;      
    }
}

/*function* userRegister(action) {
    try{
        const response = yield userRegisterApi()
        const newUser = yield response.json()
        yield put(newUser.data)
    }catch(error){
        yield put()
    }
    console.log(`현재 값은 입니다.`);
  }
  export function* watchUserRegister() {
    yield takeLatest(USER_REGISTER, userRegister);
    
  }  


const USER_LOGIN = 'auth/USER_LOGIN';
export const userLogin = createAction(USER_LOGIN);
function* userLogin(action) {
    try{
        const response = yield fetch()
        const loginUser = yield response.json()
        yield put(loginUser.data)
    }catch(error){
        yield put()
    }
    
  }

  export function* watchUserRegister() {
    yield takeLatest(USER_LOGIN, userLogin);
    
  }

  const authReducer = (state = initialState, action) => {
      switch (action.type){
      case HYDRATE:
          console.log(' ### HYDRATE Issue 발생 ### ')
          return {...state, ...action,payload}
      case USER_REGISTER_SUCCESS:
           console.log(' ### 회원가입 성공 ### '+ action.payload)
          return {...state, registerResult: action.payload}
      }
  }*/
  export default auth
