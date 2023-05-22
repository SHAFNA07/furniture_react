import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { furnReducer } from "./furnReduce/fReducer";



//create reducer
const reducer=combineReducers({
    reducer1:furnReducer

})

//middleware

const middleware=[thunk]


//create store
// reducer,middleware
const store=createStore(reducer,applyMiddleware(...middleware))

export default store;

