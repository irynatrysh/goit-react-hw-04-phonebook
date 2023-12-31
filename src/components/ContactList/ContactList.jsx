import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
