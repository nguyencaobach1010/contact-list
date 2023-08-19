import React from 'react';

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface ContactDetailsProps {
  contact: Contact | null;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {
  if (!contact) {
    return <div>Không có liên hệ được chọn</div>;
  }

  return (
    <div>
      <h2>Info Detail</h2>
      <p>Tên: {contact.name}</p>
      <p>Số điện thoại: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ContactDetails;
