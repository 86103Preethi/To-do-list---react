import React from 'react'
import {FaTrashAlt} from "react-icons/fa";


const ItemsLists = ({items,handleCheck,handleDelete}) => {
    
    return (  
        <ul  className='space-y-2'>
          {items.map((item) => (
             <li  className="flex items-center bg-white rounded-lg shadow-md p-5"   key={item.id}> 
               <input className='form-checkbox mr-5'    //input - to get the input 
                type='checkbox' 
                onChange={()=> {handleCheck(item.id)}}   //changes to be made manually //values can't be passed directly thru the parameter so anonymous function has to be made
                checked={item.checked}
                />   
               <label className={`flex-grow ${item.checked ? "line-through" : ""}`}>{item.item}</label>
               <FaTrashAlt
               role="button"
               tabindex="0"
               onClick={() => {handleDelete(item.id)}}
               className="text-blue-500 hover:text-red-500 cursor-pointer"
               />
             </li> 
        ))}
     </ul>
    );
}
 
export default ItemsLists;