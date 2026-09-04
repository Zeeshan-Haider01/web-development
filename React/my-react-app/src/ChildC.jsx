// import { useState } from "react";
// function ChildC(){      
//     let [name , setName] = useState("")
//     let [getName , setGetName] = useState([])
//     function getIName(event){
//         setName(event.target.value)
//     }
//     function showName(){
//         setGetName([...getName, name])
//     }
//     return(
//         <>
//             <input type="text" onChange={getIName} />
//             <button onClick={showName}>show Name</button>            
//             {getName.map(function(name){
//                 return(
//                     <p>{name}</p>
//                 )
//             })}
//         </>
//     )
// }
// export default ChildC;

import { useState } from "react";
function ChildC(){
    let [name , setName] = useState("");
    let [showName , setShowName] = useState([])
    function getName(event){
        setName(event.target.value)
    }
    function addData(){
        setShowName([...showName , name])
        setName("")
    }
    return(
        <>
            <input type="text" value={name} onChange={getName} />
            <button onClick={addData}>Add Name</button>
            {showName.map(function(name,index){
                return(
                    <p key={index}> {name} </p>
                )
            })}
        </>
    )
}
export default ChildC;

