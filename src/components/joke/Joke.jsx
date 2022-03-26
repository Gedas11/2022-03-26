import React from "react";
import Card from '../card/Card';
import {Link} from "react-router-dom";
let favoriteList = []

class Joke extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        }
        this.handleLike = this.handleLike.bind(this)
        this.handleAddToFavorites = this.handleAddToFavorites.bind(this)
    }

    reRender = () => {
        
        this.forceUpdate();
    };
    handleAddToFavorites(){
        let obj = {};
        obj["type"] = this.props.type;
        obj["joke"] = this.props.joke;
        obj["setup"] = [];
        favoriteList.push(obj)
        localStorage.setItem('favoritesJokes', JSON.stringify(favoriteList));
        this.reRender()
    }

    handleLike(){
        this.setState(prevState=>{
            return {
                counter: prevState.counter+1
            }

        })
    }
    actionToTriggerReload = () => {
        const newKey = this.state.childKey * 50; 
        this.setState({childKey: newKey})
    }
    render(){
        return(
            <Card>
                    <h5 className="card-title">Joke : {this.props.type}</h5>
                    <p className="card-text">{this.props.joke}</p>
                    <p>{this.props.status}</p>
                    {this.props.status=== "notSaved"?(<Link to="/favorites" className="btn btn-primary" onClick={this.handleAddToFavorites}>Add to Favorites</Link>):null}
            </Card>
        )
    }x
}

export default Joke