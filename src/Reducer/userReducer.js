const initialState = {
    profile:{},
    loadingProfile: false,
    loginError: false
}

export default function(state= initialState, action){
    switch(action.type){
        case "SET_CURRENT_USER":
            return{
                ...state,
                profile: action.payload,
                loadingProfile: true,
                loginError:false
            }
        case "USER_PROFILE_LOADING":
            return{
                ...state,
                loadingProfile: true
            }
        case "ADD_SUBSCRIPTION":
            return{
                ...state,
                profile: action.payload,
                loadingProfile: true
            }
        case "UPDATE_SUBSCRIPTION":{
            return{
                ...state,
                profile: action.payload,
                loadingProfile: true
            }
        }
        case "REMOVE_SUBSCRIPTION":{
            return{
                ...state,
                profile: action.payload,
                loadingProfile: true
            }
        }
        case "UPDATE_EMAIL":
            return{
                ...state,
                profile: action.payload,
                loadingProfile: true,
            }
        case "DISABLE_USER_PROFILE_LOADING":
            return{
                ...state,
                loadingProfile:false
            }
        case "LOGIN_ERROR":
            return{
                ...state,
                loginError:true
            }
        default:
            return state;
    }

}