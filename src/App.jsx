import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './post'
import Detail from './Detail'
import '../src/style.css'
import Node from './Node'
import Sot from './sot'

function App() {
  const [count, setCount] = useState(20)

const Add =()=>{
  const number= count +5;
  setCount(number)
  
}




const [mans,setMans]= useState(12)

const man=()=>{
  const numbers = mans- 1;
  setMans(numbers)
}


const [post,setPost]=useState(true)


const posts =()=>{

  setPost(!post)

  console.log(!post);


}
  return (



    <>
<h1>number:{count}</h1>
<h2>sev:</h2>

   <button onClick={Add}>on click</button>

<hr/>

<h1>ami mai nes klhaci vai numbers:{mans}</h1>


<button onClick={man}>maine--</button><br/>

<button className='style' onClick={posts}>Data</button>
<br/>

{
  post?<Detail></Detail>:<Post></Post>

 
}

{
  post?<Sot></Sot>:<Node></Node>
}


    </>
  )
}

export default App
