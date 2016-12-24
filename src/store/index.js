import Vue from "vue"
import Revue from "revue"
import {createStore, bindActionCreators, applyMiddleware} from "redux"
import {composeWithDevTools as compose} from "redux-devtools-extension/developmentOnly"
import thunk from "redux-thunk"
import combinedReducers from "./reducers"
import _actions from "./actions"

const getPersistedState = () => void 0
const middleware = [thunk]

const persistedState = getPersistedState()
const reduxStore = createStore(combinedReducers,
    persistedState, compose(
        applyMiddleware(...middleware)))

export const actions = bindActionCreators(_actions,
    reduxStore.dispatch)

export const mix = methods => ({
    ...actions,
    ...methods
})

const store = new Revue(Vue, reduxStore, actions)
export default store

if (module.hot) module.hot.accept("./reducers", () => {
    const nextCombinedReducers = require("./reducers").default
    reduxStore.replaceReducer(nextCombinedReducers)
})
