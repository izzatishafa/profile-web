// import styles from './ContactStyles.module.css';

// function Contact() {
//   return (
//     <section id="contact" className={styles.container}>
//       <h1 className="sectionTitle">Contact</h1>
//       <form action="">
//         <div className="formGroup">
//           <label htmlFor="name" hidden>
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Name"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="email" hidden>
//             Email
//           </label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Email"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="message" hidden>
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Message"
//             required></textarea>
//         </div>
//         <input className="hover btn" type="submit" value="Submit" />
//       </form>
//     </section>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import styles from './ContactStyles.module.css';
import { supabase } from '../../../supabase.js'; // Import Supabase client

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('messages').insert([
        { name: formData.name, email: formData.email, message: formData.message }
      ]);
      if (error) {
        console.error('Error saving message to Supabase:', error.message);
        alert('Terjadi kesalahan saat mengirim pesan.');
        return;
      }
      alert('Pesan berhasil dikirim!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving message to Supabase:', error.message);
      alert('Terjadi kesalahan saat mengirim pesan.');
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;

