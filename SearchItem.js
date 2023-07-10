import React from 'react'




const SearchItem = ({search,setSearch}) => {

    return ( 
    <form className='searchFrom flex items-center justify-center mr-5' onSubmit={(e)=>e.preventDefault()} >
       <label htmlFor='search' className="mr-2 flex mt-10 " >SEARCH </label>
       <input className="border border-gray-400 rounded-md mt-10 p-2"
       id='search'
       type="text"
       role='searchbox'
       placeholder='search items'
       value={search} //whatever we type will get stored in search
       onChange={(e)=>setSearch(e.target.value)}
       />
    </form>

           
     );
}
 
export default SearchItem;