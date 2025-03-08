import React, { useEffect, useState } from "react";
import { use } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import server from "../server";
import nav from '../component/nav'
import { IoIosAddCircleOutline } from "react-icons/io";
import { set } from "../../../backend/app";
import {RiSubtractFill} from "react-icons/ri"



const productDetail = ()=>{
    const [product,setProduct] = useState()
    const [error,setError] = useState('')
    const {id} = useParams()
    const[img,setImg] = useState('')
    const [state,setState] = useState(0);
    const email = 'balaji.s.s82@kalvium.community';
useEffect(()=>{
    const fetchproduct = async()=>{
        try{
            const {data} = await axios.get(`${server}/product/product/${id}`)
            console.log(data)
            setProduct(data)
            setImg(data.images[0]);
            console.log(img)
        }catch(err)
        {
            console.log(e.message)
            setError(e.message)
        }
    }
    if(error)
    {
        return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
    }
    fetchproduct()
},[id])
const addToCart=async() => {
    try{
      if (state <= 0) {
        console.log("Select at least 1 quantity before adding to cart.");
        return;
      }
      const res = await axios.post(`${server}/product/addTocart`,{
        userId:email,
        productId:id,
        quantity:state
      })
      console.log(res)
    }catch(e){
    console.log(e)
    }
      }

    return(
        <div>
            <Nav/>
            Product details
            <h1 className="text-xl font-bold">{product.name}</h1>
            <img src={`http://localhost:5000/products/${img}`} alt={product.name} className="w-64 h-64 object-cover"/>
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 font-semibold">Price: ${product.price}</p>
            <div className="flex flex-col wt-6 justify-center">
            <button>Add to wishlist</button>
            <div className="flex justify-center items-center gap-1">
            <button><IoIosAddCircleOutline onclick={()=>setState(prev=>prev+1)}/></button>
            <button>Add to Cart
                <RiSubtractFill onclick={()=>MdSettingsInputAntenna(prev=>prev!=0? prev-1:0)}/>
                    {state}
            </button>
            </div>
            </div>
        </div>
    )
}
export default productDetail;