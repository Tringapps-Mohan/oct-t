import './Supplier.css';
import React, {  useState } from 'react';


function Supplier(props){
    
    const [content,setContent] = useState(props.content);
    const fun = ()=>{
        localStorage.setItem("currentSupplier",JSON.stringify(content));
    };
    return (
    <input type={"submit"} value={props.name} className="Supplier" onClick={fun}/>
    );
}

export default Supplier;