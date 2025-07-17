import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <section className='text-black'>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
        <input type="text" name="name" placeholder="Your Name" className="p-2 border" onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" className="p-2 border" onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" className="p-2 border h-24" onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
      <footer className="mt-8 text-center text-sm text-gray-600">
        Email: tungtranthanh14@gmail.com | github: https://github.com/Miisuha
      </footer>
    </section>
  );
};

export default Contact;