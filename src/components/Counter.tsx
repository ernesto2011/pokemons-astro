import { createSignal, type Component, type JSX } from "solid-js"
interface Props{
    initialCount?:number;
    children?: JSX.Element
}

export const Counter: Component<Props> = (props) => {

    const [counter, setCounter] = createSignal(props.initialCount)
  return (
   <>
   {
    props.children
   }
   <h3>Value:{counter()} </h3>

   <button 
   onClick={()=>setCounter((prev=0)=> ++prev)}
   class="bg-blue-500 p-2 mr-2 rounded">+1</button>
   <button
   onClick={()=>setCounter((prev=0)=> --prev)}
   class="bg-blue-500 p-2 mr-2 rounded">-1</button>
   </>
  )
}
