import { useState } from 'react';
import { InputSection } from './components/InputSection'
import { JsonViewer } from './components/JsonViewer'
import { GetData } from './components/GetData';

function App() {
  const [value,setValue] = useState("");
  const [show,setShow] = useState(false);
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
    <>
     {show?<GetData setShow={setShow} setValue={setValue}/>:""}
    <div className='container flex justify-evenly items-center h-screen'>
     <InputSection handleInput={handleInput} value={value} className="w-1/3 h-[400px] border  border-black  rounded-sm"/>
     <div className='flex flex-col gap-2'>
        <button className='bg-black text-white py-2 px-8' onClick={()=>{setShow(!show)}} >Load Data</button>
        <button className='bg-black text-white py-2 px-8' onClick={handleJson}>Json Viewer</button>
     </div>
     <JsonViewer className="w-1/3  h-[400px] overflow-y-auto border border-black p-4" data={json}/>
    </div>
    </>
  )
}

export default App
