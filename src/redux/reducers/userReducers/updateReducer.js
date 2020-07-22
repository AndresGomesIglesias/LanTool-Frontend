import { userConstants } from "../../constants/userConstants"

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { user } : {};


const updateReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case userConstants.AVATAR_UPDATE_REQUEST:
            return { ...state, user:  action.payload };
        case userConstants.AVATAR_UPDATE_SUCCESS:
                return { ...state, user: action.payload };
        case userConstants.AVATAR_UPDATE_FAILURE:
            return { status: action.AVATAR_UPDATE_FAILURE };
            
        case userConstants.UPDATE_REQUEST:
            return { ...state, user:  action.payload  };
        case userConstants.UPDATE_SUCCESS:
                return { ...state,user: action.payload };
        case userConstants.UPDATE_FAILURE:
            return { status: action.payload };

        case userConstants.AVATAR_UPDATE_TO_STATE:
            return { ...state, file: action.payload };
        default:
            return state
    }
};

export default updateReducer;