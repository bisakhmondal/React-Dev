import React from 'react';
import Card from './Card';

const cardList=({robots})=>{
    // if(true){
    //     throw new Error('Noooo!!');
    // }
    const cardArray =robots.map((value,i)=>{
        return <Card key={i} robo={value} />
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}
export default cardList;