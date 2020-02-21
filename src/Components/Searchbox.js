import React from 'react';

const Searchbox= ({onclicking})  =>{
    return(
        <div className='pa2'>
        <input 
        className='pa2 br3 grow bg-lightest-blue b--green' 
        placeholder="find your friend" 
        type='search'
        onChange={onclicking}
        />
        
        </div>
    )
}
export default Searchbox;