import axios from 'axios';
const server = "";
const dev= "http://localhost:3000";

// get current user's profile
export const getProfile = (id) => async (dispatch)=> {
    try{
        const profile= await axios.get(`${dev}/users/${id}`, 
        {headers:{'Authorization':localStorage.jwtToken}});
        await dispatch({
            type:'GET_PROFILE',
            payload: profile.data
        })
    }catch(err){
        throw err
    }
}

// Profile loading
export const setUserProfileLoading = () => {
    return {
      type: "USER_PROFILE_LOADING"
    };
};

// turn off profile loading
export const disableUserProfileLoading = () => {
    return {
      type: "DISABLE_USER_PROFILE_LOADING"
    };
};

// add subscription to subscriptions list
export const addSubscription = (id , subData) => async (dispatch)=> {
    try{
        const profile= await axios.post(`${dev}/users/add-subscription`,{id, subData});
        await dispatch({
            type:'ADD_SUBSCRIPTION',
            payload: profile.data
        })
    }catch(err){
        throw err
    }
}

// remove subscription from subscriptions applied in the user data
export const removeSubscription = (id , i) => async (dispatch)=> {
    try{
        const profile= await axios.post(`${dev}/users/delete-subscription`,{id,i});
        await dispatch({
            type:'REMOVE_SUBSCRIPTION',
            payload: profile.data
        })
    }catch(err){
        throw err
    }
}

// update a specific subscription for a user
export const updateJob = (id, jobData, i) => async (dispatch)=> {
    try{
        const profile= await axios.post(`${dev}/users/update-subscription/`, {id, jobData, i});
        await dispatch({
            type:'UPDATE_SUBSCRIPTION',
            payload: profile.data
        })
    }catch(err){
        throw err
    }
}

// get all subscriptions
export const getAllSubscriptions = (id) => async (dispatch)=> {
    try{
        const profile= await axios.post(`${dev}/users/add-subscription/${id}`, 
        {headers:{'Authorization':localStorage.jwtToken}});
    }catch(err){
        throw err
    }
}
