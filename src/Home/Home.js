import React from "react";

import AllEmps from "./AllEmps";
import {Link} from 'react-router-dom'

function Home(props) {

   
    return (
        <div class="jumbotron jumbotron-fluid text-center">
            <h1 class="display-4" id="Header">Revature ERS Deployment Site</h1>
            <p class="lead">The Expense Reimbursement System</p>
            <hr class="my-4" />
            <p>Who are you?</p>
            <AllEmps user={props.user} setUser={props.setUser}/>
            <Link to="/employee">
                <button>Employee</button>
            </Link>
            <Link to="/manager">
                <button>Manager</button>
            </Link>
        </div>
    )
}

export default Home;