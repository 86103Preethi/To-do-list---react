import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";



const AddItems = ({newItem,setNewItem,handleSubmit}) => { 

  const inputRef=useRef() //calling useref in inputref variable
  
  return (  //controlled inputs
    <form className="flex items-center justify-center mt-6 " onSubmit={handleSubmit}>
      <label htmlFor="addItem" className="mr-2">ADD ITEMS</label>      
      <input
        autoFocus
        ref={inputRef}  //ref- reference variable
        id="addItem"
        type="text"
        placeholder =" Add here"
        className="border border-gray-400 rounded-md p-2"
        required
        value = {newItem}  //giving input
        onChange={(e)  => setNewItem(e.target.value)} //linking setnewitem to onchange

      />
      <button
        type="submit"
        aria-label="Add Items"
        className="ml-2  bg-blue-300 hover:bg-green-300 border-gray-400 text-black rounded-md p-3"
        onClick={() => (inputRef.current.focus())} //when we click on the + button, the focus we will be gone . basically  the focus will be given to current searchbox
      >
      <FaPlus />
      </button>
    </form>
  );
};

export default AddItems;
