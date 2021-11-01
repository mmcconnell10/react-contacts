import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ListContacts = ({contacts, onDeleteContact}) => {
  const [query, setQuery] = useState('');

  const showingContacts = query === ''
    ? contacts
    : contacts.filter((c) => (
      c.name.toLowerCase().includes(query.toLowerCase())
    ))
  return(
    <div className='list-contacts'>
      <div className='list-contacts-top'>
        <input 
          className='search-contacts'
          type='text'
          placeholder='Search Contacts'
          value={query}
          onChange={(event) => setQuery(event.target.value.trim())}
        />
      </div>
      {showingContacts.length !== contacts.length && (
        <div className='showing-contacts'>
          <span>Now showing {showingContacts.length} of {contacts.length}</span>
          <button onClick={() => setQuery('')}>Show All</button>
          
        </div>
      )}
      <ol className='contact-list'>
        {showingContacts.map((contact) => (
          <li key={contact.id} className='contact-list-item'>
            <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}></div>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>@{contact.handle}</p>
            </div>
            <button className='contact-remove' onClick={() => onDeleteContact(contact)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
    
  )
}

ListContacts.propTypes={
  contatcs: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;