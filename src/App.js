import React from 'react';
import CardList from './stash/CardList';
// import {robots} from './robots'; now we are fetching from directly server
import Searchbox from './stash/Searchbox'
import './App.css'
import Scroll from './stash/Scroll'
export default class  App extends React.Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots:users}));
    }
    ChangeState=(event)=>{
        this.setState({searchfield: event.target.value})
        // console.log(event.target.value);
    }
    render(){
        const filteredRobs= this.state.robots.filter(
            (robot)=> robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        );
        if(this.state.robots.length<=0){
            return(
                <h1 className='tc f1'>Loading!!</h1>
            )
        }
    return (
        
        <div className='tc'>
            <h1 className='tc f1 '> RoboFriends</h1>
            <Searchbox onclicking={this.ChangeState} />
            <Scroll>
                <CardList robots={filteredRobs} /> 
            </Scroll>
           
            {/* <h4>{this.state.searchfield}</h4> */}
        </div>
    );

    }
}
