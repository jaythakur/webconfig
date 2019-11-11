import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});

class App extends Component {

    gotoHandler = (id) => {
        this.props.history.push('/pizza/'+id);
    }
    render () {
        const id = Math.floor(Math.random() * 6) + 1  
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> | <Link to={"/pizza/"+id}>Pizza{id}</Link>
                    <div><a href="javascript:void(0);" onClick={() => this.gotoHandler(id)}>Go to Pizza {id}</a></div>
                </div>
                <div>
                    <Switch>
                        <Route path="/" exact component={Users} />
                        <Route path="/pizza/:id?" component={AsyncPizza} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(App);