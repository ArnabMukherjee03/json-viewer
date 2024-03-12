import { useState } from 'react';
import { InputSection } from './components/InputSection'
import { JsonViewer } from './components/JsonViewer'

function App() {
  const [value,setValue] = useState("");

  const [json,setJson] = useState();

  const handleInput = (e)=>{
     setValue(e.target.value);
  }

  const handleJson = ()=>{
      try {
        JSON.parse(value);
        setJson(value)
      } catch (error) {
         alert("invalid Json");
      }
  }
  
  return (
    <div className='container flex justify-evenly items-center h-screen'>
     <InputSection handleInput={handleInput} value={value} className="w-1/3 h-[400px] border  border-black  rounded-sm"/>
     <div className=''>
        <button className='bg-black text-white py-2 px-8' onClick={handleJson}>Load Json</button>
     </div>
     <JsonViewer className="w-1/3  h-[400px] overflow-y-auto border border-black p-4" data={json}/>
    </div>
  )
}

export default App
