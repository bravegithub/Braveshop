import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function History() {
    const [carts, setCarts] = useState([]);
    const [cart, setCart] = useState([]);
    const now = new Date();

    useEffect(() => {
        const fetchCarts = async () => {
            try {
                const response = await fetch('/api/history');
                if (!response.ok) {
                    throw new Error('Failed to fetch carts');
                }
                const data = await response.json();
                console.log('data1:', data);
                setCart(data);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };
        fetchCarts();
    }, []);

    useEffect(() => {
        if (cart !== null) {
            setCarts(cart.data);
        }
    }, [cart]);
    const downloadPageAsPDF = () => {
        const filename = 'facture.pdf';
      
        const element = document.getElementById('page-content');
        if (!element) {
          console.error('Element with id "page-content" not found');
          return;
        }
        const downloadButton = document.getElementById('download-button');
        if (downloadButton) {
          downloadButton.style.display = 'none';
        }
      
        const scale = 2;
      
        html2canvas(element, { scale: scale }).then((canvas) => {
          const pdf = new jsPDF('p', 'mm', 'a4');
          const width = pdf.internal.pageSize.getWidth();
          const height = pdf.internal.pageSize.getHeight();
          const imgData = canvas.toDataURL('image/png');
          pdf.addImage(imgData, 'PNG', 0, 0, width, height);
          pdf.save(filename);
          if (downloadButton) {
            downloadButton.style.display = 'block';
          }
        }).catch((error) => {
          console.error('Error generating PDF:', error);
        });
      };
      
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/css/main.d7f96858.css" />
                <style>
                  {`
                    #download-button {
                      display: block;
                    }
                  `}
                </style>
            </Head>
            <div id="page-content" className="flex flex-col justify-center items-center pt-4 mt-14">
                <div className="flex items-center justify-between rounded-t-3xl p-6 w-full">
                    <div className="text-lg font-bold text-navy-700 lg:ml-28 dark:text-white">
                        History
                    </div>
                    <button id="download-button" className="text-lg font-bold text-navy-700 lg:mr-28 dark:text-white" onClick={downloadPageAsPDF}>Download</button>

                </div>
                <div className="relative flex flex-col items-center rounded-[10px] border-[1px] max-h-[100vh] overflow-y-auto border-gray-200 w-[600px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    {carts && carts.map((cat, index) => (
                        <div key={index} className="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                            <div className="flex items-center gap-3">
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img
                                        className="h-full w-full rounded-xl"
                                        src={`/Photos/${cat.photo}`}
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-base font-bold text-navy-700 dark:text-white">
                                        {cat.n_product}
                                    </h5>
                                    <p className="mt-1 text-sm font-normal text-gray-600">
                                        Qty : <span>{cat.qte}</span>
                                    </p>
                                    <p className="mt-1 text-sm font-normal text-yellow-600">
                                        Out of stock
                                    </p>
                                </div>
                            </div>
                            <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                                <div className="ml-1 flex items-center text-sm font-bold text-yellow-700">
                                    <p>   </p>
                                    <span className="">Total </span> <p className="ml-1">{cat.total}Fbu</p>
                                </div>
                                <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                                    <p>{`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default History;
