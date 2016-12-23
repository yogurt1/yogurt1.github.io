export const incr = ({commit}) => commit("incr")
export const decr = ({commit}) => commit("decr")


export const incrIfOdd = ({commit, state}) =>
    (state.count + 1) % 2 === 0
        ? commit("incr")
        : null

export const incrAsync = ({commit}) => setTimeout(() =>
        commit("incr"), 1000)
