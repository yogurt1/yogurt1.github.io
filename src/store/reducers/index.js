import {combineReducers} from "redux"
import localeReducer from "./locale"
import counterReducer from "./counter"
import postsReducer from "./posts"
import uiReducer from "./ui"

export default combineReducers({
    locale: localeReducer,
    counter: counterReducer,
    posts: postsReducer,
    ui: uiReducer
})
