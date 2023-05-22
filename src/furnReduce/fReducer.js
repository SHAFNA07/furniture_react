import { FAIL, SUCCESS } from "../constants/furnConstant"


// reducer function 
//                 state to store the payload,working action
export const furnReducer = (state = { restList: [] }, action) => {

    switch (action.type) {
        case SUCCESS:
            return {
                restList: action.payload
            }
        case FAIL:
            return{ 
                restList:action.payload
             }
        default:
            return state
    }

}
