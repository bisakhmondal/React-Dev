import {ChangeSearchField} from './Constants'


export const setSearchField= (text) => ({
    type: ChangeSearchField,
    payload:text
});