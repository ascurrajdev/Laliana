import React from 'react'
class Seccion extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id={this.props.id} className={this.props.clases}>
                {this.props.children}
            </div>
        )
    }
}
export default Seccion