import {ChangeSearchField,
    CHANGE_REQUEST_SUCCESS,
    CHANGE_REQUEST_PENDING,
    CHANGE_REQUEST_FAILED


    } from './Constants'


export const setSearchField= (text) => ({
    type: ChangeSearchField,
    payload:text
});
export const requestRobots =() => (dispatch)=>{
    dispatch({type:CHANGE_REQUEST_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type:CHANGE_REQUEST_SUCCESS, payload:data}))
    .catch(error=> dispatch({type:CHANGE_REQUEST_FAILED,payload:error}))
}


//remember to use dispatch