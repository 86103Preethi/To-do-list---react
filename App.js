import Header from "./Header"
import Content from "./Content";
import Footer from "./Footer";
import {useState, useEffect} from 'react';
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";


function App() {
 
const API_URL = 'http://localhost:3500/items'; 


const [items,setItems] = useState([]);  //item-exciting item, setitem- added or modified items
// [] - empty list is given, so that even if the app crashes it will show 


// ([
//   {id:1, checked:true,  item: "Practice Coding"},
//   {id:2, checked:true,  item: "Learn react"},
//   {id:3, checked:false,  item: "Sleep" },
//   {id:4, checked:false,  item: "Drive" },
//   {id:5, checked:true,  item: "Walking" }
// ]);


const [newItem,setNewItem] = useState(' '); 

const [search,setSearch]=useState(' ');


useEffect(()=> {
  const fetchItems = async () => {  //async = parallely fun will run
    try{
      const response = await fetch(API_URL);
      console.log(response)
      const listItems =await response.json();  //changing response to json method
      console.log(listItems);
      setItems(listItems);   
    }
    catch (err){
      console.log(err.stack);
    }
  }
  (async() =>await fetchItems())() //await= will wait if is fetching is slow
},[])  //normally our code will render for every process, this can make the app slow, to reduce this we use this fun
 

//for adding new items to the items above
const addItem = (item) => {   //item - can be any name
  const id=items.length? items[items.length -1].id+1:1; //for getting unique id, concept= if there is items in the list, give the length of the last item and by adding 1 to that to we will get the unique id. Incase if there is no item length let it be 1
  const addNewItem ={id, checked:false, item} //syntax for adding
  const listItems =[...items,addNewItem] //it means add the addnewitem to the items
  setItems(listItems) //giving updtaed listitems to the setitems
  //localStorage.setItem("todo_list", JSON.stringify (listItems)) //the newly added list will not change even after we close the webpage. it will get stored
}


const handleCheck =(id) => {  //id - here, 'id' coming from the handleCheck
const listItems = items.map((item) =>item.id=== id?{...item, checked:!item.checked}:item);
setItems(listItems);
//localStorage.setItem("todo_list", JSON.stringify (listItems))
} 

const handleDelete = (id) => { 
const listItems = items.filter((item) => item.id!==id) ;
setItems(listItems);
//localStorage.setItem("todo_list",JSON.stringify(listItems));
}

const handleSubmit = (e) => {    //e= event target
  e.preventDefault()   //to prevent reload of the page in inspect
  console.log(newItem);
  if (!newItem) return;  //if we simply give enter it show no value in inspect
  console.log(newItem)
  addItem(newItem)
  setNewItem(' ')  //once the value is entered in the box it wil be empty after getting the value in the inspect. 
}

  return (
    <div className='App'>
     <Header title='TO DO LISTS'/>
     <AddItems
     newItem ={newItem}
     setNewItem={setNewItem}
     handleSubmit={handleSubmit}
     />
     <SearchItem
     search={search}
     setSearch={setSearch}
     />
     <Content  
         //search //
         items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}  
         handleCheck={handleCheck}
         handleDelete={handleDelete}
         />
     <Footer length={items.length} />
    </div>
  );
}

export default App;
