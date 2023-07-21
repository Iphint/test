import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      // Kirim data formulir jika tidak ada kesalahan
      console.log('Data formulir yang dikirim:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Nama harus diisi';
    }
    if (!data.email.trim()) {
      errors.email = 'Email harus diisi';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Email tidak valid';
    }
    if (!data.message.trim()) {
      errors.message = 'Pesan harus diisi';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Validasi sederhana untuk email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.label}>
          <label htmlFor="name" className={styles.label1}>Nama:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.label}>
          <label htmlFor="email" className={styles.label1}>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.label}>
          <label htmlFor="message" className={styles.label1}>Pesan:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
