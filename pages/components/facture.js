import React from 'react'
import { useEffect ,useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Facture() {
  const currentDate = new Date().toISOString().split('T')[0];
  const [carts,setCarts] = useState([]); 
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchCarts = async () => {
        try {
            const response = await fetch('/api/carts');
            if (!response.ok) {
                throw new Error('Failed to fetch carts');
            }
            const data = await response.json();
            console.log('data:',data);
            setCarts(data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };
    fetchCarts();
}, []);

const downloadPageAsPDF = () => {
  const filename = 'facture.pdf';

  // Check if the element exists
  const element = document.getElementById('page-content');
  if (!element) {
    console.error('Element with id "page-content" not found');
    return;
  }

  // Use html2canvas to render the HTML content onto a canvas
  html2canvas(element).then((canvas) => {
    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL('image/png');

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add the canvas image as a page to the PDF
    pdf.addImage(dataURL, 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);

    // Save the PDF
    pdf.save(filename);
  }).catch((error) => {
    console.error('Error generating PDF:', error);
  });
};

  return (
    <div id="page-content" class="bg-gray-200 print:bg-white md:flex lg:flex xl:flex print:flex md:justify-center lg:justify-center xl:justify-center print:justify-center sf">
<div class="lg:w-1/12 xl:w-1/4"></div>
<div class="w-full bg-white lg:w-full xl:w-2/3 lg:mt-20 lg:mb-20 lg:shadow-xl xl:mt-02 xl:mb-20 xl:shadow-xl print:transform print:scale-90">
  <header class="flex flex-col items-center px-8 pt-20 text-lg text-center bg-white border-t-8 border-yellow-700 md:block lg:block xl:block print:block md:items-start lg:items-start xl:items-start print:items-start md:text-left lg:text-left xl:text-left print:text-left print:pt-8 print:px-2 md:relative lg:relative xl:relative print:relative">
        
        <div class="flex flex-row mt-24 mb-2  ml-0 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl print:text-2xl lg:ml-12 xl:ml-12">INVOICE
          <div class="text-green-700">
            <span class="mr-4 text-sm">■ </span> #
          </div>
          <span id="invoice_id" class="text-gray-500">0196023</span>
        </div>
        <div class="flex flex-col lg:ml-12 xl:ml-12 print:text-sm">
          <span>Paid date: {currentDate }</span>
        </div>
        <div class="px-8 py-2 mt-16 text-3xl font-bold text-green-700 border-4 border-green-700 border-dotted md:absolute md:right-0 md:top-0 md:mr-12 lg:absolute lg:right-0 lg:top-0 xl:absolute xl:right-0 xl:top-0 print:absolute print:right-0 print:top-0 lg:mr-20 xl:mr-20 print:mr-2 print:mt-8 ">PAID</div>
        <button onClick={downloadPageAsPDF} class="cursor-pointer px-8 py-2 mt-16 text-xl font-bold text-green-700 border-2 border-green-700  md:absolute md:left-0 md:top-0 md:ml-12 lg:absolute lg:left-0 lg:top-0  print:absolute print:right-0 print:top-0 lg:ml-20 xl:ml-20 print:ml-2 print:mt-8">Download</button>
        
        <contract class="flex flex-col m-12 text-center lg:m-12 md:flex-none md:text-left md:relative md:m-0 md:mt-16 lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative print:flex-none print:text-left print:relative print:m-0 print:mt-6 print:text-sm">
          <span class="font-extrabold md:hidden lg:hidden xl:hidden print:hidden">FROM</span>
          <from class="flex flex-col">
              <span id="company-name" class="font-medium">BraveShop</span>
              <span id="company-country"><span class="flag-icon flag-icon-us"></span>Burundi</span>
              <div class="flex-row">
                  <span id="c-city">Bujumbura</span>,
              </div>
              <span id="company-mail">BraveShop.com</span>
          </from>
          <span class="mt-12 font-extrabold md:hidden lg:hidden xl:hidden print:hidden">TO</span>
          <to class="flex flex-col md:absolute md:right-0 md:text-right lg:absolute lg:right-0 lg:text-right print:absolute print:right-0 print:text-right">
              <span id="person-name" class="font-medium">Aimee-Gashimwe</span>
              <span id="person-address">Kiriri-vugizo  12.</span>
              <span id="person-phone">+257 62 241 922</span>
              <span id="person-mail">aimee@gmail.com</span> 
          </to>
      </contract>
    </header>
    <hr class="border-gray-300 md:mt-8 print:hidden"/>
  <content>
      <div id="content" class="flex justify-center md:p-8 lg:p-20 xl:p-20 print:p-2">
          <table class="w-full text-left table-auto print:text-sm" id="table-items">
              <thead>
                <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black">
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2 text-right">Qty</th>
                  <th className="px-4 py-2 text-right">Unit Price</th>
                  <th className="px-4 py-2 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart) => (
                  <tr key={cart.id}>
                    <td className="px-4 py-2 border">{cart.n_product}</td>
                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">{cart.qte}</td>
                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">${cart.unit_price}</td>
                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">${cart.total}</td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
  </content>
    <payment-history>
      <div class="mt-20 mb-20 print:mb-2 print:mt-2">
        <h2 class="text-xl font-semibold text-center print:text-sm">Payment History</h2>
        <div class="flex flex-col items-center text-center print:text-sm">
        <p class="font-medium">  {currentDate} {currentTime} CET <span class="font-light"><i class="lab la-cc-mastercard la-lg"></i> Credit Card Payment: $685.66 (Mastercard XXXX-XXXX-XXXX-0122)</span></p>
      </div>

     </div>
    </payment-history>
    <div class="flex flex-col items-center mb-24 leading-relaxed print:mt-0 print:mb-0">
      <span class="w-64 text-4xl text-center text-black border-b-2 border-black border-dotted opacity-75 sign print:text-lg">Gashimwe</span>
      <span class="text-center">Buyer</span>
  </div>
  <footer class="flex flex-col items-center justify-center pb-20 leading-loose text-white bg-gray-700 print:bg-white print:pb-0">
      <span class="mt-4 text-xs print:mt-0">Invoice generated on {currentDate} {currentTime}</span>
      <span class="mt-4 text-base print:text-xs">© 2024 BraveShop.  All rights reserved.</span>
      <span class="print:text-xs">Burundi - Buja, BJ 10023 98-2 W 67th St</span>
  </footer>
</div>
<div class="lg:w-1/12 xl:w-1/4"></div> 
</div>
  )
}

export default Facture