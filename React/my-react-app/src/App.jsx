// import { createContext } from "react";
// import ChildA from "./ChildA";
// let data = createContext();
// // let theme = createContext();
// function App() {
//   // let name = "hamza";
//   // let themecolor = "light";
//   // let user = {
//   //   name:"hamza",
//   //   themecolor: "dark"
//   // }
//   return (
//     // <data.Provider value={user}>
//         <ChildA />
//     // </data.Provider>
//   );
// }
// export default App;
// export { data };

// import React, { useState, useCallback } from 'react';
// import ChildB from './ChildB';

// function App() {
//   const [add, setAdd] = useState(0);
//   const [count, setCount] = useState(0);

//   const Learning = useCallback(() => {
//   }, [count]);
//   // const Learning = () => {
//   // };

//   return (
//     <div>
//       <h1>Learning useCallback</h1>
//       {/* <ChildB /> */}
//       <ChildB Learning={Learning} count={count} />

//       <h2>Addition: {add}</h2>
//       <button onClick={() => setAdd(add + 1)}>Addition</button>

//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 2)}>Count</button>
//     </div>
//   );
// }

// export default App;

import ChildC from "./ChildC";
import { useEffect, useState } from "react";

function App(){
  
  let [count , setCount] = useState(0);
  let [countSub , setCountSub] = useState(100);
  let [posts , setPosts] = useState([])


// useEffect(function(){
//   // console.log("hello")
//   async function getPost(){
//         let response =  await fetch('https://jsonplaceholder.typicode.com/posts')
//         let data  = await  response.json()
//         setPosts(data)
//   }
//   getPost()
// },[count])

// useEffect(() => {
//   // Side effect code

//   return () => {
//     // Cleanup (optional)
//   };
// }, [dependencies]);

  return(
    <>
    {/* {posts.map(function(post){
      return(
        <p>{post.title}</p>
      )
    })}
    <h2>{count}</h2>
    <h2>{countSub}</h2>
    <button onClick={() => setCount(count + 1)}>Add</button>
    <button onClick={() => setCountSub(countSub - 1)}>Sub</button> */}
      <ChildC />
    </>
  )
}

export default App;