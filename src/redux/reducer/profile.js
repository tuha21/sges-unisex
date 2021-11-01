import { SET_PROFILE } from "../../constant/const";

const profile = "";

var myReducer = (state = profile, action) => {
    switch(action.type) {
        case SET_PROFILE: {
            return action.profile
        }
        default: return state
    }
}

export default myReducer