import { useContext, useMemo, useState } from "react";
import ChildB from "./ChildB";

// components - re use  - map - 
// props - prop drilling
// context api , createcontxt , provide , consume
// useContext

function ChildA(){
    let [add , setAdd] = useState(0);
    let [sub , setSub] = useState(100);
    function addition(){
        console.log("added")
        setAdd(add + 1)
    }
    function substraction(){
        console.log("subtracted")
        setSub(sub - 1)
    }
    let mul = useMemo(() => {
        console.log("multiply")
        return add * 10;
    }, [add])
    return(
        <>
            <p>{add}</p>
            <p>{sub}</p>
            <p>{mul}</p>
            <button onClick={addition}>Add</button>
            <button onClick={substraction}>Sub</button>
        </>
    )
}
export default ChildA;