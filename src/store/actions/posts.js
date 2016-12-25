export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE"

export const fetchPostsRequest = () =>
    ({type: FETCH_POSTS_REQUEST})
export const fetchPostsSuccess = posts =>
    ({type: FETCH_POSTS_SUCCESS, posts})
export const fetchPostsFailure = posts =>
    ({type: FETCH_POSTS_FAILURE, error})

export const getPosts = () => dispatch => {
    dispatch(fetchPostsRequest())
    fetch("/posts.json")
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }

            return res
        })
        .then(res => res.json())
        .then(data => dispatch(fetchPostsSuccess(data)))
        .catch(err => dispatch(fetchPostsFailure(err)))
}

