import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import loginReducer from "./loginReducer";
import onboardingQuestionsReducer from "./onboardingQuestionsReducer";
import createSagaMiddleware from 'redux-saga';
import thunkMiddleWare from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
    loginScreen: loginReducer,
    onboardingQuestions: onboardingQuestionsReducer,
});

let store = createStore(reducers, compose(applyMiddleware(thunkMiddleWare)));
//sagaMiddleware.run(watcherSaga);

export default store;
