import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './component/ProductCard';


const App = () => {

  let limit = 10;

  const [products, setProducts] = useState(null)
  const [page, setPage] = useState(0)
  console.log(page);
  
  



 

  
  return (
    <div className='flex flex-col gap-6 items-center'>
  <div className="w-full grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
    {
      products?.products.map((val)=>
      (
        <ProductCard key={val.id} product={val}/>
      ))}
    </div>
        <div className='flex gap-5 items-center'>
      <button 
      disabled={page===0}
      onClick={()=>setPage(page-1)} className='p-3 cursor-pointer bg-blue-500 rounded-xl text-white'>Prev</button>
      <p>page {page+1} of {totalPages}</p>
      <button
      disabled={page>=totalPages-1}
      onClick={()=>setPage(page+1)}
       className='p-3 cursor-pointer bg-blue-500 rounded-xl text-white'>Next</button>
    </div>
    </div>
  )
}

export default App








