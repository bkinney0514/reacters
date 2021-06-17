import React, {useEffect} from  "react";

const Approve = (id, status) =>{

    useEffect(()=>{
        a();
    },[]);

    const a = async() => {
        const data = await fetch(`https://ersnode.herokuapp.com/resolve/${id}/${status}`);
        const jsonData = await data.json();
        console.log(jsonData)
    }
}

export default Approve;