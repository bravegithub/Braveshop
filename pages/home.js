import Image from "next/image";
import React, { useState } from "react";
import Sale from "./components/sale";
import { useEffect } from "react";

export default function Home({windw}) {
      const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
  <>
  <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">

    <div className="carousel relative container mx-auto mt-12" style={{ maxWidth: "1600px" }}>
        <div className="carousel-inner relative overflow-hidden w-full">
      
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
            {/* url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80') */}
            <div className="carousel-item absolute opacity-0 h-[10vh]" style={{height:"50vh"}}>
    <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right relative" style={{backgroundImage: "url('/Photos/market1.png')"}}>
        <div className="absolute inset-0 bg-gray-900 opacity-70 "></div> {/* This creates a semi-transparent black layer with blur effect */}
        <div className="container mx-auto relative z-10">
            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-yellow-500 text-5xl my-4 font-bold">Manage your Stock</p>
                {/* <a className="text-xl inline-block no-underline border-b border-gray-50 text-gray-50 leading-relaxed hover:text-black hover:border-black" href="#sale">view product</a> */}
            </div>
        </div>
    </div>
</div>


        </div>
    </div>

    <div id="sale">


        <Sale /> 

        
    </div>


    <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
            <h3 className="font-bold text-gray-900">Copyright@2024</h3>
    </footer>

  </div>
  </>
  )
}
