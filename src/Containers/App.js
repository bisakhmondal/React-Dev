import React from 'react';
import CardList from '../Components/CardList';
// import {robots} from './robots'; now we are fetching from directly server
import Searchbox from '../Components/Searchbox'
import './App.css'
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary'
import {connect} from 'react-redux'
import {setSearchField} from '../Actions' //importing action

const mapStateToProps= state =>{
    return {
        searchField: state.searchField //state.setRobots.searchField
    }
}
const mapDispatchToProps= dispatch =>{
    return{ 
        onSearchChange: (event)=> dispatch(setSearchField(event.target.value))
    }
}

class  App extends React.Component{
    constructor(){
        super();
        this.state={
            robots: [],
            // searchfield: ''
        }
    }
    componentDidMount(){
        // console.log(this.props.store.getState())
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots:users}));
    }
    // ChangeState=(event)=>{
    //     this.setState({searchfield: event.target.value})
    //     // console.log(event.target.value);
    // }
    render(){
        const filteredRobs= this.state.robots.filter(
            (robot)=> robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        );
        
            return !this.state.robots.length
                ?
                    <h1 className='tc f1'>Loading!!</h1>
                :
        
                    <div className='tc'>
                        <h1 className='tc f1 '> RoboFriends</h1>
                        <Searchbox onclicking={this.props.onSearchChange} />
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobs} /> 
                            </ErrorBoundary>
                            
                        </Scroll>
                    </div>
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App); 