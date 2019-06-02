import React from 'react'
class Major extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header className="major">
                <h2>{this.props.titulo}</h2>
                <p>{this.props.children}</p>
            </header>
        )
    }
}
export default Major