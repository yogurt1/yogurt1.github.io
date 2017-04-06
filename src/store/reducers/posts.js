import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST
} from "../actions/posts"

const initialState = []

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
    case FETCH_POSTS_REQUEST: return state
    case FETCH_POSTS_FAILURE: return state
    case FETCH_POSTS_SUCCESS: return action.payload
    default: return state
    }
}
