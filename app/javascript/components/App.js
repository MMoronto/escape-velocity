import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Orbiters from './Orbiters/Orbiters'
import Orbiter from './Orbiter/Orbiter'

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Orbiters} />
            <Route exact path="/orbiters/:slug" component={Orbiter} />
        </Switch>
    )
}

export default App
