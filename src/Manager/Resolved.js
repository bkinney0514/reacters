import React from 'react';

const Resolved = (props) => {
    return (
        <tbody>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.amount}</td>
            <td>{props.reason}</td>
            <td>{props.status}</td>
        </tbody>
    )
}

export default Resolved;