import {
    ADD_CURHAT, FETCH_DATA_POST, FETCH_DATA_POST_BY_ID, FETCH_DATA_POST_USER_BY_ID,FETCH_POST_BY_POST_ID,DELETE_POST_BY_ID, UPDATE_POST_BY_ID, SEARCH_DATA
} from '../actions/types'

const initialState = {
    post_list : [],
    post_list_by_id  : [],
    newPostList : []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_CURHAT : 
            return {
                ...state,
                new_post: action.payload
            }
            case FETCH_DATA_POST : 
            return {
                ...state,
                post_list: action.payload
            }
            case FETCH_DATA_POST_BY_ID : 
            return {
                ...state,
                post_detail : action.payload
            }
            case FETCH_DATA_POST_USER_BY_ID : 
            return {
                ...state,
                post_list_by_id : action.payload
            }
            case FETCH_POST_BY_POST_ID : 

            return {
                ...state,
                post_by_post_id : action.payload
            }    
            case DELETE_POST_BY_ID : 
            return {
                ...state,
                post_by_post_id : action.payload
            } 
            case UPDATE_POST_BY_ID : 
            return {
                ...state
            }   
            case SEARCH_DATA :
            return {
                ...state,
                newPostList : action.payload
            }
                    
            default:
            return state
    }
}

