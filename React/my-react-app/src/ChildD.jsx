import { useContext } from "react";
import { data } from "./App";
function ChildD(){
    let {name , themecolor} = useContext(data);
    return(
        <p>{name} {themecolor}</p>
    // <data.Consumer>
    //     {(name) => {
    //         return(
    //             <theme.Consumer>
    //                 {(themecolor) => {
    //                     return(
    //                         <p>{name} {themecolor}</p>
    //                     )
    //                 }}
    //             </theme.Consumer>
    //         )
    //     }}
    // </data.Consumer>
    )
}
export default ChildD;


