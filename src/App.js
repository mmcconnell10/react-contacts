import React, { useState, useEffect } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [contacts, setContacts] = useState([]);
  const [screen, setScreen] = useState('list');
  useEffect(() => {
    ContactsAPI.getAll()
    .then((contacts) => {
      setContacts(contacts)
    })
  }, []);

  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => {
      return c.id !== contact.id
    }))
    ContactsAPI.remove(contact);
    
  }
  
    return (
   <Routes>
      <Route exact path='/'>
      <ListContacts
        contacts={contacts}
        onDeleteContact={removeContact}
        setScreen={setScreen}
        />
      </Route>
      <Route path='/create' component={CreateContact}/>
   </Routes>
  )
}

export default App