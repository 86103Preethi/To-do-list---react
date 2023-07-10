import React from 'react'
import ItemsLists from './ItemsLists';
 

const Content =({items,handleCheck,handleDelete}) =>{ //props drilling
   
   return ( //jsx code
    <main className='bg-blue-300  container border-3 border-orange-700 mx-auto mt-10 p-4 '>
      
      {(items.length)?(
         <ItemsLists
         items={items}  
         handleCheck={handleCheck}
         handleDelete={handleDelete}
         />
      ) : ( //if it is false this will be printed
      <p className="mt-2">Your list is empty</p>)
      }

    </main>
   )
}

export default Content;