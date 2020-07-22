import { userConstants } from '../../constants/userConstants';

const initState = {
    registering: "",
    status: "",
 };
   
const registerReducer = (state = initState , action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {registering: true };
    case userConstants.REGISTER_FAILURE:
      return { status: action.payload };

    default:
      return state
  }
}

export default registerReducer;