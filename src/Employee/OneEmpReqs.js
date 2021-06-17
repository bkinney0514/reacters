import React, { useState, useEffect } from 'react';
import Solo from '../Manager/Solo';

const SoloReqs = (props) => {

    const [rmbs, setRmbs] = useState([]);

    useEffect(() => {
        fetchRmbs();
    }, []);

    const fetchRmbs = async () => {
        const data = await fetch(`https://ersnode.herokuapp.com/emprequests/${props.user}`)
        const jsonData = await data.json();
        console.log(jsonData);
        setRmbs(jsonData);
    };

    return (
        <div>
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
                    {rmbs.map(rmb => (
                        <Solo id={rmb._id} name={rmb.empname} amount={rmb.amount} reason={rmb.reason} status={rmb.status} key={rmb._id}/>
                    ))}
            </table>
        </div>
        </div>
    );

}
export default SoloReqs;