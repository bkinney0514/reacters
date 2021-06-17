import React, { useState, useEffect } from 'react';

const AllEmps = (props) => {

    const changeUser = (e) => {
        props.setUser(e.target.value)
    }

    const [employees, setEmps] = useState([]);

    useEffect(() => {
        fetchEmps();
    }, []);

    const fetchEmps = async () => {
        const data = await fetch('https://ersnode.herokuapp.com/employeeList')
        const jsonData = await data.json();
        console.log(jsonData);
        setEmps(jsonData);
    };

    return (
        <div>
            <select id="employe-dropdown" name="user" onChange={changeUser}>
            <option selected="true" disabled="true">Select Employee</option>   
            {employees.map(emps=>(
                <option>{emps.name}</option>
            ))}
            </select>
        </div>
    );

}
export default AllEmps;