import React from "react";
import Joke from "../joke/Joke";


class Jokes extends React.Component{
    constructor() {
        super();
        this.state = {
            jokes: []
        }
    }

    componentDidMount() {
        fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10")
            .then(response=>response.json())
            .then(data =>{
                this.setState({
                    jokes:data.value
                })
            });
    }

    render(){
        if(localStorage.length){
            return (
                <div className="row">
                    {this.state.jokes.map((j) => (JSON.parse(localStorage.getItem('favoritesJokes')).find(c => c.type === j.type) ?

                        (<Joke key={j.type} type={j.type} joke={j.joke} status="saved"/>): (<Joke key={j.type} type={j.type} joke={j.joke} status="notSaved"/>)
                    ))
                    }

                </div>
            )
        } else if(this.state.jokes.length) {
            return (
                <div className="row">
                    {this.state.jokes.map((j) => (<Joke key={j.type} type={j.type} joke={j.joke} status="notSaved"/>))
                    }

                </div>
            )}
        else{
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            )
        }
    }
}

export default Jokes