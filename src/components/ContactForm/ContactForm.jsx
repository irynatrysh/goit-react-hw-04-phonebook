import React, { useState } from 'react';
import { Form, Input, Button, Label } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = formData;
    onSubmit({ name, number });

    setFormData({
      name: '',
      number: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { name, number } = formData;

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
