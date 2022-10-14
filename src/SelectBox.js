import React, { useState } from "react";

// import { useSelector } from "react-redux";

function SelectBox(props){
    const [options,setOptions] = useState(props.options);
    return (
            <select>
                {options.map((e,i)=><option key={i}>{e}</option>)}           
            </select>
        );
}

export default SelectBox;