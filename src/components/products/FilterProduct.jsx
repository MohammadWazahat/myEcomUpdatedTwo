import React, { useState } from 'react'
import Data from '../../DummyProducts.json'

const FilterProduct = () => {
    // console.log(Data)
    // console.log(Data[0].brand)
    const newData = Data.map((item)=>{
        return item.brand
    })
    // console.log(newData)

  // to merge all array in one
  const x = newData.flat();
//   console.log(x)
    const Y = [...new Set(x)];
//   console.log(Y)

 const [arr,setArr] = useState(Y)
//  console.log(arr)

//  const FilterByBrand = (x) => {
//     console.log(x);
//  }


 const [data, setData] = useState(Data);

 const FilterByBrand = (x) => {
    console.log(x)
   const brands = data.filter((data) => data.brand === x);
   console.log(brands);
   setData(brands);
 };
  return (
    <div>
        {
            arr.map((item,index)=>{
                return <button key={index} onClick={()=>FilterByBrand(item)}>{item}</button>
            })
        }
        {
data.map((item)=>{
    return <div>{item.brand}</div>
})
        }
      
    </div>
  )
}

export default FilterProduct
