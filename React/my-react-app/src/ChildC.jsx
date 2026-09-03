import { useState } from "react";
function ChildC(){
    let [name , setName] = useState("")
    let [showName , setShowName] = useState("")
    function addNames(){
        setShowName(name)
    }
    return(
        <>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={addNames} >Add Name</button>
            <p>{showName}</p>
        </>
    )
}
export default ChildC;