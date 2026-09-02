import { useState } from "react";
import ChildB from "./ChildB";

function ChildA(){
    let [count , setcount] = useState(0);
    // function add(){
    //     setcount(count + 1);
    // }
    return(
        <>
            {/* <p>{count}</p>
            <button onClick={add}>Add</button>
            <button onClick={()=> setcount(count + 1)}>Add</button> */}
        <ChildB />
        </>
    )
}
export default ChildA;