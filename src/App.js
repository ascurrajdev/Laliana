import React from 'react';
import Home from './components/Home'
import {BrowserRouter, Route} from 'react-router-dom'
class App extends React.Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <>
      <BrowserRouter>
        <>
          <Route path="/" component={Home} />
        </>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
