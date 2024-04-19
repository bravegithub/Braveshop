import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Update() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id:'',
    category: '',
    name: '',
    description: '',
    quantity: '',
    price: '',
    photo: null,
  });

  useEffect(() => {
    const { id, category, name, description, quantity, price, photo } = router.query;

    if (id && category && name && description && quantity && price && photo) {
      setFormData({
        id,
        category,
        name,
        description,
        quantity,
        price,
        photo: null, 
      });
    }
  }, [router.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('id', formData.id);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('photo', formData.photo);

    try {
      const response = await fetch('/api/updateproduct', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      } else {
        router.push('/home');
        const data = await response.json();
        console.log('Product updated successfully:', data);
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  useEffect(() => {
    if (!formData.category) {
      const defaultCategory = formData.category === '1' ? 'Clothes' : 'Shoes';
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: defaultCategory,
      }));
    }
  }, [formData.category]);
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6 mt-14">
          <div className="bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">Update</h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="category" className="text-lx font-serif">Category:</label>
                <select id="category" name="category" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleInputChange} value={formData.category}>
                  <option value="">Select categorie</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="text-lx font-serif">Name:</label>
                <input type="text" placeholder="name" id="name" name="name" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleInputChange} value={formData.name} />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-lg font-serif">Description:</label>
                <textarea id="description" cols="30" rows="2" placeholder="write here.." name="description" className="w-full font-serif p-4 text-gray-600 bg-indigo-50 outline-none rounded-md" onChange={handleInputChange} value={formData.description}></textarea>
              </div>
              <div>
                <label htmlFor="quantity" className="text-lx font-serif">Quantity:</label>
                <input type="number" placeholder="quantity" id="quantity" name="quantity" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleInputChange} value={formData.quantity} />
              </div>
              <div>
                <label htmlFor="price" className="text-lx font-serif">Price:</label>
                <input type="number" placeholder="unit price" id="price" name="price" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleInputChange} value={formData.price} />
              </div>
              <div>
                <label htmlFor="photo" className="text-lx font-serif">Photo:</label>
                <input type="file" id="photo" name="photo" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={handleFileChange} />
              </div>
              <button type="submit" className="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-yellow-700 hover:bg-yellow-500 hover:grow">Update Product</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Update;
