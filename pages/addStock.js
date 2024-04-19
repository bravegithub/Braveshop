import React, { useState } from 'react';
import { useRouter } from 'next/router';

function AddStock() {
  const route = useRouter();
  const validate = () => {
    toast.success('added successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  const [formData, setFormData] = useState({
    category: null, // Ajout de la catégorie dans le state initial
    name: '',
    description: '',
    quantity: '',
    price: '',
    size: '',
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('category', formData.category); // Ajout de la catégorie dans les données envoyées
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('photo', formData.photo);

    try {
      const response = await fetch('/api/addproduct', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      } else {
        route.push('/home')
        validate();
        const data = await response.json();
        setFormData({
          category: null, // Ajout de la catégorie dans le state initial
          name: '',
          description: '',
          quantity: '',
          price: '',
          size: '',
          photo: null,
        })
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name === 'category') {
      // Si la catégorie est "Clothes", assignez 1 à category, sinon assignez 2
      const categoryValue = value === 'Clothes' ? '1' : '2';
      setFormData({
        ...formData,
        [name]: categoryValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6 mt-14">
          <div className="bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">New Product</h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="category" className="text-lx font-serif">Category:</label>
                <select id="category" name="category" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleInputChange} >
                  <option value="">Select category</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="text-lx font-serif">Name:</label>
                <input type="text" placeholder="name" id="name" name="name" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-lg font-serif">Description:</label>
                <textarea id="description" cols="30" rows="2" placeholder="write here.." name="description" className="w-full font-serif p-4 text-gray-600 bg-indigo-50 outline-none rounded-md" onChange={handleInputChange}></textarea>
              </div>
              <div>
                <label htmlFor="quantity" className="text-lx font-serif">Quantity:</label>
                <input type="number" placeholder="quantity" id="quantity" name="quantity" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="price" className="text-lx font-serif">Price:</label>
                <input type="number" placeholder="unit price" id="price" name="price" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="photo" className="text-lx font-serif">Photo:</label>
                <input type="file" id="photo" name="photo" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleFileChange} />
              </div>
              <button type="submit" className="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-yellow-700 hover:bg-yellow-500 hover:grow">Add In stock</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddStock;
