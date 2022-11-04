import React from "react";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import pagamentos from './pagamentos'


function Routes(){

    return(
        <Router>
            <Switch>
                <Route exact path={"/"} component={pagamentos}/>
            </Switch>
        </Router>
    )

}


export default Routes