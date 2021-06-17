import React, { useState, useEffect } from 'react';
import Pending from './Pending';

const PendingRmbList = () => {
    const [pendingRmb, setPending] = useState([]);

    useEffect(() => {
        gitFetch();
    }, []);

    const gitFetch = async () => {
        const data = await fetch('https://ersnode.herokuapp.com/pending');
        const jsonData = await data.json();
        console.log(jsonData)
        setPending(jsonData);
    };

    return (
        <div class="table-responsive col-lg-9">
                <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Reason</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                    {pendingRmb.map(pend => (
                        <Pending id={pend._id} name={pend.empname} amount={pend.amount} reason={pend.reason} status={pend.status} key={pend._id}/>
                    ))}
                
            </table>
        </div>
    );
}

export default PendingRmbList;