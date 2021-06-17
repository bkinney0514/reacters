import React from 'react';

function Solo({id, name, amount, reason, status}) {
    return(
        <tbody>
            <td>{id}</td>
            <td>{name}</td>
            <td>{reason}</td>
            <td>{amount}</td>
            <td>{status}</td>
        </tbody>
    )
}

export default Solo;