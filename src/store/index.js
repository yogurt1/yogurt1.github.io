import * as Redux from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import thunk from "redux-thunk"
import reducersRegistry from "./reducers"

const configureStore = (initialState) => {
    const middlewares = [
        thunk
    ]

    const enhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
    )

    const reducer = combineReducers(reducersRegistry)
    const store = Redux.createStore(
        reducer,
        initialState,
        enhancer
    )

    if (module.hot) {
        module.hot.accept("./reducers", () => {
            const nextReducer = combineReducers(reducersRegistry)
            store.replaceReducer(nextReducer)
        })
    }

    return store
}

export default store


