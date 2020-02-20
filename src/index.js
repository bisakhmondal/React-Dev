import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import {robots} from './robots';
import 'tachyons';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
        <div>
        {/* {robots.forEach((i))} */}
        <Card robo={robots[0]} />
        <Card robo={robots[1]} />
        <Card robo={robots[2]} />
        <Card robo={robots[3]} />
        </div>
    ,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
