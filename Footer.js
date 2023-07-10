import React from 'react'


const  Footer = ({length}) => {

    return (  
     <footer className='mt-40 flex justify-center bg-purple-300 '>{length} list {length ===1? "Item":"items"}</footer>
    );
}
 
export default Footer;