import React from 'react';

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface ContactListProps {
  contacts: Contact[];
  onSelectContact: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onSelectContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} onClick={() => onSelectContact(contact)}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
