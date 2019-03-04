import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
class App extends React.Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        )
    }
}

export default App