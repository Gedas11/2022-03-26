import React from "react";


class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="col-sm-3">
        <div className="card " style={{width: "18rem"}}>
            <div className="card-body">
                {this.props.children}
            </div>
        </div>
            </div>
        )
    }
}


export default Card