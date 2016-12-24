import {combineReducers} from "redux"
import localeReducer from "./locale"
import counterReducer from "./counter"

export default combineReducers({
    locale: localeReducer,
    counter: counterReducer
})
