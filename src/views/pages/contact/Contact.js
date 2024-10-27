import React from 'react';
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
      <h1 style={{ fontSize: '3rem' }}>Really simple contact page</h1>
      <Link to={'/'}>Return to dashboard</Link>
    </div>
  )
}

export default Contact;
