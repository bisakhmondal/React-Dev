import React from 'react';
import CardList from '../Components/CardList';
// import {robots} from './robots'; now we are fetching from directly server
import Searchbox from '../Components/Searchbox'
import './App.css'
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary'
import {connect} from 'react-redux'
import {setSearchField,requestRobots} from '../Actions' //importing action

const mapStateToProps= state =>{
    return {
        searchField: state.searchRobots.searchField ,//state.setRobots.searchField
        robots: state.requestRobotsApi.robots,
        isPending: state.requestRobotsApi.isPending,
        error: state.requestRobotsApi.error
    }
}
const mapDispatchToProps= (dispatch) =>{
    return{ 
        onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class  App extends React.Component{
    componentDidMount(){
        
        this.props.onRequestRobots();
    }
    render(){
        const filteredRobs= this.props.robots.filter(
            (robot)=> robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        );
        
            return this.props.isPending
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