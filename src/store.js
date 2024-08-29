import thunk from "redux-thunk";
import { createStore } from "redux";
import { combineReducers , applyMiddleware } from "redux";
import { addNewUser , getAll, getSingle } from "./Reducers/Reducer";

const rootReducer=combineReducers({
    //here we will add all the reducers
    addUser:addNewUser,
    getSingle:getSingle,
    getAll:getAll  
}
)

export const store=createStore(rootReducer,applyMiddleware(thunk))