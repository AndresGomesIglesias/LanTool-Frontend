import { combineReducers } from "redux";

import registerReducer from "./userReducers/registerReducer"
import loginReducer from "./userReducers/loginReducer"
import updateReducer from "./userReducers/updateReducer"



const rootReducer = combineReducers({
    registerData: registerReducer,
    loginData: loginReducer,
    updateData: updateReducer
  });
  
  export default rootReducer;
  