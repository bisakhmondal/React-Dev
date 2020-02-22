import {ChangeSearchField,
    CHANGE_REQUEST_SUCCESS,
    CHANGE_REQUEST_PENDING,
    CHANGE_REQUEST_FAILED


    } from './Constants'


const initialState ={
    searchField:''
};

export const searchRobots =(state=initialState,action={}) => {
    switch(action.type){
        case ChangeSearchField:
            return Object.assign({},state,{searchField:action.payload});
        default :
            return state;

    }
}
const initialState2={
    isPending:false,
    robots:[],
    error:''
} 
export const requestRobotsApi= (state=initialState2,action={})=>{
    switch(action.type){
    case CHANGE_REQUEST_PENDING:
        return Object.assign({},state,{isPending:true});
    case CHANGE_REQUEST_SUCCESS:
        return Object.assign({},state,{isPending:false,robots:action.payload})
    case CHANGE_REQUEST_FAILED:
        return Object.assign({},state,{isPending:false,error:action.payload})
    default:
        return state;
    }

}