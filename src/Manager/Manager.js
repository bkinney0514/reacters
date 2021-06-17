import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PendingRmbList from './RmbList';
import ViewEmps from './Emps';
import ResolvedRmbList from './RmbResolved';
import SoloReqs from '../Employee/OneEmpReqs';

function Manager(props) {
    return (
        <Router>
        <div class="jumbotron jumbotron-fluid text-center">
            <h1 class="display-4">Welcome to the Manager Home Page</h1>
            <p class="lead">The Expense Reimbursement System</p>
            <hr class="my-4" />

            <ViewEmps user={props.user} setUser={props.setUser}/>

            <div>
                <Link to="solo">
                <p class="lead">
                    <button class="badge badge-info" id="oneEmp" role="button">View One Employee's Requests</button>
                </p>
                </Link>
                <Link to="/pending">
                <p class="lead">
                    <button class="badge badge-info" id="pending" type="button">View All Pending Requests</button>
                </p>
                </Link>
                <Link to="/resolved">
                <p class="lead">
                    <button class="badge badge-info" id="resolved" type="button">View All Resolved Requests</button>
                </p>
                </Link>
                <Switch>
                    <Route path="/pending" exact component={PendingRmbList}/>
                    <Route path="/resolved" exact component={ResolvedRmbList}/>
                    <Route path="/solo" exact render={() => <SoloReqs user={props.user} setUser={props.setUser}/>}/>
                </Switch>
            </div>
        </div>
        </Router>
    )
}

export default Manager;