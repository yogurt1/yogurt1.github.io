import {Store} from "vuex"
import * as actions from "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations"

export default function configureStore() {

    const initialState = {
        count: 0,
        history: []
    }

    const store = new Store({
        state: initialState,
        getters,
        actions,
        mutations
    })

    if (module.hot) {
        module.hot.accept([
            "./getters",
            "./actions",
            "./mutations"
        ], () => store.hotUpdate({
            getters: require("./getters"),
            actions: require("./actions"),
            mutations: require("./mutations")
        }))
    }

    return store
}
