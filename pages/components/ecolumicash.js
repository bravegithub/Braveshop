import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const EcoLumicash = () => {
    const router = useRouter()
    const Facture = () => {
        router.push('/components/facture');
      };

  return (
    <>
<div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{maxWidth : "600px"}}>
        <div className="w-full pt-1 pb-5">
            <div className="bg-yellow-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
  <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
</svg>

            </div>
        </div>
        <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Ecocash & Lumicash</h1>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Pay with</label>
            <div>
            <select  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="LUMICASH">LUMICASH</option>
            <option value="ECOCASH">ECOCASH</option>
          </select>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Phone number</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="+257 00 00 00 00" type="text"/>
            </div>
        </div>
        <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Code PIN</label>
            <div>
                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000" type="text"/>
            </div>
        </div>
        <div>
           
                            <button onClick={Facture} className="block w-full max-w-xs mx-auto bg-yellow-500 hover:bg-yellow-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                                PAY NOW
                            </button>
        
            
        </div>
    </div>
</div>

    </>
  );
};

export default EcoLumicash;