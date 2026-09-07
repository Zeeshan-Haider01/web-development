import { useState, useEffect } from "react";
function Effect() {
    let [count, setCount] = useState(0);   
    let [sub, setSub] = useState(100);   
    useEffect(() => {
        console.log("useEffect called");
    },[count , sub]);
    useEffect(() => {
        document.title = `Count: ${count}`;
        // return () => {
        //     console.log("Cleanup function called");
        // }
    }, [count]);
    return (
        <>
            <h2> Add {count}</h2>
            <h2> Subtract {sub}</h2>
            <button onClick={() => setCount(count + 1)}> Add </button>
            <button onClick={() => setSub(sub - 1)}> Subtract </button>
        </>
    )
}

export default Effect;