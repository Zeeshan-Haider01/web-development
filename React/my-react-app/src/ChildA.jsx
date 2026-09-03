import { useContext, useMemo, useState } from "react";
import ChildB from "./ChildB";

// components - re use  - map - 
// props - prop drilling
// context api , createcontxt , provide , consume
// useContext

function ChildA(){
    let [add , setAdd] = useState(0);
    let [sub , setSub] = useState(100);
    let mul = useMemo(function(){
        console.log("multiple")
        return add * 10;
    },[add])
    return(
        <>
            <p>{add}</p>
            <p>{sub}</p>
            {mul}
            {/* <button onClick={add}>Add</button> */}
            <button onClick={()=> setAdd(add + 1)}>Add</button>
            <button onClick={()=> setSub(sub - 1)}>Sub</button>
        </>
    )
}
export default ChildA;