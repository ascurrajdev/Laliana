import React from 'react'
class Spotlight extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className="spotlight">
                <div className="image">
                    <img src={this.props.imgSrc}/>
                </div>
                <div className="content">
                    <h3>{this.props.titulo}</h3>
                    <p>{this.props.children}</p>
                </div>
            </section>
        )
    }
}
export default Spotlight