/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCaretRight,FaCaretDown } from "react-icons/fa";

export const JsonViewer = ({data,className}) => {
  
    const [collapsedKeys, setCollapsedKeys] = useState([]);

    const toggleCollapse = (key) => {
        if (isCollapsed(key)) {
          setCollapsedKeys(collapsedKeys.filter((k) => k !== key));
        } else {
          setCollapsedKeys([...collapsedKeys, key]);
        }
      };
    
      const isCollapsed = (key) => {
        return collapsedKeys.includes(key);
      };


    const renderJson = (json) => {

        return Object.keys(json).map((key) => {
          const value = json[key];

        //   console.log(value);
          const type = value === null ? "null" : Array.isArray(value) ? `[${value.length}]` : typeof value === "object"?`{${Object.keys(value).length}}`: typeof(value);
    
          if (typeof value === 'object' && value !== null) {
            return (
              <div className="" key={key}>
                <div className="flex items-center gap-2">
                 {isCollapsed(key)?<FaCaretRight className="cursor-pointer" onClick={() => toggleCollapse(key)}/>:<FaCaretDown className="cursor-pointer" onClick={() => toggleCollapse(key)}/>}
                 <span>{key} <span className="text-sm  text-red-500">{type}</span></span>
                </div>
                {isCollapsed(key) ? null : <div className="ml-[30px]">{renderJson(value)}</div>}
              </div>
            );
          }
    
          return (
            <div key={key} className="ml-5">
              {key}: {value} <span className="text-sm  text-red-500">{type}</span>
            </div>
          );
        });
      };


 
  return (
    <div className={className}>{data?renderJson(JSON.parse(data)):""}</div>
  )
}
