import { useContext } from 'react'
// import {data , datab} from './App'
import {data , datab} from './App'

function Footer(){
    // let name = useContext(data)
    // let age = useContext(datab)
    let {name , age} = useContext(data)
    return(    
        // <data.Consumer>
        //     {(name) => {
        //         return(
        //         <datab.Consumer>
        //             {(age) => {
        //                 return (
        //                 <h2>{name} {age}</h2>
        //                 )
        //             }}
        //         </datab.Consumer>
        //         )
        //     }}
        // </data.Consumer>
        <h2>{name} {age}</h2>
    )
}

export default Footer;