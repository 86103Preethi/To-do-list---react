import React from 'react'


const Header = (props) => {
  const {title}=props


      return (  
    <header>
        <h1 className="text-blue-400 flex justify-center text-3xl font-bold underline mt-20">
        {title}</h1>
    </header>
    );
}


Header.defaultProps={
    title:"lists"
}


export default Header;