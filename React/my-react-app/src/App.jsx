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

function App(){
  return(
    <>
      <ChildC />
    </>
  )
}

export default App;