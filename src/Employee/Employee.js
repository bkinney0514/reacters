import {React, useReducer, useState} from 'react';
import SoloReqs from './OneEmpReqs';

function Employee(props) {

    const [reason, setReason] = useState("")
    const [amount, setAmount] = useState("")

    const reasonChange = (e) => {
        setReason(e.target.value)
    }
    const amountChange = (e) => {
        setAmount(e.target.value)
    }

    async function CreateRmb(reason, amount) {

        console.log(reason)
        console.log(amount)
        const newRmb = {
            empname:props.user,
            reason:reason,
            amount:"$" + amount,
            status:'pending'
        }
        const requestOptions= {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(newRmb)
        }
        await fetch(`https://ersnode.herokuapp.com/emphome/newrmb`,requestOptions);
    }

    return (
        <div class="jumbotron jumbotron-fluid text-center">
            <h1 class="display-4">Employee Home Page&nbsp;</h1>
            <p class="lead">The Expense Reimbursement System</p>
            <hr class="my-4" />
            
            <p class="lead">Create a new request:</p>
            <form>
                <fieldset>
            Reason: <input type="text" id="reason" name="reason" value={reason} onChange={reasonChange} required /> <br />
            Amount: <input type="number" id="amount" name="amount" value={amount} onChange={amountChange} required /> <br />
            <input type="button" id="rmbButton" value="Submit" onClick={()=>CreateRmb(reason,amount)}/>
            </fieldset>
            </form>

            <SoloReqs user={props.user} setUser={props.setUser}/>
        </div>
    )
}

export default Employee;