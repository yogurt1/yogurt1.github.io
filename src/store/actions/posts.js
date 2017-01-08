import * as ui from "./ui"

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE"

export const fetchPostsRequest = () =>
    ({type: FETCH_POSTS_REQUEST})
export const fetchPostsSuccess = posts =>
    ({type: FETCH_POSTS_SUCCESS, payload: posts})
export const fetchPostsFailure = error =>
    ({type: FETCH_POSTS_FAILURE, payload: error, error: true})

export const getPosts = () => dispatch => {
    dispatch(fetchPostsRequest())
    dispatch(ui.setLoading())
    fetch("/posts.json")
        .then(res => {
            dispatch(ui.setLoading(false))
            
            if (!res.ok) {
                throw new Error(res.statusText)
            }

            return res
        })
        .then(res => res.json())
        .then(data => dispatch(fetchPostsSuccess(data)))
        .catch(err => dispatch(fetchPostsFailure(err)))
}

