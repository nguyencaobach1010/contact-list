import React, { useState } from 'react';
import './index.css'; 
import mockData from './mockData';
import ContactList from './ContactList/ContactList';
import SearchBar from './SearchBar/SearchBar';
import ContactDetails from './ContactDetails/ContactDetails';

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(mockData);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Contact List</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <div className="contact-list">
          <ContactList contacts={filteredContacts} onSelectContact={handleSelectContact} />
        </div>
        <div className="contact-details">
          <ContactDetails contact={selectedContact} />
        </div>
      </div>
    </div>
  );
};

export default App;
