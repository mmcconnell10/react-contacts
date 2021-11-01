import React, { useState } from 'react'
import ListContacts from './ListContacts'

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 'tyler',
      name: 'Tyler McGinnis',
      handle: '@tylermcginnis',
      avatarURL: 'http://localhost:5001/tyler.jpg'
    },
    {
      id: 'karen',
      name: 'Karen Isgrigg',
      handle: '@karen_isgrigg',
      avatarURL: 'http://localhost:5001/karen.jpg'
    },
    {
      id: 'richard',
      name: 'Richard Kalehoff',
      handle: '@richardkalehoff',
      avatarURL: 'http://localhost:5001/richard.jpg'
    },
  ])
  
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => {
      return c.id !== contact.id
    }))
    
  }
  
    return (
      <div>
        <ListContacts
          contacts={contacts}
          onDeleteContact={removeContact}
        />
      </div>
    )
  
}

export default App