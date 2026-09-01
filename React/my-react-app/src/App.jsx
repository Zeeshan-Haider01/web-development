import './App.css'
// import Header from './Header'
import Product from './Product'
import Footer from './Footer'
import ChildContainer from './ChildContainer'
import { useState } from 'react'
import Header from './Header'

function App() {
  let text = "test"
  let colors = ["red", "blue" , "green"] 
  // let count = 0
  let student = {
    name :'ali',
    age: 10
  }
  const [count, setCount] = useState(student)
  function counter(){
    // setCount(count + 1)
    // or
    // let newNo = count + 1;
    // setCount(newNo)
    // count++;
    // console.log(count)
  }
  

  //   const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);

  // function addTodo() {
  //   setTodos([...todos, todo]);
  //   setTodo("");
  // }

  let [todo , setTodo] = useState("")
  let [todos , setTodos] = useState([])

  function getValue(e){
    setTodo(e.target.value)
  }
  function addTodo(){
    setTodos([...todos , todo])
    setTodo("")
  }


  let products = [
    {
      name:"shirt",
      price:100,
      color: "green"
    },
    {
      name:"phone",
      price:200,
      color: "yellow"
    }
  ]

  return (
    <>
      {products.map(function (product){
        return(
          <Product 
            name={product.name} 
            price={product.price} 
            color={product.color}
          />
        )
      })}

      {/* <Product 
        name="shirt" 
        price={200} 
        color="red"
        size="mid"
      />
      <Product 
        name="shirt" 
        price={200} 
        color="red"
        size="mid"
      />
      <Product 
        name="shirt" 
        price={200} 
        color="red"
        size="mid"
      /> */}
      {/* <Product 
        name="phone" 
        price={100} 
      />
      <Product 
        name="pen" 
        price={500} 
      /> */}
         {/* <h1>Todo App</h1>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add</button> */}
      {/* <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      /> */}

      {/* <button onClick={addTodo}>Add</button> */}

      {/* {todos.map((item) => (
        <p>{item}</p>
      ))}
    <Header />
    <h2>test</h2> */}
     {/* <Header /> */}
     {/* <h2 className='test'>{text}</h2> */}
     {/* <div style={{display:"flex",flexWrap:"wrap"}}>
      {products.map((product, index) => {
        return(
          <Product
             key={index} 
             name={product.name}
             price={product.price} 
             instock={product.inStoke} 
          />
        )
      })}
     </div> */}
      {/* <Product 
         name="shirt"
         price="10" 
         instock={true} 
         // colors={["red", "blue" , "green"]} 
         // colors={colors} 
         // size={size} 
         // size={{large:"lg",medium:"med", small: "sm"}} 
       /> */}
       {/* <ChildContainer child={<> <h2>test</h2> <p>test</p></>} /> */}
     {/* <Footer /> */}
     {/* {products.map(function(product){
      return(
        <Product name={product.name} price={product.price} />
      )
     })} */}

     {/* <p>{count.name}</p>
     <button onClick={counter}>add</button> */}

     {/* <Product name="cap" price={300} />
     <Product name="mobile" price={700} /> */}
    </>
  )
}

export default App
