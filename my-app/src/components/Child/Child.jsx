import React from 'react'

const Child = ({product , del , inc , idx}) => {

  return (
      <div className="col-md-4">
                <div className="inner bg-secondary-subtle p-3 position-relative">
                        <h6>id:{product.id} </h6>
                        <h6>Name:{product.name}</h6>
                        <h6>Price:{product.price} </h6>
                        <h6>Catrgory:{product.category} </h6>
                        <h6>Count:{product.count} </h6>

                        {product.onSale == true ? <div className='bg-danger text-white p-2 position-absolute top-0 end-0'>sale</div> : ""}

                        <button onClick={function(){
                            del(idx)
                        }} className='btn btn-outline-danger w-100 my-2'>Delete</button>

                        <button onClick={function(){
                            inc(idx)
                        }} className='btn btn-outline-info w-100 my-2'>update</button>
                    </div>
        </div>
  )
}

export default Child