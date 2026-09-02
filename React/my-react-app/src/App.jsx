import { createContext } from "react";
import ChildA from "./ChildA";
let data = createContext();
// let theme = createContext();
function App() {
  // let name = "hamza";
  // let themecolor = "light";
  let user = {
    name:"hamza",
    themecolor: "dark"
  }
  return (
    <data.Provider value={user}>
        <ChildA />
    </data.Provider>
  );
}
export default App;
export { data };
