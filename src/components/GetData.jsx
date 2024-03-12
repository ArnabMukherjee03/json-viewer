import { useState } from "react"
import axios from "axios";

export const GetData = ({setShow,setValue}) => {
  const [url,setUrl]=useState("");
  const [loading,setLoading] = useState(false);

  const getData = async()=>{
    if(url.length === 0){
      alert("please enter a url")
      return 0;
    }
    setLoading(true)
    try {
      const response = await axios.get(url);
      if(response.status === 200){
        setShow(false);
        setValue(JSON.stringify(response?.data));
      }
    } catch (error) {
       alert(error.message)
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-30 ">
    <div className='absolute rounded-lg top-[40px] flex flex-col left-1/2 translate-x-[-50%] w-[40%]  bg-white'>
      <div className="py-4 px-4 border-b-black border-b">
        <h1 className="text-xl">Load External Data</h1>
      </div>
      <div className="py-12 w-full px-4 flex flex-col justify-center items-center gap-5">
         <input className="w-full border border-black rounded-sm p-2 outline-none" type="text" placeholder="enter your Url" value={url} onChange={(e)=>setUrl(e.target.value)} />
         <button disabled={loading} onClick={getData} className="bg-black w-max px-4 py-2 text-white disabled:cursor-wait disabled:bg-opacity-30">Get Data</button>
      </div>
      <div className="py-4 px-4 border-b-black border-t">
        <button className="float-right border border-black w-max px-4 py-1 rounded-md " onClick={()=>{setShow(false)}}>Close</button>
      </div>
    </div>
    </div>
  )
}
