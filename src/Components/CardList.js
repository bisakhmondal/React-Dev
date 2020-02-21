import React from 'react';
import Card from './Card';

const cardList=({robots})=>{
    // if(true){
    //     throw new Error('Noooo!!');
    // }
    const cardArray =robots.map((value,i)=>{
        return <Card key={i} robo={value} />
    })
    if (cardArray.length===0){
        return <h3 className='tc' style={{color:'white'}}>Oops No match Found!!</h3>
    }
    return (
        <div>
            {cardArray}
        </div>
    )
}
export default cardList;