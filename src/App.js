import data from './data.json';
import './App.css';
import ProductCart from './ProductCart';
import { useState } from 'react';
function App() {
  const [currentSupplierContent,setCurrentSupplierContent] = useState(JSON.parse(localStorage.getItem("currentSupplier")));
  const fun = (e)=>{
    e.preventDefault();
    console.log(e.target.value);
    localStorage.setItem("currentSupplier",JSON.stringify(data[e.target.value].options));
    setCurrentSupplierContent(JSON.parse(localStorage.getItem("currentSupplier")));
  };
  return (
    <form onSubmit={fun}>
      <div className='supplierContainer'>
      <input type={"submit"} value="realme" className="Supplier" onClick={fun}/>
      <input type={"submit"} value="samsung" className="Supplier" onClick={fun}/>
      <input type={"submit"} value="intex" className="Supplier" onClick={fun}/>
    </div>
    <div>
    <ProductCart content={currentSupplierContent}/>
    </div>
    </form>
  );
}

export default App;
