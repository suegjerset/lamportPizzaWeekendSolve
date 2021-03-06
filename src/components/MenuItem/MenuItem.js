import React, {Component} from 'react';

class MenuItem extends Component{
    state={
        add: true
    }

    componentDidMount(){
        // console.log( this.props );
    }

    handleClick=()=>{
        console.log( 'in handleClick' );
        const newAddValue = !this.state.add;
        if( newAddValue ){
            console.log( 'removing' );
            this.props.dispatch( { type: 'remove', payload: this.props.pizza });
        }
        else{
            console.log( 'ordering' );
            this.props.dispatch( { type: 'add', payload: this.props.pizza });
        }
        this.setState({
            add: newAddValue
        })
    }

    render(){
        let addText = 'Remove';
        if( this.state.add ){
            addText = 'Add';
        }
        return(
            <div className="menuItem" onClick={ this.handleClick }>
                <h3>{ this.props.pizza.name }: ${ this.props.pizza.price }</h3>
                <img className="menuImage" src={ this.props.pizza.image_path }></img>
                <p>{ this.props.pizza.description }</p>
                <hr></hr>
                <h1>{ addText }</h1>
            </div>
        ) //end return
    } // end render
} // end class

export default MenuItem;