import React from 'react';

const Card= ({robo}) => {
    const {id,name,email}=robo;
    return (
        <div className='tc dib bg-light-green br3 bw5 pa0 ma2 grow shadow-5'>
            <img src={`https://robohash.org/${id}?100x100`} alt="robo" />
            <h2 className='f3'>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
export default Card;