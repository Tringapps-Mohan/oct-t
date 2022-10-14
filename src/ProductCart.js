import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import SelectBox from "./SelectBox";
function ProductCart(props){
    console.log(props.content);
    return (
        <div>
        <SelectBox options={props.content}/><InputBox placeHolder="Quantity"/><InputBox placeHolder="Price" readOnly={true}/><InputBox placeHolder="Total"/>
        </div>
    );
}

export default ProductCart;