import { useRouter } from 'next/router';
import React, { useState ,useEffect} from "react";
import Link from 'next/link'

 const Navbar = ({ onCallback }) => {
  const [cartCount, setCartCount] = useState(0); 
  
  const router = useRouter()
  const currentUrl = router.asPath;

  const goHome = () => router.push('/home')
  const addInStock = () => router.push('/addStock')

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await fetch('/api/cartcount');
        if (response.ok) {
          const data = await response.json()
          setCartCount(data.count);
        } else {
          throw new Error('Failed to fetch cart count');
        }
      } catch (error) {
        console.error('Error fetching cart count:', error);
      }
    };

    fetchCartCount();
  }, []);
  return (
    <div>
        <nav id="header" className="w-full z-30 top-0 py-1 shadow-lg fixed bg-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

            <label for="menu-toggle" className="cursor-pointer  block">
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden shadow-2xl rounded-md w-1/3  order-1 absolute top-12 bg-white " id="menu">
                <nav>
                    <ul className=" items-center justify-between text-base text-gray-700 pt-4 ">
                    <li><label for="menu-toggle" className="inline-block no-underline hover:text-black w-full py-2 px-4 cursor-pointer hover:bg-gray-200 " onClick={() => router.push('home')}  >Home</label></li>
                        <li><label for="menu-toggle" className="inline-block no-underline hover:text-black w-full py-2 px-4 cursor-pointer hover:bg-gray-200 "  onClick={() => router.push('Clothers')}  >Clothers</label></li>
                        <li><label for="menu-toggle" className="inline-block no-underline hover:text-black w-full py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-md" onClick={() => router.push('Shoes')}  >Shoes</label></li>
                        <li><label for="menu-toggle" className="inline-block no-underline hover:text-black w-full py-2 px-4 cursor-pointer hover:bg-gray-200 "  onClick={() => router.push('Actions')}  >Actions</label></li>
                        <li><label for="menu-toggle"a className="inline-block no-underline hover:text-black w-full py-2 px-4 cursor-pointer hover:bg-gray-200 rounded-md" onClick={() => router.push('history')}  >View History</label></li>
                    </ul>
                </nav>
            </div>

            <div className="order-1 md:order-2">
                <div onClick={goHome} className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl cursor-pointer " >
                    <svg className="fill-current text-yellow-500 w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                    </svg>
                    BraveShop
                </div>
            </div>
            
            <div className="order-2 md:order-3 flex items-center" id="nav-content">
            <button className="inline-block no-underline hover:text-black" title='logout' onClick={()=>router.push('/')}>
                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" 
                       width="24" height="24" viewBox="0 0 24 24">
                        <circle fill="none" cx="12" cy="7" r="3" />
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                </button>
                <button onClick={addInStock} className="  relative hover:grow no-underline hover:bg-yellow-700 flex bg-yellow-500 p-2 rounded-md text-white ml-4 " href="./components/cart">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>

                    <span className="">in Stock</span>
                </button>
            </div>
        </div>
    </nav>
    </div>
  )
}
export default Navbar;