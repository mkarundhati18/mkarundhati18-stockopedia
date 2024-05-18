import { useState, useEffect } from "react";

const User = ({name}) =>{

    const [count, setCount]=useState(0);
    

    useEffect(()=>{
        //api call
        const timer= setInterval(()=>{console.log("calling function compt")}, 1000);


    return ()=>{
        //clean up code
        clearInterval(timer);
        console.log("unmount");
    }
    },[])


    return (

        <div className="user-card"> 
        {/* <button onClick={()=>{
               setCount(count++);
            }}>ckick me</button> */}
        <p>count: {count}</p>
        <h1>Name: {name}</h1>
        </div>
    )
}

export default User;