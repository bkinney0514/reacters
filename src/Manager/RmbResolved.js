import React, { useState, useEffect } from 'react';
import Resolved from './Resolved';

const ResolvedRmbList = () => {
    const [resolvedRmb, setResolved] = useState([]);

    useEffect(() => {
        gitFetch();
    }, []);

    const gitFetch = async () => {
        const data = await fetch('https://ersnode.herokuapp.com/resolved');
        const jsonData = await data.json();
        console.log(jsonData)
        setResolved(jsonData);
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
                    </tr>
                </thead>
                
                    {resolvedRmb.map(resolved => (
                        <Resolved id={resolved._id} name={resolved.empname} amount={resolved.amount} reason={resolved.reason} status={resolved.status} key={resolved._id}/>
                    ))}
                
            </table>
        </div>
    );
}

export default ResolvedRmbList;