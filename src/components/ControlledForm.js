import React, { useState } from 'react';

function ControlledForm() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    console.log(username, password)
  }

  return (
    <div>
      <h1>Controlled Form</h1>
      <form className="Control-form" onSubmit={onSubmit}>
        <label htmlFor="username" className="password" >Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" className="password" >Password</label>
        <input
          id="username"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="Control-form" >
          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  )
}

export default ControlledForm;