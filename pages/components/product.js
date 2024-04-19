import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Product = ({ id }) => {
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const route = useRouter();

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increaseCount = () => {
        if(count<product.a_stock){
          setCount(count + 1);
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch this product');
                }
                const data = await response.json();
                setProduct(data.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    // Function to handle add to cart button click
    const handleAddToCart = async () => {
      const response = await fetch('/api/addtocart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category_id: product.category_id,
          id_product: product.id,      
          n_product:product.n_product,
          unit_price : product.unit_price,
          photo:product.photo,
          total:count*product.unit_price,
          qte:count
        })
      })
      const data = await response.json()
      if (response.ok) {
        if (data.success) {
         route.push('../home')
         console.log('product added successfully')
        } else {
          console.error('Error of adding');
        }
    };
  }
    return (
        <div className="min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2  px-10 mb-10 md:mb-0 overflow-hidden">
                        <div className="relative">
                            {product && product.photo && (
                                <img src={`/Photos/${product.photo}`} className="w-full relative z-10" alt="" />
                            )}
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            {product && (
                                <h1 className="font-bold uppercase text-2xl mb-5">{product.n_product}</h1>
                            )}
                            {product && (
                                <p className="text-sm">{product.description} <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">Price : </span>
                                {product && (
                                    <span className="font-bold text-4xl leading-none align-baseline">{product.unit_price}</span>
                                )}
                            </div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">Quantity : </span>
                                <span className="font-bold text-4xl leading-none align-baseline">{product && product.a_stock}</span>
                            </div>
                            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                                <span className="text-2xl leading-none align-baseline">Set quantity :</span>
                                <div className="flex items-center border-gray-100">
                                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={decreaseCount}> - </span>
                                    <input className="h-8 w-max border bg-white text-center text-xs outline-none" type="number" min="1" value={count} onChange={(e)=>setCount(e.target.value)} />
                                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={increaseCount}> + </span>
                                </div>
                            </div>
                            <button onClick={handleAddToCart} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-md px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> Sell</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
