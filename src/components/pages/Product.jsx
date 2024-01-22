import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStarAndCrescent, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoding(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoding(false)

    }
    getProduct();

  }, [])

  const Loading = () => {
    return (
      <>
        Loading....
      </>
    );
  }
  const ShowProducts = () => {
    return (
      <>
        <div className=' grid grid-cols-1 sm:grid-cols-2 m-5'>

          <div><img src={product.image} alt="" className='w-[400px] h-[400px] mx-4' /></div>
          <div className='flex flex-col gap-4 mx-4'>
            <div><h1 className='font-bold text-xl'> Categories : {product.category}</h1></div>
            <div><h1>{product.title}</h1></div>
            <div><h1>Ratings :<FontAwesomeIcon icon={ faStar} /> {product.rating && product.rating.rate}</h1></div>
            <div><h1>{product.description}</h1></div>
            <div><h1>{product.price}</h1></div>
          </div>
        </div>
      </>
    )

  }



  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold text-center mt-4'>Letest Products</h1><hr className='my-2' />
      </div>

      <div>
        {loding ? <Loading /> : <ShowProducts />}
      </div>



    </div>
  )
}

export default Product