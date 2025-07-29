import React, { useState } from 'react'
import Child from '../Child/Child.jsx';



const Parent = () => {

    const [allProduct, setallProduct] = useState([
        {
            id:1,
            name: "samsung",
            price: 15000,
            category:"mobile",
            count: 10,
            onSale: true
        },
        {
            id:2,
            name: "tv",
            price: 20000,
            category:"televation",
            count: 15,
            onSale: false
        },
        {
            id:3,
            name: "oppo",
            price: 9000,
            category:"mobile",
            count: 7,
            onSale: false
        },
        {
            id:4,
            name: "toshiba",
            price: 30000,
            category:"tv",
            count: 12,
            onSale: true
        }
    ])

    
    function del(id){
        const x = allProduct.filter(function(product){return product.id != id })
        setallProduct(x)
    }

    
    function inc(idx){
        const y = structuredClone(allProduct)
        y[idx].count++;
        setallProduct(y)
    }

  return (
    <div  className='container my-4'>
        <div className="row g-3">

            {allProduct.map(function(product , idx){
                return (
                <Child key={idx} product={product} del={del} idx={idx} inc={inc}/>
                );
            })}
        </div>
    </div>
  )
}

export default Parent


