import React from 'react';

const Pending = ({id, name, amount, reason, status}) => {
    async function Approve(id, status) {
        console.log(id);
        console.log(status);
        
        const requestOptions= {
            method:'PUT'
        }
        await fetch(`https://ersnode.herokuapp.com/resolve/${id}/${status}`,requestOptions);
    }

    async function Deny(id, status) {
        console.log(id);
        console.log(status);
        
        const requestOptions= {
            method:'PUT'
        }
        await fetch(`https://ersnode.herokuapp.com/resolve/${id}/${status}`,requestOptions);
    }

    return (
        <tbody>
            <td>{id}</td>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{reason}</td>
            <td>{status}</td>
            <td>
                <button id={id} onClick={()=> Approve(id,'approved')}>Approve</button>
                <button id={id} onClick={()=>Deny(id,'denied')}>Deny</button>
            </td>
        </tbody>
    )
}

export default Pending;