import React from "react"
import products from './products'
import { IoMdShare } from "react-icons/io";
import { IoGitCompare } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

// hoverStart = () => {
//   document.getElementsByTagName(ProductsHover);
// }

export default function ProductsRender({ showProductsNum }) {
  console.log(showProductsNum);
  return (
    <>
      {products.slice(0, showProductsNum).map((data) => {
        return (
          <div className="product" key={data.id} >
            <img src={data.img} alt={data.name} />
            <div className="product-details">
              <p className="product-name">{data.name}</p>
              <p className="product-type">{data.category}</p>
              <div className="product-prices">
                <p className="product-price">Rp {data.price}</p>
                {data.mrp !== null && (
                  <p className="product-discount" id="products-discount">
                    Rp {data.mrp}
                  </p>
                )}
              </div>
            </div>
            <div className="product-hover"> 
              <button className='product-cart-btn'> Add to cart</button>
              <div className="product-hover-links">
                <div className='product-hover-link'>
                  <IoMdShare />
                  <p>Share</p>
                </div>
                <div className='product-hover-link'>
                  <IoGitCompare />
                  <p>Compare</p>
                </div>
                <div className='product-hover-link'>
                  <GoHeart />
                  <p>Like</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}