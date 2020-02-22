import {ChangeSearchField} from './Constants';
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