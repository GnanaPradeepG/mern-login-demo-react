import * as ActionTypes from "./ActionTypes";

export const Admins = (state = {
    isLoading : true ,
    errMess : null , 
    admins : []
} , action) => {
    switch(action.type){
        case ActionTypes.GET_ADMINS :
            return {...state , isLoading : false , errMess : null , admins : action.payload}
        default :
        return state;
    }
};