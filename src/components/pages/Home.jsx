import React, { useState, useEffect, Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


// import { json } from 'react-router-dom'

const Home = () => {
  const [fake, setFake] = useState([]);
  const [filter, setFilter] = useState(fake);
  const [loding, setLoding] = useState(false);
  let componentMounted = true;



  useEffect(() => {
    const fakestore = async () => {
      setLoding(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        const jsonData = await response.clone().json()
        setFilter(await response.json())
        setFake(jsonData);
        setLoding(false)
        // console.log(filter)
      }
      return () => {
        componentMounted = false;
      }


    }

    fakestore();

  }, [])


  const Loading = () => {
    return (
      <>
        Loading....
      </>
    );
  }

  const filterProduct = (cat) => {
    const updateList = fake.filter((x) => x.category === cat);
    setFilter(updateList);
  }


  const ShowProducts = () => {
    return (
      <>
        <div className='flex justify-center gap-5 my-4'>
          <button className='border text-xl hover:bg-slate-400 hover:text-white py-1  px-3 cursor-pointer font-semibold' onClick={() => setFilter(fake)}>All</button>
          <button className='border text-xl hover:bg-slate-400 hover:text-white py-1  px-3 cursor-pointer font-semibold' onClick={() => filterProduct("men's clothing")}>Mens</button>
          <button className='border text-xl hover:bg-slate-400 hover:text-white py-1  px-3 cursor-pointer font-semibold' onClick={() => filterProduct("women's clothing")}>Womens</button>
          <button className='border text-xl hover:bg-slate-400 hover:text-white py-1  px-3 cursor-pointer font-semibold' onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className='border text-xl hover:bg-slate-400 hover:text-white py-1  px-3 cursor-pointer font-semibold' onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 '>
          {
            filter.map((data) => {
              // console.log(data)
              return (

                <>
                  <div className='w-[250px] h-[300px] border-2 mx-auto my-2'>
                    <div className='h-[50%]'><img src={data.image} alt="image" className='h-[100%] mx-auto mt-2' key={data.id} /></div>
                    <div className='py-4 px-2'>
                      <h1 className=' font-bold text-md mb-3'>{data.title.substring(0, 12)}...</h1>
                      <p className='mb-3'>{data.price}$</p>
                      <div className='flex items-center justify-between mx-2 '>
                        <button className=' border p-2 outline-green-600 hover:text-white font-semibold rounded-lg hover:bg-green-600  duration-400'><Link to={`/product/${data.id}`}>Buy Now</Link></button>
                       <Link to="/cart"> <FontAwesomeIcon icon={faCartPlus} className='text-2xl p-2 bg-red-500 rounded-md text-white' /></Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }
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

export default Home