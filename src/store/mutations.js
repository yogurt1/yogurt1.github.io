export const incr = state => {
    state.count += 1
    state.history.push("incr")
}

export const decr = state => {
    state.count -= 1
    state.history.push("decr")
}
