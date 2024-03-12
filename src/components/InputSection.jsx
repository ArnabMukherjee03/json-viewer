/* eslint-disable react/prop-types */


export const InputSection = ({handleInput,value,className}) => {

  console.log(value);
 
  return (
    <div className={className}>
       <textarea className="w-full min-h-full outline-none p-4" value={value} onChange={handleInput}></textarea>
    </div>
  )
}
