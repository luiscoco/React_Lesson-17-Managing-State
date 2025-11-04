import React, { useState } from 'react'

const contacts = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' }
]

function ContactList({ contacts, onSelect }) {
  return (
    <ul className="reset stack">
      {contacts.map(c => (
        <li key={c.email} className="item">
          <span>{c.name}</span>
          <button onClick={() => onSelect(c)}>Open Chat</button>
        </li>
      ))}
    </ul>
  )
}

function Chat({ contact }) {
  const [text, setText] = useState('')
  return (
    <div className="stack">
      <h3 style={{margin:0}}>Chat with {contact.name}</h3>
      <textarea
        rows={4}
        placeholder="Type a message…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="small">Your draft message is preserved per contact. Switching contact resets via a unique key.</p>
    </div>
  )
}

export default function Messenger() {
  const [contact, setContact] = useState(contacts[0])
  return (
    <div className="stack">
      <ContactList contacts={contacts} onSelect={setContact} />
      {/* Changing key forces Chat to remount, resetting its internal state */}
      <Chat key={contact.email} contact={contact} />
    </div>
  )
}
