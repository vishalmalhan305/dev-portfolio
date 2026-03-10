import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (for now, just log)
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-yotei-black text-yotei-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-yotei-gold">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yotei-gold">Get In Touch</h3>
            <p className="mb-4 text-yotei-cream">Feel free to reach out for collaborations or just to say hello!</p>
            <div className="space-y-2 text-yotei-cream">
              <p><strong className="text-yotei-gold">Email:</strong> vishal.malhan305@gmail.com</p>
              <p><strong className="text-yotei-gold">Phone:</strong> 647-897-2953</p>
              <p><strong className="text-yotei-gold">LinkedIn:</strong> <a href="https://linkedin.com/in/vishalmalhan" className="text-yotei-gold hover:text-yotei-red">linkedin.com/in/vishalmalhan</a></p>
              <p><strong className="text-yotei-gold">GitHub:</strong> <a href="https://github.com/vishalmalhan305" className="text-yotei-gold hover:text-yotei-red">github.com/vishalmalhan305</a></p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-yotei-gold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-yotei-dark-gray border border-yotei-gold/40 rounded-lg focus:outline-none focus:border-yotei-gold text-yotei-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-yotei-gold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-yotei-dark-gray border border-yotei-gold/40 rounded-lg focus:outline-none focus:border-yotei-gold text-yotei-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-yotei-gold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 bg-yotei-dark-gray border border-yotei-gold/40 rounded-lg focus:outline-none focus:border-yotei-gold text-yotei-white"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-yotei-gold hover:bg-yotei-red text-yotei-black hover:text-white px-6 py-3 rounded-lg transition duration-300 font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;