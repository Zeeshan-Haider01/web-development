import { useState } from "react";
function ChildC(){
    let [name , setName] = useState("");
    let [showName , setShowName] = useState([])
    function getName(event){
        setName(event.target.value)
    }
    function addData(){
        // setShowName((prevNames) => {
        //     return [...prevNames, name];
        // })
        setShowName([...showName , name])
        setName("")
    }
    function handleDelete(index){
        // let newName = showName.filter((_, i) => i !== index);
        // setShowName(newName)
        let newName = [...showName]
        newName.splice(index,1)
        setShowName(newName)
    }
    function handleEdit(index) {
        let newName = [...showName]
        let updatedName = prompt("Enter new name", newName[index])
        if (updatedName !== null) {
            newName[index] = updatedName
            setShowName(newName)
        }
    }
    return(
        <>
            <input type="text" value={name} onChange={getName} />
            <button onClick={addData}>Add Name</button>
            {showName.map(function(name,index){
                return(
                    <div key={index} style={{display:"flex"}}>
                        <p > {name} </p>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                    </div>
                )
            })}
        </>
    )
}
export default ChildC;

