export const SET_LOADING = "SET_LOADING"

export const setLoading = (isLoading = true) => ({
    type: SET_LOADING,
    payload: isLoading
})
